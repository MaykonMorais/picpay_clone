import React from 'react';
import { Container, Option, Img, Label } from './styles'

import Img1 from '../../images/01.png'
import Img2 from '../../images/02.png'
import Img3 from '../../images/03.png'
import Img4 from '../../images/04.png'
import Img5 from '../../images/05.png'
import Img6 from '../../images/06.png'
import Img7 from '../../images/07.png'


const items = [
  {
    img: Img1,
    label: 'Recarga'
  },
  {
    img: Img2,
    label: 'Uber'
  },
  {
    img: Img3,
    label: 'Ônibus'
  },
  {
    img: Img4,
    label: 'TV'
  },
  {
    img: Img5,
    label: 'Doações'
  },
  {
    img: Img6,
    label: 'Barras'
  },
  {
    img: Img7,
    label: 'FAQ'
  }
]

export default function Suggestions() {
  return (
    <Container>
     {items.map((item, index) => (
      <Option key={index}>
        <Img source={item.img} />
        <Label>{item.label}</Label>
      </Option>
     ))}
    </Container>
  )
}