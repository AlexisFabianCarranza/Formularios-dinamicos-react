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
                    initialState: ''
                },

            },
            {
                type: 'TextInput',
                componentType: 'Input',
                configItem: {
                    label: 'Cantidad de RAM en GB',
                    type: 'number',
                    id: 'numero',
                    initialState: '',
                    validator: {
                        type: "number",
                        configs: [
                            {
                                type: "min",
                                props: [
                                    1,
                                    "Tiene que ser mayor a 1"
                                ]
                            }, {
                                type: "max",
                                props: [
                                    32,
                                    "No podemos generar una vm con tanta ram"
                                ]
                            }
                        ]
                    }

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
                    validator: {
                        type: "string",
                        configs: [
                            {
                                type: "min",
                                props: [
                                    8,
                                    "La contraseña necesita ser de al menos 8 caracteres"
                                ]
                            },{
                                type: "max",
                                props: [
                                    12,
                                    "La contraseña es muy grande! maximo 12 caracteres"
                                ]
                            },{
                                type: "required",
                                props: [
                                    'Es necesario que usted inserte una contraseña'
                                ]
                            }

                        ]
                    }
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
                            label: "Producción"
                        },
                        {
                            value: "STG",
                            label: "STG"
                        }
                    ]
                },
            },
            {
                type: 'SelectDependiente',
                componentType: 'Select',
                configItem: {
                    label: 'En que server desea publicar?',
                    id: 'testSelectDep2',
                    initialState: '',
                    elementoPadre: 'testRadio',
                    values: [
                        {
                            value: "TST-1",
                            label: "TST-1",
                            req: "TST"
                        },
                        {
                            value: "TST-2",
                            label: "TST-2",
                            req: "TST"
                        },
                        {
                            value: "TST-3",
                            label: "TST-3",
                            req: "TST"
                        },
                        {
                            value: "PROD-1",
                            label: "produccion bs as-1",
                            req: "PROD"
                        },
                        {
                            value: "PROD-2",
                            label: "Produccion Santa fe-2",
                            req: "PROD"
                        },
                        {
                            value: "PROD-3",
                            label: "Produccion cordoba -3",
                            req: "PROD"
                        },
                        {
                            value: "STG-1",
                            label: "STG-1",
                            req: "STG"
                        },
                        {
                            value: "STG-2",
                            label: "STG-2",
                            req: "STG"
                        },
                        {
                            value: "STG-3",
                            label: "STG-3",
                            req: "STG"
                        },
                    ]
                },
            },
            {
                type: 'Select',
                componentType: 'Select',
                configItem: {
                    label: 'En que entorno desea publicar con select?',
                    id: 'testSelect',
                    initialState: '',
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
                type: 'SelectDependiente',
                componentType: 'Select',
                configItem: {
                    label: 'En que server desea publicar?',
                    id: 'testSelect2',
                    initialState: '',
                    elementoPadre: 'testSelect',
                    values: [
                        {
                            value: "TST-1",
                            label: "TST-1",
                            req: "TST"
                        },
                        {
                            value: "TST-2",
                            label: "TST-2",
                            req: "TST"
                        },
                        {
                            value: "TST-3",
                            label: "TST-3",
                            req: "TST"
                        },
                        {
                            value: "PROD-1",
                            label: "produccion bs as-1",
                            req: "PROD"
                        },
                        {
                            value: "PROD-2",
                            label: "Produccion Santa fe-2",
                            req: "PROD"
                        },
                        {
                            value: "PROD-3",
                            label: "Produccion cordoba -3",
                            req: "PROD"
                        },
                        {
                            value: "STG-1",
                            label: "STG-1",
                            req: "STG"
                        },
                        {
                            value: "STG-2",
                            label: "STG-2",
                            req: "STG"
                        },
                        {
                            value: "STG-3",
                            label: "STG-3",
                            req: "STG"
                        },
                    ]
                },
            },
            {
                type: 'Switch',
                componentType: 'Switch',
                configItem: {
                    label: 'Esto es un Switch',
                    id: 'testSwitch',
                    initialState: true,
                },
            },
            {
                type: 'Slider',
                componentType: 'Slider',
                configItem: {
                    label: 'Esto es un Slider cantidad GB de RAM',
                    id: 'testSliderONE',
                    initialState: 8,
                    min: 1,
                    max: 32,
                    step: 1
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
