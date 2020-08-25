import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default ({configItem, handleChange, values}) => {
    return (
        <FormControlLabel
            control={<Switch checked={values[configItem.id]} onChange={handleChange} name={configItem.id} />}
            label={configItem.label}
        />
    );
};
