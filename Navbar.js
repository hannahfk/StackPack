import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          Workout Track
          <hr></hr>
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
