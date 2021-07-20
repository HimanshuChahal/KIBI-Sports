import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'

export default ({ width, height, style, imageURL, callback }) => (

    <TouchableOpacity style = {[{ borderRadius: 19 }, style]}
    onPress = { callback ? callback : null }>

        <Image style = {{ width, height, borderRadius: 15 }}
        source = {{
            uri: imageURL
        }}/>

        <View style = {{ width, height, position: 'absolute', justifyContent: 'flex-end' }}>

            <Text style = {{ color: 'yellow', marginBottom: 5, marginStart: 5, fontWeight: 'bold' }}>Image Name</Text>

        </View>

    </TouchableOpacity>

)
