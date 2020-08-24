import React from 'react';
import TextInput from '../formComponents/TextInput';
import Button from '../formComponents/Button';
import Text from '../formComponents/Text';

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
    case 'Text':
      return (
        <Text
          configItem={componentInfo.configItem}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
        />
      );
  }
};
