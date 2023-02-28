import React from "react";
import { ReactSVG } from 'react-svg';
import {
    Container,
    Button,
} from "./style";

export const Controls = () => {
    return (
        <Container>
            <Button>
                <ReactSVG src="../../../public/previous.svg" />
            </Button>
            <Button>
                <ReactSVG src="../../../public/play.svg" />
            </Button>
            <Button>
                <ReactSVG src="../../../public/next.svg" />
            </Button>
        </Container>
    )
}