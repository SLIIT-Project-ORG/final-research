
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { VStack, Input, Button, IconButton,  Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";
import home from '../../assets/home.png';
import plant from '../../assets/plant.png';
import nila from '../../assets/nila.png';
import disease from '../../assets/disease.png';
import letter from '../../assets/letter.png';
import Footer from './Footer';

const HomePage = ({navigation}) => {
 
  return (
    <View style={styles.container} >
     
          <View style={{ justifyContent: 'center', alignItems: 'center' ,marginBottom:50}}>
           <Image source={home} style={styles.BorderClass} />
           </View>

           <View >
           <TouchableOpacity onPress={() =>navigation.navigate('Plant Identification')}>
           <Image source={plant} style={styles.BorderButton1} />
           </TouchableOpacity>
           </View>

          <View >
          <TouchableOpacity
          onPress={() =>navigation.navigate('Disease Identify Page')}>

          <Image source={disease} style={styles.BorderButton3}
                        />
          </TouchableOpacity>
          </View>

                <View >
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('')
                    } >
                        <Image source={nila} style={styles.BorderButton2}
                        />

                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Image Upload Page')
                    }>

                        <Image source={letter} style={styles.BorderButton4} />
                    </TouchableOpacity>
                </View>


                <View >
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
          <View style={styles.footer}><Footer></Footer></View>

        
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
      backgroundColor: 'white',
  },
  myTitle: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: 'black',
      marginTop: 160

  },
  BorderClass:
  {

      width: 350,
      height: 250,
      borderWidth: 2,
      borderColor: '#fff',
  },

  BorderButton1:
  {

      width: 150,
      height: 100,
      marginTop: 10,
      marginLeft: 10,
      borderWidth: 4,
     
      borderColor: '#617A55',
      borderRadius: 12,
      justifyContent: 'center'
  },


  BorderButton3:
  {

     width: 150,
     height: 100,
      marginTop: -100,
      marginLeft: 185,
      borderWidth: 4,
      borderColor: '#617A55',
      borderRadius: 12,

  },

  BorderButton2:
  {

    width: 150,
    height: 100,
      marginTop: 10,
      marginLeft: 10,
      borderWidth: 4,
      borderColor: '#617A55',
      borderRadius: 12,
      justifyContent: 'center',
      marginBottom:20,
      
  },
  BorderButton4:
  {

    width: 150,
    height: 100,
      marginTop: -120,
      marginLeft: 185,
      borderWidth: 4,
      borderColor: '#617A55',
      borderRadius: 12,
      marginBottom:20,

  },
  footer:{
    marginTop: 75,
  }


})

export default HomePage;