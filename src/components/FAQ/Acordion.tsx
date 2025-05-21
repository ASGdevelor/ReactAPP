import React, { useState } from "react";

interface I_faq {
title:string,
subtitle:string,
clsBut?:string
}

const Acordion: React.FC<I_faq> = ({title,subtitle,clsBut}) => {

    const [isClose,SetState]=useState<boolean>(true);

    return (
        <div className="px-3 py-4 bg-substrateWhite text-center rounded-[35px] font-inter dark:text-white dark:bg-darkSubstrate">
            <div className="px-10 py-2 flex justify-between font-medium" >
                <p onClick={()=>SetState(!isClose)} className=" font-medium text-lg">{title}</p>
                <button className={clsBut} onClick={()=>SetState(!isClose)}>▼</button>
            </div>
            <div className="text-left px-10 py-2 bg-transparent">
                <p className={isClose ? 'hidden' : 'block'}>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default Acordion;