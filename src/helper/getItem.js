import React from 'react';
import TextInput from '../formComponents/TextInput';
import Button from '../formComponents/Button';
import Checkbox from '../formComponents/Checkbox';
import Radio from '../formComponents/Radio';

export default (
  componentInfo,
  handleChange,
  values,
  handleBlur,
  isSubmitting,
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
  }
};
