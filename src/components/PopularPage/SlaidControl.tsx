import React from "react";


interface Ibutton {
    title: string,
    cls?: string,
    callback:()=>void,
    disable?:boolean
}

const SlaidControl: React.FC<Ibutton> = ({title, cls,callback,disable}) => {
   
    return (
        <button onClick={callback} className={cls} disabled={disable}>{title}</button>
    );
}
export default  SlaidControl;