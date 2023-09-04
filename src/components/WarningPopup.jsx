import React from "react"

export default function WarningPopup({openWarningPopup, handleWarningPopup, setHasStarted}) {

    function handleButton() {
        handleWarningPopup((prev) => !prev)
        setHasStarted((prev) => !prev)
    }
    
    return (
        <div className={openWarningPopup ? "warning-popup active" : "warning-popup"} >
            <h2 className="warning-popup__header">Beware</h2>
            <p className="warning-popup__text">Going back to the homepage will result in you losing your progress.</p>
            <button className="warning-popup__btn" onClick={handleButton}>Proceed</button>
        </div>
    )
}