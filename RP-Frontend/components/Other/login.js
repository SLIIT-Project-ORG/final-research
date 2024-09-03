import { Box, Button, Card, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from 'native-base';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from './Footer';


const LoginPage = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Home Page');
  };
  const handleGetStarted1 = () => {
    navigation.navigate('Register Page');
  };

  return (
    <View style={styles.container} >
      <Image
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage} />

      {/* <View>
       <AppBar></AppBar>
      </View> */}


      <NativeBaseProvider>
        <Center marginTop={'100'}>
          <Card style={{ width: '80%' }}  >
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
              Welcome
            </Heading>
            <Heading  _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl >
                <FormControl.Label>Email ID</FormControl.Label>
                <Input backgroundColor={'white'} borderColor={'dark.100'} style={{ width: '70%' }} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" backgroundColor={'white'} borderColor={'gray'} style={{ width: '70%' }} />
                <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1">
                  Forget Password?
                </Link>
              </FormControl>
              <Button mt="2" bg='#617A55' borderColor={'white'} fontWeight={'bold'} borderWidth={'2'} onPress={handleGetStarted}>
                SIGN IN
              </Button>
              <HStack mt="7" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                  I'm a new user.{" "}
                </Text>
                <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} href="#" onPress={handleGetStarted1}>
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Card>
        </Center>
        <View style={styles.footer}>
          <Footer></Footer>
        </View>
      </NativeBaseProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  footer:{
    marginTop: 130,
  }

});

export default LoginPage;


