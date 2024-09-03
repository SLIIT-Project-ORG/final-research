import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Picker,
  TextInput,
  TouchableOpacity, // Import TouchableOpacity for the "View" button
} from "react-native";
import axios from "axios";
import Footer from "../Other/Footer";

const DoctorPage = ({ navigation }) => {

  const doctorGetById = (doctorId) => async () =>{
    navigation.navigate('Doctor View Page', { doctorId });
  }; 

  const backend_host = "http://localhost:8001";

  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]);
  const types = ["Ayurwedic", "Western"];

  // Function to handle search query changes
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery);
  };

  const handleSelectedType = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    fetchData();
  }, [selectedType, searchQuery]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        backend_host +
          `/doctor/list?docType=${selectedType}&search=${searchQuery}`
      );
      setDoctors(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.backgroundImage}
    > 
       <View style={styles.container}><Text style={styles.label}>Find a Doctor</Text>
</View>
     
     {/* Render the search bar */}
     <TextInput
          style={styles.searchInput}
          placeholder="Search for a doctor..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
     <View style={styles.container}>
       
      
        </View>
        <View style={styles.container}>
      <View>  <Text style={styles.label1} >Type</Text>
        <View style={styles.row}>
          <Picker
            style={styles.dropdown}
            selectedValue={selectedType}
            onValueChange={(itemValue) => handleSelectedType(itemValue)}
          >
            <Picker.Item label="All" value="All" />
            {types.map((type, index) => (
              <Picker.Item key={index} label={type} value={type} />
            ))}
          </Picker></View>
    </View>
      
        {/* Updated red box with text and button */}
        {doctors.map((doctor, index) => (
          <View style={styles.redBox} key={index}>
            <View style={styles.redBoxLeft}>
              <Text style={styles.redBoxText}>{doctor.fullname}</Text>
            </View>
            <View style={styles.redBoxRight}>
              <TouchableOpacity style={styles.viewButton} onPress={doctorGetById(doctor._id)}>
                <Text style={styles.viewButtonText} >View</Text>
              </TouchableOpacity>
            </View>
          </View>
         ))}
      </View>
      <View style={styles.footer} ><Footer></Footer></View>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
 

  row: {
    flexDirection: "row",
    alignItems: "center",
   
  },
  label: {
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
    marginTop: 20,
  },
  label1: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 50,
  },
  dropdown: {
   
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    width: "100%",
    marginTop: 20,
    position: "relative",
    
  },
  searchInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    height: 40,
    marginLeft: 10,
    marginRight: 10,

  },
  redBox: {
    marginTop: 20,
    borderRadius: 20, // Rounded corners
    width: "100%",
    height: 100,
    backgroundColor: "#93B1A6",
    flexDirection: "row", // Make it a row container
    marginBottom: 10,
  },
  redBoxLeft: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  redBoxText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  redBoxRight: {
    justifyContent: "center",
    paddingRight: 10,
  },
  viewButton: {
    backgroundColor: "teal", // Teal color for the button
    padding: 10,
    borderRadius: 5,
  },
  viewButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer:{
    marginTop: 415,
  }

});

export default DoctorPage;
