import React from "react";


interface Ibutton {
    cls?: string,
    callback: () => void;
}

const Burger: React.FC<Ibutton> = ({ cls, callback }) => {

    return (
        <button onClick={callback} className={cls}>
            <div className="burger__line w-8 h-1 bg-black dark:bg-white mb-2"></div>
            <div className="burger__line w-8 h-1 bg-black dark:bg-white mb-2"></div>
            <div className="burger__line w-8 h-1 bg-black dark:bg-white mb-2"></div>
        </button>
    );
}
export default Burger;