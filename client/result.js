import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";

function Result(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.kontulariWeather}>KONTULARI WEATHER</Text>
      <Image
        source={require("../assets/images/unnamed.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(130,225,193,1)",
    borderWidth: 25,
    borderColor: "#000000",
    borderStyle: "solid"
  },
  kontulariWeather: {
    fontFamily: "abel-regular",
    color: "#121212",
    height: 72,
    width: 459,
    fontSize: 50,
    marginTop: 193,
    marginLeft: 456
  },
  image: {
    width: 154,
    height: 145,
    marginTop: -245,
    marginLeft: 581
  },
  rect: {
    width: 583,
    height: 365,
    backgroundColor: "#E6E6E6",
    borderRadius: 24,
    marginTop: 132,
    marginLeft: 380
  }
});

export default Result;
