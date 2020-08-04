import React from 'react';
import Button from '@material-ui/core/Button';

export default ({configItem, isSubmitting}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={isSubmitting}>
      {configItem.title}
    </Button>
  );
};
