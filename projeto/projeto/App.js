import React from "react"
import { View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HeaderC from './src/components/layout/HeaderC'
import Home from "./src/components/screens/Home"
import ListForm from "./src/components/screens/ListForm"
import List from './src/components/screens/List'
import Item from './src/components/screens/Item'
import ListShopping from "./src/components/screens/ListShopping"
import styles from './src/components/layout/Containerstyles'
import ItensList from "./src/components/screens/ItensList"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer> 
      <HeaderC/> 
      <View style={styles.container}>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='ListForm' component={ListForm}/>
          <Stack.Screen name='ItensList' component={ItensList}/>
          <Stack.Screen name='List' component={List}/>
          <Stack.Screen name='Item' component={Item}/>
          <Stack.Screen name='ListShopping' component={ListShopping}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}