import React from 'react'
import { Feather } from '@expo/vector-icons'

import { TouchableOpacity } from 'react-native'

export default function BackButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.4}>
          <Feather name="arrow-left" size={28} color="#19c872"/>
    </TouchableOpacity>
  )
};