import React from 'react';

import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default ({configItem, handleChange, values}) => {
    return (
        <>
            <InputLabel id={configItem.id}>{configItem.label}</InputLabel>
            <Select
                labelId={configItem.id}
                name={configItem.id}
                value={values[configItem.id]}
                onChange={handleChange}
            >
                {configItem.values.map(opcion => {
                    if(values[configItem.elementoPadre] === opcion.req)
                        return <MenuItem value={opcion.value}>{opcion.label}</MenuItem>
                })}
            </Select>
        </>
    );
};
