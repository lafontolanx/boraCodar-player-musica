import React from "react";
import { 
    FrameFora,
    FrameDentro,
    Time
} from "./style";

export const Frame = () => {
    return (
        <>
            <FrameFora>
                <FrameDentro />
            </FrameFora>
            <Time>
                <span>0:00</span>
                <span>3:00</span>
            </Time>        
        </>
    )
}