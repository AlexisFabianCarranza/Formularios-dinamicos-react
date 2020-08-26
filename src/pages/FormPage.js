import React from 'react';
import {Formik} from 'formik';
import {makeStyles} from '@material-ui/core/styles';
import yml from 'js-yaml';
import formEstructure from '../helper/formEstructure';
import getItem from '../helper/getItem';
import Appbar from '../components/Appbar';
import * as Yup from 'yup';
import Slider from "@material-ui/core/Slider";

export default () => {
    const classes = useStyles();

    const makeInitialState = () => {
        let initalState = {};
        for (let i = 0; i < formEstructure[0].components.length; i++) {
            if (['Input', 'Checkbox', 'Radio', 'Select', 'Switch', 'Slider']
                .indexOf(formEstructure[0].components[i].componentType) !== -1) {
                initalState[formEstructure[0].components[i].configItem.id] =
                    formEstructure[0].components[i].configItem.initialState;
            }
        }
        return initalState;
    };

    const renderComponents = (handleChange, values, handleBlur, isSubmitting, props, errors, touched, setFieldValue) => {
        const components = [];
        for (let i = 0; i < formEstructure[0].components.length; i++) {
            components.push(
                <>
                    {getItem(
                        formEstructure[0].components[i],
                        handleChange,
                        values,
                        handleBlur,
                        isSubmitting,
                        errors,
                        touched,
                        setFieldValue
                    )}
                    {errors[formEstructure[0].components[i].configItem.id] && touched[formEstructure[0].components[i].configItem.id] ? (
                        <div>{errors[formEstructure[0].components[i].configItem.id]}</div>
                    ) : null}
                </>
            );
        }
        return [components];
    };

    const validationSchema = (() => {
        let estructura = {};

        //itero cada componente a ver si tiene validadores
        formEstructure[0].components.forEach((componente) => {
            if (componente.configItem.hasOwnProperty("validator")) {
                estructura[componente.configItem.id] = Yup[componente.configItem.validator.type]()

                //itero cada configuracion de ese validador
                componente.configItem.validator.configs.forEach(config => {
                    estructura[componente.configItem.id] = estructura[componente.configItem.id][config.type](...config.props)
                })
            }
        });
        return Yup.object().shape(estructura);
    })();
    return (
        <div>
            <Appbar/>
            <div className={classes.containerForm}>
                <Formik
                    initialValues={makeInitialState()}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                        const ymlObject = yml.safeDump(values);
                        console.log(ymlObject);
                        alert(JSON.stringify(ymlObject, null, 2));
                    }}>
                    {(props) => {
                        const {
                            values,
                            errors,
                            touched,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue
                        } = props;
                        return (
                            <form onSubmit={handleSubmit} className={classes.form}>
                                <h1>{formEstructure[0].formTitle}</h1>
                                {renderComponents(
                                    handleChange,
                                    values,
                                    handleBlur,
                                    isSubmitting,
                                    props,
                                    errors,
                                    touched,
                                    setFieldValue
                                )}
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    containerForm: {
        display: 'flex',
        height: '80vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
}));
