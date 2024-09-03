import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import RegisterPage from './components/Other/Register';
import LoginPage from './components/Other/login';
import GetStartedPage from './components/Other/GetStart';
import HomePage from './components/Other/Home';
import ImageUpload from './components/prescription_reading/ImageUpload';
import PrescriptionDetailsPage from './components/prescription_reading/Cleartext';
import VoicePage from './components/Disease_Recognition/VoiceInput';
import ChatScreen from './components/Disease_Recognition/ChatScreen';

import DoctorPage from './components/Disease_Recognition/Doctor';
import KnowledgebasePage from './components/Disease_Recognition/Knowledgebase';
import DoctorViewPage from './components/Disease_Recognition/View';
import PlantPage from './components/Plant_Identification/Plant';
import CameraPage from './components/Plant_Identification/Camera';
import PlantDetailsPage from './components/Plant_Identification/PlantDetails';

const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer><View style={styles.container}>
      <Stack.Navigator>
        {/* Other screens */}

        {/* Get Start Page */}
        <Stack.Screen name="AYUSHA"  component={GetStartedPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },


        }} />
        
         {/* Login Page */}
        <Stack.Screen name="Login Page" component={LoginPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
        }} />

       {/* Register Page */}
        <Stack.Screen name="Register Page" component={RegisterPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

          {/* Home Page */}
          <Stack.Screen name="Home Page" component={HomePage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

      {/* prescription Upload Page */}
      <Stack.Screen name="Image Upload Page" component={ImageUpload} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />


        {/* prescription Text Page */}
        <Stack.Screen name="Prescription identify Page" component={PrescriptionDetailsPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

       {/* Disease Identify Page */}
       <Stack.Screen name="Disease Identify Page" component={VoicePage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

       {/* Chat Page */}
       <Stack.Screen name="Chat Page" component={ChatScreen} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

      {/* Knowledgebase Page */}
      <Stack.Screen name="Knowledgebase Page" component={KnowledgebasePage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />
      
       {/* Doctor Page */}
       <Stack.Screen name="Doctor Page" component={DoctorPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />


      {/* Doctor View Page */}
      <Stack.Screen name="Doctor View Page" component={DoctorViewPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />


       {/* Plant Page */}
       <Stack.Screen name="Plant Identification" component={PlantPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

       {/* Plant Upload Page */}
       <Stack.Screen name="Plant Upload Page " component={CameraPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

       {/* Plant Details Page */}
       <Stack.Screen name="Plant Details Page " component={PlantDetailsPage} options={{
          headerStyle: {
            backgroundColor: '#609966',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />
      
      </Stack.Navigator>

      



    </View>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
