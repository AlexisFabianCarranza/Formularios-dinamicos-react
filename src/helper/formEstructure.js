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
                    initialState: 'asd',
                },
            },
            {
                type: 'Checkbox',
                componentType: 'Checkbox',
                configItem: {
                    label: 'Esto es un checkbox',
                    id: 'testcheck',
                    initialState: true,
                },
            },
            {
                type: 'Radio',
                componentType: 'Radio',
                configItem: {
                    label: 'En que entorno desea publicar?',
                    id: 'testRadio',
                    initialState: 'PROD',
                    values: [
                        {
                            value: "TST",
                            label: "Testing"
                        },
                        {
                            value: "PROD",
                            label: "Produccion"
                        },
                        {
                            value: "STG",
                            label: "STG"
                        }
                    ]
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
