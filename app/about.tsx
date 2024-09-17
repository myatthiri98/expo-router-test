import { StyleSheet, Text, View } from "react-native";
import React from "react";

const about = () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>About Us</Text>
    </View>
  );
};

export default about;

const styles = StyleSheet.create({});
