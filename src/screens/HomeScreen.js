import React, { useState, useEffect } from 'react'
import { View, StatusBar, ScrollView, Text, TouchableOpacity, Modal, FlatList, SafeAreaView, useWindowDimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import ImageComponent from '../components/ImageComponent'
import { images_url } from '../../assets/images_url.json'

const HomeScreen = ({ navigation }) => {

    const [ modalVisibility, setModalVisibility ] = useState(false)

    const windowWidth = useWindowDimensions().width

    useEffect(() => {

        StatusBar.setBackgroundColor('purple')
        StatusBar.setBarStyle('light-content')

    }, [])

    const calculateMargin = (index) => {

        const marginStart = index === 0 ? 20 : 10
        const marginEnd = index === images_url.length-1 ? 20 : 10

        return { marginStart, marginEnd }
    }

    return (
        <ScrollView style = {{ flex: 1, backgroundColor: 'white' }}
        keyboardShouldPersistTaps = 'always'>
            
            <View style = {{ width: '80%', flexDirection: 'row', alignSelf: 'center', borderWidth: 1, borderColor: 'gray', marginTop: 40, borderRadius: 4 }}>

                <Text style = {{ color: 'gray', flex: 1, marginEnd: 20, marginStart: 10, marginVertical: 10 }}>Select Name</Text>

                <TouchableOpacity style = {{ borderColor: 'gray', padding: 10, borderStartWidth: 1 }}
                onPress = {() => {
                    setModalVisibility(true)
                }}>

                    <AntDesign name = 'caretdown' size = {20} color = 'gray'/>

                </TouchableOpacity>

            </View>

            <Modal
            transparent = {true}
            visible = {modalVisibility}
            animationType = 'fade'
            onRequestClose = {() => {
                setModalVisibility(false)
            }}
            style = {{ position: 'absolute' }}>

                <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0000009F' }}>

                        <View style = {{ width: '80%', backgroundColor: 'white', borderRadius: 5, paddingBottom: 20, maxHeight: '50%' }}>

                            <Text style = {{ alignSelf: 'center', fontSize: 20, marginTop: 20 }}>Select</Text>

                            <FlatList
                            data = {['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5', 'Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5']}
                            keyExtractor = {(item, index) => index.toString()}
                            renderItem = {(item) => (
                                <TouchableOpacity style = {{ borderBottomWidth: 1, borderColor: '#DDDDDD', padding: 5, marginHorizontal: 10 }}>

                                    <Text style = {{ marginVertical: 2, fontSize: 16, color: 'black' }}>{item.item}</Text>

                                </TouchableOpacity>
                            )}/>

                        </View>

                </View>

            </Modal>

            <FlatList style = {{ paddingVertical: 20 }}
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {images_url}
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {(item) => {

                const margins = calculateMargin(item.index)

                return <ImageComponent width = {150} height = {100} imageURL = {item.item} style = {{ marginStart: margins.marginStart, marginEnd: margins.marginEnd }}
                callback = {() => navigation.navigate('Detail')}/>
            }}/>

            <Text style = {{ fontSize: 20, fontWeight: 'bold', marginStart: 20 }}>Resources</Text>

            <FlatList style = {{ marginVertical: 10 }}
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {[...images_url, ...images_url]}
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {(item) => {

                const margins = calculateMargin(item.index)

                return <ImageComponent width = {120} height = {80} imageURL = {item.item} style = {{ marginStart: margins.marginStart, marginEnd: margins.marginEnd }}/>

            }}/>

            <FlatList style = {{ marginBottom: 10 }}
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {[...images_url, ...images_url]}
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {(item) => {

                const margins = calculateMargin(item.index)

                return <ImageComponent width = {120} height = {80} imageURL = {item.item} style = {{ marginStart: margins.marginStart, marginEnd: margins.marginEnd }}/>

            }}/>

            <SafeAreaView style = {{ flex: 1, alignItems: 'center' }}>

                <FlatList style = {{ marginTop: 10 }}
                data = {images_url}
                keyExtractor = {(item, index) => index.toString()}
                renderItem = {(item) => {

                    return <ImageComponent width = {windowWidth - 40} height = {windowWidth - 150} imageURL = {item.item} style = {{ marginVertical: 10 }}/>

                }}/>

            </SafeAreaView>

        </ScrollView>
    )
}

export default HomeScreen
