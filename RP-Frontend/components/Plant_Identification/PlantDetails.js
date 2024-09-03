import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";

import Footer from "../Other/Footer";

const PlantDetailsPage = () => {
  

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
              <Text style={styles.tableHeader}> Plant Details </Text>
            </center>
            
              <Text style={styles.tableHeader}>  Plant Name :</Text>
            
              <Text style={styles.tableHeader}>  Plant Type : </Text>

              <Text style={styles.tableHeader}>  Scientifica Name :</Text>

              

               <Text style={styles.tableHeader}>  Description :</Text>

            
           
            
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

export default PlantDetailsPage;
