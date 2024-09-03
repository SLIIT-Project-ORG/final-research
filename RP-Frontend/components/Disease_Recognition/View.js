import React,{useState, useEffect} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import axios from "axios";
import Footer from "../Other/Footer";

const DoctorViewPage = ({route}) => {
  const { doctorId } = route.params;
  const backend_host = "http://localhost:8001"
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios.get(backend_host + `/doctor/${doctorId}`)
    .then((response) => {
      console.log(response.data);
      setDoctor(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableColumn}>
            <center>
              <Text style={styles.tableHeader}> Doctor Details </Text>
            </center>
            
              <Text style={styles.tableHeader}>  Full Name : {doctor.fullname}</Text>
            
              <Text style={styles.tableHeader}>  Doctor Type : {doctor.docType}</Text>

              <Text style={styles.tableHeader}>  Email : {doctor.email}</Text>

              <Text style={styles.tableHeader}>  Mobile Number : {doctor.mobileno}</Text>

              <Text style={styles.tableHeader}>  Address :{doctor.address}</Text>

               <Text style={styles.tableHeader}>  Description : {doctor.specialization}</Text>

            
           
            <center>
              <Text style={styles.tableHeader}> Thank You ! Welcome  </Text>{" "}
            </center>
            {/* Add more headers as needed */}
          </View>
        </View>

        </View>

      <View>
        <Footer />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "center",
  },
  table: {
    width: "80%",
    backgroundColor: "white", // Table background color
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginVertical: 10,
  },
  
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray", // Table row border color
    paddingVertical: 5,
  },
  tableHeader: {

    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    
  },
  tableCell: {
    fontSize: 10,
  }
});

export default DoctorViewPage;
