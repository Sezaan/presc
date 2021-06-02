import React, { Component, useState } from 'react';

const MyContext = React.createContext(

    {
        value : [],
        setValue : () => {},

    }

);


export default MyContext;

export function MyContextProvider(props){
    const [value, setValue] = useState();

    function updateValue(newValue){
        setValue(newValue);
    }

    return(
        <MyContext.Provider value={{value,  setValue : updateValue}}>
            {props.children}
        </MyContext.Provider>
    );
}