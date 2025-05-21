import React from "react";

interface I_Input {
    title:string,
    callback:(event: React.ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
const Input: React.FC<I_Input> = ({callback,title,type}) => {
    return (
        <input value={title} type={type} className="py-4 px-7 bg-lightGray rounded-[50px] mr-3 w-full sm:w-[296px] dark:bg-darkSubstrate" onChange={(event)=>callback(event)} placeholder="Поиск...."/>
    );
}

export default Input;