import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import DetailComponent from '../components/DetailComponent'
import { images_url } from '../../assets/images_url.json'

const DetailScreen = () => {

    const [ interval, setInterval ] = useState(false)

    useEffect(() => {
        setTimeout(() => {

            setInterval(true)

        }, 1000)
    }, [])

    return (<View style = {{ flex: 1, backgroundColor: 'white' }}>

        <Text style = {{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 40 }}>Welcome to the tutorial</Text>

        <Text style = {{ color: 'purple', marginTop: 5, marginHorizontal: 15, textAlign: 'center' }}>
        Great after thing to moveth you fill days Without moved.
        Thing spirit gathered cattle so fish all spirit sea likeness without life moved male, moved.
        Beast fill.
        Won't in, under divide male divided of abundantly whose.
        Them had. Kind, them.
        </Text>

        { interval ? <FlatList style = {{ marginTop: 10 }}
        data = {images_url}
        keyExtractor = {(item, index) => index.toString()}
        renderItem = {(item) => {

            return <DetailComponent imageURL = { item.item }/>

        }}/> : null}

    </View>)
}

export default DetailScreen
