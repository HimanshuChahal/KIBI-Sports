import React from 'react'
import { Text } from 'react-native'

export default ({title}) => (
    <Text style = {{ fontSize: 20, fontWeight: 'bold', color: 'purple', textAlign: 'center', marginRight: 20, fontStyle: 'italic' }}>{title}</Text>
)
