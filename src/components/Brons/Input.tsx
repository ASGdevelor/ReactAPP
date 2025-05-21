import React from "react";

interface I_Input {
    title:string,
    cls?:string,
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type?:string,
}
const Input: React.FC<I_Input> = ({title,cls,callback,type}) => {
    return (
        <input type={type} value={title} className={cls}  onChange={callback}/>
    );
}

export default Input;