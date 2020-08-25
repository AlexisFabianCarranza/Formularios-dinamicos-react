import React from 'react';
import TextInput from '../formComponents/TextInput';
import Button from '../formComponents/Button';
import Checkbox from '../formComponents/Checkbox';
import Radio from '../formComponents/Radio';
import Select from '../formComponents/Select';
import SelectDependiente from '../formComponents/SelectDependiente';
import Switch from "../formComponents/Switch";

export default (
  componentInfo,
  handleChange,
  values,
  handleBlur,
  isSubmitting,
  errors,
  touched
) => {
  switch (componentInfo.type) {
    case 'Button':
      return (
        <Button
          configItem={componentInfo.configItem}
          isSubmitting={isSubmitting}
        />
      );
    case 'TextInput':
      return (
          <TextInput
              configItem={componentInfo.configItem}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              error={errors[componentInfo.configItem.id] && touched[componentInfo.configItem.id]}
          />
      );
    case 'Checkbox':
      return (
          <Checkbox
              configItem={componentInfo.configItem}
              handleChange={handleChange}
              values={values}
          />
      );
    case 'Radio':
      return (
          <Radio
              configItem={componentInfo.configItem}
              handleChange={handleChange}
              values={values}
          />
      );
    case 'Select':
      return (
          <Select
              configItem={componentInfo.configItem}
              handleChange={handleChange}
              values={values}
          />
      );
    case 'SelectDependiente':
      return (
          <SelectDependiente
              configItem={componentInfo.configItem}
              handleChange={handleChange}
              values={values}
          />
      );
    case 'Switch':
      return (
          <Switch
              configItem={componentInfo.configItem}
              handleChange={handleChange}
              values={values}
          />
      );
  }
};
