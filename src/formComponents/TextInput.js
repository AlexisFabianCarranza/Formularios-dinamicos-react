import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({configItem, handleChange, handleBlur, values, error}) => {
  return (
    <TextField
      label={configItem.label}
      type={configItem.type}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[configItem.id]}
      name={configItem.id}
      error={error}
    />
  );
};
