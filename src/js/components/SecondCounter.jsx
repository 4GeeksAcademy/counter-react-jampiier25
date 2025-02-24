import React from "react";

const SecondsCounter = ({seconds})=>{
    const digitOne =  Math.floor(seconds / 100000)%10;
    const digitTwo =  Math.floor(seconds / 10000)%10;
    const digitThree =  Math.floor(seconds / 1000)%10;
    const digitFour =  Math.floor(seconds / 100)%10;
    const digitFive =  Math.floor(seconds / 10)%10;
    const digitSix =  Math.floor(seconds / 1)%10;

    return (
        <div className="Counter bg-dark text-white p-3 fs-1">
            <div className="calendar"><i className="fa fa-hourglass"></i> </div>
            <div className="six">{digitSix}</div>
            <div className="five">{digitFive}</div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
    ) 
}
export default SecondsCounter