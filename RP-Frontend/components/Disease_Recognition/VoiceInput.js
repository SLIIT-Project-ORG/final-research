
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity ,Image} from 'react-native';
import Footer from '../Other/Footer';

const VoicePage = ({navigation}) => {

  const handleGetStarted = () => {
    navigation.navigate('Chat Page');
  };
  const handleGetStarted2 = () => {
    navigation.navigate("Doctor Page");
  };
  const handleGetStarted3 = () => {
    navigation.navigate('Knowledgebase Page');
  };

  return (
    <View style={styles.container}>
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View><Image
        source={require('../../assets/sound.png')}
        style={styles.image}
      /></View>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}  >VOICE CHAT WITH US</Text>
      </TouchableOpacity>

    
          <TouchableOpacity style={styles.button1} borderWidth={"2"}>
            <Text style={styles.buttonText} onPress={handleGetStarted2}>
              FIND A DOCTOR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} borderWidth={"2"}>
            <Text style={styles.buttonText} onPress={handleGetStarted3}>
              KNOWLEDGEBASE UPDATE
            </Text>
          </TouchableOpacity>
        
    </ImageBackground>
   
    <View><Footer></Footer></View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
backgroundImage: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  alignItems: 'center',
},
button: {
  marginTop: 10,
    backgroundColor: '#183D3D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderColor: '#fff',
    boarderWidth: 2,
    marginBottom: 10,
    width: 300,
},
button1: {
 
    backgroundColor: '#183D3D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderColor: '#fff',
    boarderWidth: 2,
    marginBottom: 10,
    width: 300,
},
buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
image: {
  width: 250,
  height: 250,
  borderRadius: 130,
  marginBottom: 10,
  borderColor:'#fff',
  borderWidth:1,
  marginTop: 10,
},
});
export default VoicePage;
