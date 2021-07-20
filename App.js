import 'react-native-gesture-handler'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import HeaderTitleComponent from './src/components/HeaderTitleComponent'
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'

const headerLeftButton = () => (

  <TouchableOpacity style = {{ marginStart: 20 }}>

    <Ionicons name = 'reorder-three-outline' size = {30} color = 'purple'/>

  </TouchableOpacity>
)

const headerRightButtons = () => (

  <View style = {{ flexDirection: 'row' }}>

    <TouchableOpacity style = {{ marginEnd: 10 }}>

      <Feather name = 'search' size = {30} color = 'purple'/>

    </TouchableOpacity>

    <TouchableOpacity style = {{ marginEnd: 10 }}>

      <Ionicons name = 'notifications' size = {30} color = 'purple'/>

    </TouchableOpacity>

  </View>
)

const headerConfiguration = {
  headerTitle: props => (<HeaderTitleComponent {...props} title = 'KIBI Sports'/>),
  headerLeft: headerLeftButton,
  headerRight: headerRightButtons
}

const Stack = createStackNavigator()

const App = () => (

  <NavigationContainer>

    <Stack.Navigator>

      <Stack.Screen name = 'Home' component = {HomeScreen}
      options = { headerConfiguration }/>

      <Stack.Screen name = 'Detail' component = {DetailScreen}
      options = {({ navigation }) => ({ ...headerConfiguration,
      headerLeft: () => (

        <View style = {{ flexDirection: 'row' }}>

          <TouchableOpacity style = {{ marginStart: 10 }}
          onPress = { navigation.goBack }>

            <Ionicons name = 'arrow-back-circle-outline' size = {30} color = 'purple'/>

          </TouchableOpacity>

          <TouchableOpacity style = {{ marginStart: 5 }}>

            <Ionicons name = 'reorder-three-outline' size = {30} color = 'purple'/>

          </TouchableOpacity>

        </View>
      ) })}/>

    </Stack.Navigator>

  </NavigationContainer>

)

export default App
