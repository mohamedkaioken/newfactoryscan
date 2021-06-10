import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import AppText from "../Components/AppText";
import colors from "../Config/colors";

const onPress = () => {};
function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box2}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "60%",
          }}
          onChangeText={(text) => {
            if (text == "material") {
              navigation.navigate("material");
            }
            if (text == "asset") {
              navigation.navigate("asset");
            }
            if (text == "room") {
              navigation.navigate("Room");
            }
          }}
          placeholder=" please Scan Code"
          //value={}
        />
      </View>
      {/* <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate("material");
        }}
      >
        <View style={[styles.container2]}>
          <AppText style={[styles.text2]}>Go</AppText>
        </View>
      </TouchableNativeFeedback> */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: "#00D3BE",
    flex: 1,
    justifyContent: "center",
    //flexDirection: "row",
    alignItems: "center",
    //height: "50%",
    width: "100%",
  },
  box2: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container2: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  detailContainer: {
    width: "90%",
    height: "60%",
    //backgroundColor: "#aaa",
    flex: 0.5,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    // flexWrap: "wrap-reverse",
    // flex: 1,
  },
  firstdetail: {
    //backgroundColor: "black",
    margin: 10,
    width: "47%",
    height: "80%",
  },
  header: {
    //backgroundColor: "red",
    width: "100%",
    height: "10%",
  },
  secdetail: {
    //backgroundColor: "yellow",
    width: "47%",
    height: "80%",
    marginLeft: 0,
    marginTop: 10,
    marginRight: 10,
  },
  text: {
    // fontFamily: "montserrat",
    fontSize: 25,
    margin: 15,
    color: colors.white,
  },
  text2: {
    fontWeight: "bold",
  },
});

export default FirstScreen;