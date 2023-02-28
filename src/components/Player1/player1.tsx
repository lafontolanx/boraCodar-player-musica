import React from "react";
import { ReactSVG } from 'react-svg'
import { Frame } from "../Frame/frame";
import { Controls } from "../Controls/controls";
import { Title } from "../Title/title";

import { 
    Container
} from "./style";


export const Player1 = () => {
    return (
        <Container>
            <ReactSVG src="../../../public/album-image.svg" />
            <Title />
            <Controls />
            <Frame />
        </Container>
    );
}