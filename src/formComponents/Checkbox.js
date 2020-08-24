import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default ({configItem, handleChange, values}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    name={configItem.id}
                    checked={values[configItem.id]}
                    onChange={handleChange}
                />
            }
            label={configItem.label}
        />
    );
};
