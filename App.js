import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CreateStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import HomeScreen from './page/home'
import Login from './page/login'
import Register from './page/register'
import Profil from './page/profil'

const Stack = CreateStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          ScreenOption={{
            //Désactiver le header
            //headerShow = false
          }}
        >
        <Stack.Screen name="HomeScreen" Component={HomeScreen} />
        <Stack.Screen name="Login" Component={Login} />
        <Stack.Screen name="Register" Component={Register} />
        <Stack.Screen name="Profil" Component={Profil} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App;