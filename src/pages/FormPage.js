import React from 'react';
import formEstructure from '../helper/formEstructure';
import getItem from "../helper/getItem";
import Appbar from "../components/Appbar";
import { makeStyles } from '@material-ui/core/styles';

export default () => {
    const classes = useStyles();

    const renderForm = () => {
        const components = [];
        for ( let i = 0 ; i < formEstructure.length ; i++ ) {
            components.push(getItem(formEstructure[i]));
        };
        return [components];
    };

    return (
        <div>
            <Appbar />
            <div className={classes.containerForm}>
                <div className={classes.form}>
                    {renderForm()}
                </div>

            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    containerForm: {
        backgroundColor: 'red',
        display: 'flex',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        backgroundColor: 'green',
        display: 'flex',
        flex: 0.7,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
}));
