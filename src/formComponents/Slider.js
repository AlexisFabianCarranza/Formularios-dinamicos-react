import React from 'react';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default ({configItem, setFieldValue, values}) => {
    return (
        <>
            <Typography gutterBottom>
                {configItem.label}
            </Typography>
            <Slider
                name={configItem.id}
                value={values[configItem.id]}
                valueLabelDisplay="auto"
                marks
                min={configItem.min}
                max={configItem.max}
                step={configItem.step}
                onChange={(elem, newvalue) => {
                    setFieldValue(configItem.id, newvalue)
                }}
            />
        </>
    );
};
