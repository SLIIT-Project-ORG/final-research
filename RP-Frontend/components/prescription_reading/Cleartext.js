import React,{useState,useEffect} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../Other/Footer";

const PrescriptionDetailsPage = ({ route }) => {
  const host = "http://localhost:8000";
  const { list } = route.params;

  // const readPrescription = () => {
  //   let text = "";
  //   list.map((item, index) => {
  //     text = text + item + ", ";
  //   });
  
  //   axios
  //     .post(host + "/text-identify/text-to-speech", {
  //       text: text.toString(),
  //     })
  //     .then(async (res) => {
  //       console.log(res.data.response);
  //       await playSound(res.data.response);
  //       playAudio(res.data.response);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };


  // const [sound, setSound] = useState(null);

  // async function playSound(track) {
  //   const { sound } = await Audio.Sound.createAsync(require(track));
  //   setSound(sound);
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  async function downloadPrescription() {
    let text = "";
    list.map((item, index) => {
      text = text + item + ",\n";
    });

    axios
      .post(host + "/text-identify/text-to-image", {
        text: text.toString(),
      })
      .then(async (res) => {
        console.log(res.data.response);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const playTextAsSinhalaAudio = () => {
    // Replace with your Sinhala text
    let sinhalaText = "";
    list.map((item, index) => {
      sinhalaText = sinhalaText + item + ",\n";
    });

    // Construct the Google TTS API URL for Sinhala
    const googleTTSUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=si-LK&q=${encodeURIComponent(sinhalaText)}`;

    // Create an audio element
    const audio = new Audio(googleTTSUrl);

    // Play the audio
    audio.play();
  };

  async function playAudio(path) {
    // Initialize the player
    await TrackPlayer.setupPlayer();
  
    // Define a track to play
    const track = {
      id: '1', // Must be a unique string
      url: path, // Replace with the actual path to your MP3 file
      title: 'My Audio',
      artist: 'Artist Name',
    };
  
    // Add the track to the queue
    await TrackPlayer.add([track]);
  
    // Start playing the track
    await TrackPlayer.play();
  }

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
              <Text style={styles.tableHeader}> බෙහෙත් වට්ටෝරු විස්තර </Text>
            </center>
            {list.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text>{item}</Text>
              </View>
            ))}
            <center>
              <Text style={styles.tableHeader}> ස්තූතියි! </Text>{" "}
            </center>
            {/* Add more headers as needed */}
          </View>
        </View>

        <View style={styles.iconContainer}>
          {/* Download, maximize, rotation, and sound icons */}
          <TouchableOpacity onPress={downloadPrescription}>
            <Icon
              name="download"
              size={24}
              color="white"
              style={styles.icon1}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="expand" size={24} color="white" style={styles.icon1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="rotate-right"
              size={24}
              color="white"
              style={styles.icon1}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={playTextAsSinhalaAudio}>
            <Icon
              name="volume-up"
              size={24}
              color="white"
              style={styles.icon1}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Footer />
      </View>
    </ImageBackground>
  )};

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
    fontSize: 10,
  },
  tableCell: {
    fontSize: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
    marginTop: 20,
  },
  icon1: {
    marginHorizontal: 10,
    backgroundColor: "#C43D56",
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default PrescriptionDetailsPage;
