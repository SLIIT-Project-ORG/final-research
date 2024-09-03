import { Box, Button, Card, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from 'native-base';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from './Footer';

const RegisterPage = () => {

  return (
    <View style={styles.container} >
      <Image
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}

      />
      <NativeBaseProvider>
        <Center flex={1}>
          <Card style={{ width: '80%' }}>
            <Heading size="lg" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }} fontWeight="semibold">
              Welcome
            </Heading>
            <Heading mt="1" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="medium" size="xs">
              Sign up to continue!
            </Heading>
            <VStack space={2} mt="2" >
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input backgroundColor={'white'} borderColor={'dark.100'} style={{ width: '70%' }} />
              </FormControl>

              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input backgroundColor={'white'} borderColor={'dark.100'} style={{ width: '70%' }} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Age</FormControl.Label>
                <Input backgroundColor={'white'} borderColor={'dark.100'} style={{ width: '70%' }} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input backgroundColor={'white'} borderColor={'dark.100'} style={{ width: '70%' }} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input backgroundColor={'white'} borderColor={'dark.100'} style={{ width: '70%' }} />
              </FormControl>
              <Button mt ='1' bg='#617A55' borderColor={'white'} borderWidth={'2'} fontWeight={'bold'} >
                Sign up
              </Button>
            </VStack>
          </Card>
        </Center>

      </NativeBaseProvider>
      <View><Footer></Footer></View>
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

});

export default RegisterPage;


