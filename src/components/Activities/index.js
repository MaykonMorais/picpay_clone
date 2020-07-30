import React from 'react'
import { AntDesign ,Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { 
  Container,
  Header,
  Title,
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles'

import avatar from '../../images/avatar.png'

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@maykon</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Maykon Morais</UserName>
        </CardBody>
        
        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            
            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>Há 2 dias</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" color="#fff" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}

//23min 10s