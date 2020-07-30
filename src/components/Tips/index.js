import React from 'react'

import img8 from '../../images/08.png'
import img9 from '../../images/09.png'
import img10 from '../../images/10.png'
import img11 from '../../images/11.png'
import img12 from '../../images/12.png'

const items = [
  {
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#172c4a'
  },
  {
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159'
  },
  {
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#4139c8'
  },
  {
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b'
  },
  {
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76'
  }
]


import { Container, Option, Title, Img } from './styles'

export default function Tips() {
  return (
    <Container>
      {items.map((item, index) => (
      <Option key={index} bgColor={item.bgColor}>
        <Title>{item.title}</Title>
        <Img source={item.img} />
      </Option>
      ))}
    </Container>
  );
}