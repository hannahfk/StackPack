import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Workout({history}) {
  return (
    <View style={styles.container}>
      <Text>
        Enter your workout ☞{" "}
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="...here"
        />
        <hr></hr>
        How long did you do this for? 🤯
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="...you fitness genie!"
        />
        <hr></hr>
        How many calories did you burn? 🔥
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="...you are goals"
        />
        <hr></hr>
        Did you make it past rep one? 🏋️‍♀️
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="...Amazing!"
        />
        <hr></hr>
        <Button title="Press me" onPress={() => history.push("/")} />
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
