import React from 'react';
import TextInput from "../formComponents/TextInput";
import Button from "../formComponents/Button";

export default (componentInfo) => {
    switch (componentInfo.type) {
        case 'Button':
            return <Button configItem={componentInfo.configItem}/>
        case 'TextInput':
            return <TextInput configItem={componentInfo.configItem}/>
    }
};
