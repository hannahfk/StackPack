import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  AppRegistry
} from "react-native";

import Home from "./Home";

import Workout from "./Workout";

export default function App() {
  return (

    <View style={styles.container}>
      <ScrollView>
        <Text>
          <hr></hr>
          First line in React Native! 🎉
          {/* <Link to="/"> */}
          <Button title="Press me" onPress={Home} />
          {/* </Link> */}
        </Text>
      </ScrollView>
      <ScrollView>
        <Home />
        <StatusBar style="auto" />
      </ScrollView>
      <ScrollView>
      <Workout />
      </ScrollView>
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

// AppRegistry.registerComponent("MyApp", () => App)