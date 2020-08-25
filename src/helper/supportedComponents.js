export default [
  {
    type: 'TextInput',
    id: 'TextInput',
    componentType: 'Input',
    configItem: {
      label: 'TextInput',
      id: '',
      initialState: '',
    },
    previewInfo: {
      icon: 'text_fields',
      title: 'Text field',
      description: 'Single line text field',
    },
  },
  {
    type: 'Button',
    id: 'Button',
    componentType: 'Action',
    configItem: {
      title: 'Button',
      action: 'NextTab',
    },
    previewInfo: {
      icon: 'smart_button',
      title: 'Button',
      description: 'Embed custom behaviour',
    },
  },
  {
    type: 'Text',
    id: 'text',
    componentType: 'Title',
    configItem: {
      text: 'Title',
    },
    previewInfo: {
      icon: 'spellcheck',
      title: 'Title',
      description: 'Form title',
    },
  },
];
