import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const index = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.link} onPress={()=>{
        router.navigate("/about")
      }}>About Us</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  banner: {
    borderRadius: 10,
    margin: 20,
    backgroundColor: "#ddd",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#58f",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
