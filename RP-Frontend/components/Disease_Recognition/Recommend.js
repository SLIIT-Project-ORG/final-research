import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const RecommendPage = () => {
  return (
    <ImageBackground
      source={require('../../assets/sound.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.appBar}>
      <TouchableOpacity>
          <Icon name="bars" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        {/* Add your app bar content */}
      </View>

      <View style={styles.bottomBar}>
        {/* Add your bottom bar content */}
        <TouchableOpacity>
          <Icon name="home" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <Button style={styles.button}>
        <Text style={styles.cardText}>Disease Identify </Text>
      </Button>

        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center',
   
  },
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#0E9F56',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#0E9F56',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:'center',
    color:'black'

  },
  
  button:{
    
    backgroundColor: 'lightgreen',
    height:40,
    width:'80%',
   }
});

export default RecommendPage;
