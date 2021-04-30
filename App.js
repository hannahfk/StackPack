// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
//   ScrollView,
//   AppRegistry,
// } from "react-native";
// import { NativeRouter, Switch, Route } from "react-router-native";
// import Home from "./Home";
// import Workout from "./Workout";
// import Routes from "./routes";
// import Navbar from "./Navbar";

// export default function App() {
//   return (
//     <NativeRouter>
//       <View style={styles.container}>
//         <Routes />
//       </View>
//     </NativeRouter>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";

const image = {
  uri:
    "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-eater-day-donut-flat-advertisement-image_174695.jpg",
};

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Home Screen</Text>
        <Button
        style={styles.button}
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </ImageBackground>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ title: "Squats Til Donuts" }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    backgroundImage:
      "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-eater-day-donut-flat-advertisement-image_174695.jpg",
      width: 400,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000a0",
    
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200
  }
});

export default App;
