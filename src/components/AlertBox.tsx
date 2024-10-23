"use client"
import { ComponentPropsWithoutRef, useState } from "react"


interface Props extends ComponentPropsWithoutRef<"div"> {
    type:"error" | "success" | "info" | "notice";
}


export default function AlertBox({ className, type, children}: Props) {

    const [visible, setVisible] = useState(true);

    
 function handleCloseAlertBox(){
    setVisible(false)
}

    let alertBoxType:string;
    switch (type) {
        case "error":
            alertBoxType = "alert-box--error"
            break;
            case "success":
            alertBoxType = "alert-box--success"
            break
            case "info":
            alertBoxType = "alert-box--info"
            break
            case "notice":
            alertBoxType = "alert-box--notice"
            break
    }

    return (
        <div style={visible?{display:"block"}:{display:"none"}} className={`alert-box ${alertBoxType} hideit ${className}`}>
            <p>{children}</p>
            <i onClick={handleCloseAlertBox} className="fa fa-times alert-box__close" aria-hidden="true"></i>
        </div>
    )
}