import React from "react";
interface Ibutton {
    title: string,
    cls?: string,
    callback:()=>void;
}

const Button: React.FC<Ibutton> = ({title, cls,callback}) => {
   
    return (
        <button onClick={callback} className={cls}>{title}</button>
    );
}
export default  Button;