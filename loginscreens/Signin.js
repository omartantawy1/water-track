import React, { useState } from "react";
import { TouchableOpacity,Image,TextInput,StyleSheet,View,Text, AppRegistry, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin=({navigation })=>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [getemail, setGetemail] = useState('');

const [getpass, setGetPassword] = useState('');
const checkTextInput =  () => {
  
  if (email=='' && password==''){
alert ('please fill all the fields')

}
else if (email==''){

  alert ('fill the email field')
}
else if (password==''){

  alert ('fill the pasword field')
}

else{
  AsyncStorage.setItem('any_key_here', email);
  AsyncStorage.setItem('any_key_here', password);


}


  }
  

  const getemailFunction = () => {
    
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
  
        setGetemail(email),
     
    );
  };
  const getpassFunction = () => {
    
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
  
        setGetPassword(password),
      
    );
  };
return(

<View style={styles.container}>
      <Image style={styles.image} source={require("../assets/water.png")} />
   <Text style={styles.watertext}> Water tracker</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={
            (value) => setEmail(value)
          }
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={
            (value) => setPassword(value)
          }
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}  
      onPress={checkTextInput}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={getemailFunction} 
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            GET email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getpassFunction} 
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            GET password
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getemail} + {getpass}
        </Text>
    </View>
    

)



}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ff595e",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
        width: 200,
        height: 200,
    },
   
    inputView: {
      backgroundColor: "white",
      borderRadius: 40,
      width: "70%",
      height: 45,
      marginBottom: 20,
   color:'#457b9d',
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#457b9d",
    },
    watertext:{
fontWeight:"600",
fontSize:25,
color:'#457b9d',

    }
  });
export default Signin