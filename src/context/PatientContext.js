import React, { Component, useState } from 'react';

const PatientContext = React.createContext(

    {
        value : [],
        setValue : () => {},

    }

);


export default PatientContext;

export function PatientContextProvider(props){
    const [value, setValue] = useState();

    function updateValue(newValue){
        setValue(newValue);
    }

    return(
        <PatientContext.Provider value={{value,  setValue : updateValue}}>
            {props.children}
        </PatientContext.Provider>
    );
}