import React from "react";
import { ReactSVG } from "react-svg";
import { Controls } from "../Controls/controls";
import { Title } from "../Title/title";

import {
    Container,
    Content
} from "./style";

export const Player3 = () => {
    return (
        <Container>
            <Content>
                <ReactSVG src="../../../public/album-image2.svg"/>
                <Title />
            </Content>
            <Controls />
        </Container>
    )
}