import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Prothèse et Moi</Text>
        <Text style={{ fontSize: 25 }}>Sélectionnez votre amputation</Text>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.ligne}>
            <View style={styles.cadre}></View>
            <View style={styles.cadre}></View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "azure",
    alignItems: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  ligne: {
    flexDirection: "row",
    alignContent: "center",
    flex: 1,
    backgroundColor: "green",
  },
  cadre: {
    backgroundColor: "blue",
    marginHorizontal: "5%",
    marginVertical: "5%",
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
  },
});
