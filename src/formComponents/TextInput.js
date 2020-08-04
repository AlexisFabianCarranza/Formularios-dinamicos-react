import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({configItem}) => {
    return (
        <TextField
            label={configItem.label}
            type={configItem.type}
        />
    )
}
