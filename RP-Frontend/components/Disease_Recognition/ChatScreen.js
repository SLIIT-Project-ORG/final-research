import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../Other/Footer";

const ChatScreen = ({}) => {
  const host = "http://localhost:8000";
  const recordAudio = async () => {
    axios
      .post(host + "/disease-identify/voice-to-text", {
        voice_input: "",
      })
      .then((response) => {
        if (response.data.status == 200) {
          console.log(response.data.response);

          // prediction API call
          const reqBody = {
            "symptoms": response.data.response
          };

          console.log("Request body : ", reqBody);

          axios
            .post(host + "/disease-identify/predict", reqBody)
            .then((response) => {
              if (response.data.status == 200) {
                console.log(response.data.response);
                alert(response.data.response);
              }
            })
            .catch((error) => {
              alert(error);
            });
        } else {
          alert(response.data.response);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.backgroundImage}
    >
       <View>
        <Text style={styles.text2}>Disease Identification</Text>

        <Text style={styles.text3}>Please Say at Least Two or Three Symptoms</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={recordAudio} style={styles.recordButton}>
          <Icon name="microphone" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
      </ScrollView>

      <View>
        <Footer></Footer>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#617A55",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderColor: "#fff",
    boarderWidth: 2,
  },
  text2: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 40,
    marginTop:150
  },
  text3: {
    color: "darkblue",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 40,
    marginTop:20
  },
  text: {
    color: "black",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "semibold",
    alignItems: "center",
  },

  audioMessage: {
    flexDirection: "row",
    alignItems: "center",

    height: 30,
    backgroundColor: "#93B1A6",
    padding: 30,
    borderColor: "black",
    width: "70%",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  voiceChat: {
    position: "absolute",

    left: 0,
    right: 0,
    top: 5,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  recordButton: {
    backgroundColor: "#C43D56",
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "space-between",
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChatScreen;
