import React from 'react';

import { Container, Option, Title, Img } from './styles'

import img8 from '../../Images/08.png';
import img9 from '../../Images/09.png';
import img10 from '../../Images/10.png';
import img11 from '../../Images/11.png';
import img12 from '../../Images/12.png';

const items = [
    {
        
    }
]

export default function Tips() {
    return (
        <Container>
            <Option bgColor="#172c4a">
                <Title>Pague suas contas sem sair de casa</Title>
                <Img source={img8} />
            </Option>
        </Container>
    );
}