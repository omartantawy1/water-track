import React, { useState,useEffect } from "react";
import { Button,TouchableOpacity,Image,TextInput,StyleSheet,View,Text,  ScrollView } from 'react-native';

const Bmi=({navigation})=>{


    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [age,Setage]  = useState(0)
    const [bmi, setBmi] = useState('')
    const[currentdate,SetCurrentdate]=useState('')
  
    const [disabled,setDisabled]=useState(false)




    useEffect(()=>{
      var date=new Date().getDate()
      var month=new Date().getMonth()+1
      var year= new Date().getFullYear()
      SetCurrentdate(
      
        date +'/' +month + '/'+year

       
      )
      
      
        })
    let calcBmi = async () => {
     

        if (weight === 0 || height === 0 || age==0) {
          alert('please fill all the fields')
        } 

        

        
        else {
          if(age<30){
        
            let bmi = (weight/2.2)*40/28.3/33.8
            
            setBmi(bmi.toFixed(2)) 
        

 
          //   await AsyncStorage.setItem('@storage_Key', bmi)



           }
         
          if(age<40){

           
            let bmi = (weight/2.2)*35/28.3/33.8
            setBmi(bmi.toFixed(2))
            // await AsyncStorage.setItem('@storage_Key', bmi)
            
          }
          if(age<50){

            let bmi = (weight/2.2)*30/28.3/33.8
            setBmi(bmi.toFixed(2))
            // await AsyncStorage.setItem('@storage_Key', bmi)
            
          }
          
        }

       
      }



 





     


return(
  <ScrollView style={styles.Scroll}>
<View style={styles.container}>
<View  style={styles.header} >
   <Text style={styles.text}> Daily water goal</Text>
   <Text style={styles.text}> {currentdate}</Text>
</View>
 <View style={styles.inputcontainer}>
 

    <Text  >Weight</Text>
    <TextInput 
     style={styles.inputview}
    placeholder="Weight"
  
   onChangeText= { (value)=>setWeight(value)  }
   />

 
    <Text >Height</Text>
    <TextInput
     style={styles.inputview}
    onChangeText= { (value)=>setHeight(value)  }
    placeholder="Height "
    />

 
    <Text>Age</Text>
    <TextInput style={styles.inputview}
    placeholder="Age"
    
    onChangeText= { (value)=>Setage(value)  }
    />

    
 </View>
  <View style={styles.buttonview} >
 <TouchableOpacity   style={styles.Button} activeOpacity={0.9} onPress={calcBmi}   >
        <Text style={styles.subandrel} >Submit</Text>
       
      </TouchableOpacity>
      <Text style={styles.text}>Your Consumption Today must be {bmi} L  </Text>
      
      <TouchableOpacity   style={styles.Button} activeOpacity={0.9}  onPress={()=>{

        navigation.navigate('Addconsumption')
      }}
   >
        <Text style={styles.subandrel} >Detect the amount you want </Text>
       
      </TouchableOpacity>

      </View>


    

  


</View>
</ScrollView>

)

}
const styles =StyleSheet.create({
  app: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 100,
    alignItems: "center",
  },
  status:{
    marginBottom: 20,
    marginTop: 20
  },
  statusText:{
    fontWeight: "bold",
    fontSize: 25
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between'
  },
   Scroll:{
   backgroundColor: "#ff595e",
flex:1,
   },
  
  container: {
      flex: 1

      },


inputview:{
textAlign: 'center',
height: 50,
borderWidth: 2,
borderColor: '#023e8a',
borderRadius: 20 ,
backgroundColor : "#FFFFFF"

},
Button: {
width: "80%",
borderRadius: 25,
height: 50,
alignItems: "center",
justifyContent: "center",
marginTop: 40,
backgroundColor: "#023e8a",

  },
    buttonview:{
alignItems:'center'
    },
text:{
fontSize:25,
color:'#023e8a',
fontWeight:'800'
},
subandrel:{
    color:'white',
    fontSize:20,
    fontWeight:'800',
},
inputcontainer:{
justifyContent:'center',
paddingTop:30,


},
header:{
    alignContent:'center',
    alignItems:'center'
},
lastcontainer:{
  justifyContent:'center',
 alignItems:'center',
}

})

export default Bmi;