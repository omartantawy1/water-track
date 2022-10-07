import React, { useEffect, useState, useRef } from "react";
import {TouchableWithoutFeedback, Button,Image,StyleSheet,Text,View,SafeAreaView, TouchableOpacity,Animated,ScrollView, Touchable,} from "react-native";
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';





const Addconsumption=()=> {

  const [GetwaterGoal, GetsetWaterGoal] = useState(1.5);
  const [GetwaterDrank,SetGetWaterDrank] = useState(0);
    const [fillingPercentage, setFillingPercentage] = useState(0);
    const [waterGoal, setWaterGoal] = useState(1.5);
    const [waterDrank, setWaterDrank] = useState(0);
    const [isGoalAchieved, setIsGoalAchieved] = useState(false);
    const [done, SetDone] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  

  const toggleModal = () => {

    setModalVisible(!isModalVisible);
  };




  const barHeight = useRef(new Animated.Value(0)).current;
  const progressPercent = barHeight.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", `100%`],
  });

   
  useEffect(() => {
    Animated.timing(barHeight, {
      duration: 1000,
      toValue: fillingPercentage / 3,
      useNativeDriver: false,
    }).start();
  }, [fillingPercentage]);

  

  
  useEffect(() => {
   
    let percentage = (waterDrank * 100) / waterGoal;
    let fillingP = (percentage * 300) / 100;
    setFillingPercentage(fillingP > 300 ? 300 : fillingP);
  }, [waterGoal, setFillingPercentage, waterDrank]);








  useEffect(() => {
    if (waterDrank >= waterGoal && isGoalAchieved=== false) {
        setIsGoalAchieved(true);
    }
    if (waterDrank < waterGoal && isGoalAchieved === true) {
        setIsGoalAchieved(false);
    }

    if (done === false && isGoalAchieved === true) {
      SetDone(true);
      AsyncStorage.setItem('any_key_here', waterDrank);
     AsyncStorage.setItem('any_key_here', waterGoal);
    } else {
      SetDone(false);
    }
  }, [waterDrank, done, waterGoal]);





  const Getdrank = () => {
    
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
  
        SetGetWaterDrank(waterDrank),
     
    );
  };
  const getgoalFunction = () => {
    
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
  
       GetsetWaterGoal(waterGoal),
      
    );
  };











  return (
    <ScrollView  style={styles.scrollvi}>
    <SafeAreaView >
    

      <View  style={styles.selectors}>
      <TouchableOpacity onPress={toggleModal}>
  
      <Image
        style={styles.addwater}
        source={require('../assets/addwater.png')}
      />
      </TouchableOpacity>
      </View>
     
      <View style={styles.waterGoalContainer}>
      <TouchableOpacity style={{ padding: 5 }} onPress={() => setWaterGoal(waterGoal + 0.2)}   >
      <Image
        style={styles.imagecontainer}
        source={require('../assets/add.png')}
      />
          </TouchableOpacity>
        <Text style={[styles.blueText, { fontSize: 22 }]}>Set Your Goal Today </Text>

       
        <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => setWaterGoal(waterGoal - 0.2)}
          >
         <Image
        style={styles.imagecontainer}
        source={require('../assets/minus.png')}
      />
          </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.grayText, { fontSize: 26 }]}>
            { waterGoal} L{" "}
          </Text>
  
         
          
        </View>
      </View>


      
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-around",
        }}
      >
    
        

        
       
      </View>

      < View style={{ flex: 1 }}>
      

      <Modal 
     isVisible={isModalVisible}
     onBackdropPress={() => setModalVisible(false)}
     onSwipeComplete={() => setModalVisible(false)}

 >
        <View style={{ flex: 1 }}>
      
       
  
        <Button title="Add 0.2 l" onPress={() => {setWaterDrank(waterDrank + 0.200)}}  />
        <Button title="Add 0.3 l" onPress={() => {setWaterDrank(waterDrank + 0.300)}}  />
        <Button title="Add 0.4 l" onPress={() => {setWaterDrank(waterDrank + 0.400)}}   />
        <Button title="reduce 0.2 l" onPress={() => {setWaterDrank(waterDrank - 0.200)}}  />
        <Button title="reduce 0.3 l" onPress={() => {setWaterDrank(waterDrank - 0.300)}}  />
        <Button title="reduce 0.4 l" onPress={() => {setWaterDrank(waterDrank - 0.400)}}  />

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>




  

        <View style={styles.progressBarContainer}>
          <Animated.View
            style={{
              width: progressPercent,
              backgroundColor: "#00b4d8",
              borderRadius:30,
            }}
          />
        </View>

        <View style={{ justifyContent: "center" ,alignItems:'center' }}>
          <Text style={[styles.grayText, { fontSize: 28 }]}>You drank{waterDrank} L</Text>
         
        </View>
        < View style={{ flex: 1 }}>
      

      <Modal 
     isVisible={isModalVisible}
     onBackdropPress={() => setModalVisible(false)}
     onSwipeComplete={() => setModalVisible(false)}

 >
        <View style={{ flex: 1 }}>
      
       
  
        <Button title="Add 0.2 l" onPress={() => {setWaterDrank(waterDrank + 0.200)}}  />
        <Button title="Add 0.3 l" onPress={() => {setWaterDrank(waterDrank + 0.300)}}  />
        <Button title="Add 0.4 l" onPress={() => {setWaterDrank(waterDrank + 0.400)}}   />
        <Button title="reduce 0.2 l" onPress={() => {setWaterDrank(waterDrank - 0.200)}}  />
        <Button title="reduce 0.3 l" onPress={() => {setWaterDrank(waterDrank - 0.300)}}  />
        <Button title="reduce 0.4 l" onPress={() => {setWaterDrank(waterDrank - 0.400)}}  />

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
    



    <TouchableOpacity
          onPress={Getdrank} 
          style={styles.buttonStyle}>
         
        </TouchableOpacity>
<Text>{GetwaterDrank}</Text>




    </SafeAreaView>
    </ScrollView>
  );
}
export default Addconsumption;

const styles = StyleSheet.create({
  scrollvi:{
backgroundColor:'#ff595e'

  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  progressBarContainer: {
    borderRadius: 40,
    borderWidth: 1,
    width: 400,
    height: 25,
    justifyContent: "flex-end",
    flexDirection:'row',
    marginTop:150,
    
  },
  waterButtonsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "90%",
    justifyContent: "space-between",
    
  },
  waterGoalContainer: {
    padding: 50,
    alignItems: "center",
    shadowColor:'black',
  

  },
  blueText: {
    color: "#023e8a",
    fontWeight: "600",
  },

  
  grayText: { 
    color:  "#023e8a",
    fontWeight: "600" 
  },



imagecontainer:{
height:22,
width:22,
borderRadius:22/2

},
selectors:{

alignItems:'flex-end',

},
addwater:{

height:70,
width:70,
borderRadius:70/2
}


});

