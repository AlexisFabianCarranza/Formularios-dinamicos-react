import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {makeStyles} from '@material-ui/core/styles';
import yml from 'js-yaml';
import formEstructure from '../helper/formEstructure';
import getItem from '../helper/getItem';
import Appbar from '../components/Appbar';

export default () => {
  const classes = useStyles();
  const [initialStateForm, setInitialStateForm] = useState({});

  useEffect(() => {
    const makeInitialState = () => {
      let initalState = {};
      for (let i = 0; i < formEstructure[0].components.length; i++) {
        if (formEstructure[0].components[i].componentType === 'Input') {
          initalState[formEstructure[0].components[i].configItem.id] =
            formEstructure[0].components[i].configItem.initialState;
        }
      }
      return initalState;
    };
    setInitialStateForm(makeInitialState());
  }, []);

  const renderComponents = (handleChange, values, handleBlur, isSubmitting) => {
    const components = [];
    for (let i = 0; i < formEstructure[0].components.length; i++) {
      components.push(
        getItem(
          formEstructure[0].components[i],
          handleChange,
          values,
          handleBlur,
          isSubmitting,
        ),
      );
    }
    return [components];
  };

  return (
    <div>
      <Appbar />
      <div className={classes.containerForm}>
        <Formik
          initialValues={initialStateForm}
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
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit} className={classes.form}>
                <h1>{formEstructure[0].formTitle}</h1>
                {renderComponents(
                  handleChange,
                  values,
                  handleBlur,
                  isSubmitting,
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
