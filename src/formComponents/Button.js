import React from 'react';
import Button from "@material-ui/core/Button";

export default ({configItem}) => {
    return (
        <Button variant="contained" color="primary" href="#contained-buttons">
            {configItem.title}
        </Button>
    )
}
