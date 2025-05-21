import React from "react";

interface I_Input {
    title:string,
    value:string
}
const Option: React.FC<I_Input> = ({title,value}) => {

    return (
        <option className="text-black dark:text-white dark:bg-darkSubstrate" value={value}>{title}</option>
    )
}

export default Option;