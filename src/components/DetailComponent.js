import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

export default ({ imageURL }) => {

    const styles = {touchableOpacity: { flex: 1, backgroundColor: 'white', marginHorizontal: 4, aspectRatio: 1 },
                    image: { flex: 1, borderRadius: 10 }}

    return <View style = {{ flexDirection: 'row', marginVertical: 4, marginHorizontal: 4 }}>

        <TouchableOpacity style = {styles.touchableOpacity}>

            <Image style = {styles.image}
            source = {{
                uri: imageURL
            }}/>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.touchableOpacity}>

            <Image style = {styles.image}
            source = {{
                    uri: imageURL
                }}/>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.touchableOpacity}>

            <Image style = {styles.image}
            source = {{
                    uri: imageURL
                }}/>

        </TouchableOpacity>

    </View>
}
