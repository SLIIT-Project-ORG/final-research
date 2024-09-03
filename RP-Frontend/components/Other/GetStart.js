import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';


const GetStartedPage = ({ navigation }) => {

  const handleGetStarted = () => {
    navigation.navigate('Login Page');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}
      >
        <View><Image
          source={require('../../assets/get.jpg')}
          style={styles.image}
        /></View>

        <TouchableOpacity style={styles.button} borderWidth={'2'}>
          <Text style={styles.buttonText} onPress={handleGetStarted}>GET STARTED</Text>
        </TouchableOpacity>
      </ImageBackground>
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
    marginTop: 20,
    backgroundColor: '#61876E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderColor: '#fff',
    boarderWidth: 2,
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
    boarderWidth: 2,
    borderColor: '#fff',
  },
});

export default GetStartedPage;

