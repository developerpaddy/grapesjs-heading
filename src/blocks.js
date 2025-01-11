export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('heading', {
    label: 'heading',
    content: { type: 'heading' },
    // media: '<svg>...</svg>',
  });
}
