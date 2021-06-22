import React, { Component, useState } from 'react';

const PreviewContext = React.createContext(

    {
        value : [],
        setValue : () => {},

    }

);


export default PreviewContext;

export function PreviewContextProvider(props){
    const [value, setValue] = useState();

    function updateValue(newValue){
        setValue(newValue);
    }

    return(
        <PreviewContext.Provider value={{value,  setValue : updateValue}}>
            {props.children}
        </PreviewContext.Provider>
    );
}