import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home({ history }) {
  return (
    <View style={styles.container}>
      <Text>
        You made it home! 🛌
        <hr></hr>
        Is it donut time yet? 🍩
        <hr></hr>
        <Button title="Press me" onPress={() => history.push("/workout")} />
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
