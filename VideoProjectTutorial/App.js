import React from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =createStackNavigator();

function ScreenA(){
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable>
        <Text style={styles.text}>
          Go to Screen B
        </Text>
      </Pressable>
    </View>
  )
}

function ScreenB(){
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
    </View>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:"#000000",
    fontSize:40,
    fontWeight:'bold',
    margin:10,
  }
})

export default App;
