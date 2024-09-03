import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import axios from "axios";
import Footer from "../Other/Footer";

const KnowledgebasePage = ({ navigation }) => {
  const host = "http://localhost:8000";

  const [disease, setDisease] = useState("");
  const [symptoms, setSymptoms] = useState([]);

  const addSymptom = () => {
    setSymptoms([...symptoms, ""]);
  };
  

  const handleSymptomChange = (text, index) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = text;
    setSymptoms(newSymptoms);
  };

  const symptom_str = symptoms.join(",");

  const submitForm = () => {
    console.log("Disease:", disease);
    console.log("Symptoms:", symptom_str);

    const reqBody = {
      disease: disease,
      symptom: symptom_str,
    };

    console.log(reqBody);

    axios
      .post(host + "/disease-identify/update-knowledge-base/", reqBody)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg, "Knowledgebase Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.label1}>Share Your Knowledge With Us</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Disease</Text>
          </View>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Enter Disease"
              value={disease}
              onChangeText={(text) => setDisease(text)}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Symptoms</Text>
            <TouchableOpacity onPress={addSymptom} style={styles.addButton}>
              <Text style={styles.addButtonLabel}> + </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={symptoms}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.symptomRow}>
              <TextInput
                style={styles.symptomInput}
                placeholder="Enter Symptom"
                value={item}
                onChangeText={(text) => handleSymptomChange(text, index)}
              />
            </View>
          )}
        />
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} borderWidth={"2"}>
            <Text style={styles.buttonText} onPress={submitForm}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>

   
      </View>

      <View style={styles.footer}>
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
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  label1: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 40,
  },
  symptomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  symptomInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 40,
  },
  addButton: {
    backgroundColor: "#007AFF",
    borderRadius: 3,
    padding: 1,
    marginLeft: 5,
  },

  addButtonLabel: {
    color: "white",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#617A55",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderColor: "#fff",
    boarderWidth: 2,
    marginBottom: 20,
    marginTop: 10,
  },
  footer:{
    marginTop: 20,
  }
});

export default KnowledgebasePage;
