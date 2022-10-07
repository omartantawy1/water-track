import React, { useState,useEffect } from "react";
import { View,Text, AppRegistry } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bmi from "./bmi/bmi";
import Signin from "./loginscreens/Signin";
import Addconsumption from "./bmi/Addconsumption";

const Stack = createNativeStackNavigator();

const App = (props) => {
    return (
        <NavigationContainer>
          <Stack.Navigator>

            
          <Stack.Screen name="Signin" component={Signin} options={{headerShown:false }}  />
          <Stack.Screen name="Bmi" component={Bmi} options={{headerShown:false }}  />
          <Stack.Screen name="Addconsumption" component={Addconsumption} options={{headerShown:false }}  />
     
         
    
          
       
          
        
            
          </Stack.Navigator>
        </NavigationContainer>
    )

}
 

AppRegistry.registerComponent('water_tracking', () => App);
