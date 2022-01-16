import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Inicial(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.kontulariWeather}>KONTULARI WEATHER</Text>
      <Image
        source={require("../assets/images/unnamed.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.rect}>
        <Icon name="search" style={styles.icon}></Icon>
      </View>
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
    width: 463,
    fontSize: 50,
    marginTop: 287,
    marginLeft: 463
  },
  image: {
    width: 154,
    height: 145,
    marginTop: -302,
    marginLeft: 581
  },
  rect: {
    width: 601,
    height: 96,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 220,
    marginLeft: 369
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 38,
    marginTop: 28,
    marginLeft: 32
  }
});

export default Inicial;
