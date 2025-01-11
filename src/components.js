export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('heading', {
    model: {
      defaults: {
        tagName: 'h1',
        editable: true,
        traits: [
          {
            type: 'text',
            name: 'content',
            label: 'Content',
          },
          {
            type: 'select',
            name: 'type',
            label: 'Type',
            options: [ // Array of options
              { id: 'h1', label: 'H1'},
              { id: 'h2', label: 'H2'},
              { id: 'h3', label: 'H3'},
              { id: 'h4', label: 'H4'},
              { id: 'h5', label: 'H5'},
              { id: 'h6', label: 'H6'},
            ]
          }
        ],
        components: {
          type: 'textnode',
          content: 'Heading',
        },
        attributes: { 'class': 'heading' },
      },
      init() {
        this.on('change:attributes:content', this.handleTextChange);
        this.on('change:attributes:type', this.handleHeaderTypeChange);
      },
      handleTextChange(model) {
        this.components({ type: 'textnode', content: this.getAttributes().content });
      },
      handleHeaderTypeChange(model) {
        this.set('tagName', this.getAttributes().type);
      }
    },
    view: {
    },
  });
};
