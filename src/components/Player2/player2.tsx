import React from "react";
import { ReactSVG } from "react-svg";
import { Controls } from "../Controls/controls";
import { Frame } from "../Frame/frame";
import { Title } from "../Title/title";
import { 
    Container, 
    Content
} from "./style";

export const Player2 = () => {
    return (
        <Container>
            <Content>
                <ReactSVG src="../../../public/album-image2.svg"/>
                <Title />
            </Content>
            <Controls />
            <Frame />
        </Container>
    )
}