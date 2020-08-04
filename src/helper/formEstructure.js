export default [
  {
    formTitle: 'Formulario de prueba',
    components: [
      {
        type: 'TextInput',
        componentType: 'Input',
        configItem: {
          label: 'Esto es un label normal',
          id: 'email',
          initialState: '',
        },
      },
      {
        type: 'TextInput',
        componentType: 'Input',
        configItem: {
          label: 'Number',
          type: 'number',
          id: 'numero',
          initialState: '',
        },
      },
      {
        type: 'TextInput',
        componentType: 'Input',
        configItem: {
          label: 'Password',
          type: 'password',
          id: 'password',
          initialState: '',
        },
      },
      {
        type: 'Button',
        componentType: 'Action',
        configItem: {
          title: 'Aceptar',
          action: 'NextTab',
        },
      },
    ],
  },
];
