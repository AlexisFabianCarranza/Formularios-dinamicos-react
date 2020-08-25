import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

export default ({configItem, handleChange, values}) => {
    return (
        <>
            <FormLabel component="legend">{configItem.label}</FormLabel>
            <RadioGroup name={configItem.id} value={values[configItem.id]} onChange={handleChange}>
                {configItem.values.map(opcion=>{
                    return <FormControlLabel value={opcion.value} control={<Radio />} label={opcion.label} />
                })}
            </RadioGroup>
        </>
    );
};
