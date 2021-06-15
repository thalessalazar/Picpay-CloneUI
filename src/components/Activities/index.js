import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Container, Header, Title, Card, CardHeader, Avatar,
    Description, Bold, CardBody, UserName, CardFooter, Details,
    Value, Divider, Date, Actions, Option, OptionLabel
} from './styles';

import avatar from '../../Images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@thalessalazar</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Thales Salazar</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 118,00</Value>
                        <Divider />

                        <Feather name="lock" color={'#fff'} size={14} />
                        <Date>há 2 anos</Date>

                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons size={14} color={'#fff'} name="comment-outline" />
                            <OptionLabel>2</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign size={14} color={'#fff'} name="hearto" />
                            <OptionLabel>12</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}