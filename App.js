import "react-native-gesture-handler";
import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Workout from "./Workout";
import AppText from "./AppText";

const image = {
  uri:
    "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-eater-day-donut-flat-advertisement-image_174695.jpg",
};

const image2 = {
  uri:
    "https://wallpaperaccess.com/full/3990577.jpg",
};

const image3 = {
  uri:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmeTGvGKG9nB3V8Bg3eECrMQQG5dwOZbysfH5D2nMGqkzp66sLOTKqkVWXhZzMBhBN9dk&usqp=CAU"
}

const image4 = {
  uri:
  "https://fsb.zobj.net/crop.php?r=j9gNj-qwoHOweIknxJ-mRoGA40d25Qc8KJ5QvoyXOndNKVao0PQ2lFVJifv3PSPeDXlNQBeuvpqwP_kpb_FsFGMCAAsmTMwHB-PJwVld8igQdGZyhaKhlnNDyuhw_ecj5MeH4Jzr0afXceI2"
}

const image5 = {
  uri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07S5elqEuUtTRfPotQCXmL-HsXY1Ra2wKQKKTEJWY47naAW5uTw9HZPz4tT66ZT3kt7c&usqp=CAU",
};

const image6 = {
  uri: 
  "https://cdn4.vectorstock.com/i/1000x1000/51/38/pink-donut-glaze-background-set-liquid-sweet-flow-vector-13685138.jpg"
}
function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.small}>
        You made it!
        </Text>
        <Text style={styles.small}> -------------</Text>
        <Text style={styles.small}>
        Is it donut time yet? 🍩
        </Text>

        <Button
          style={styles.button}
          title="Create Post"
          onPress={() => navigation.navigate("CreatePost")}
        />
        <Button
          style={styles.button}
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </ImageBackground>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");
  return (
    <>

      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
 
 <ImageBackground source={image4} style={{flex:3}}></ImageBackground>

    </>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image2} style={styles.image}> */}
       
        <Workout  />
        {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.push("Details")}
        /> */}
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        {/* <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        /> */}
      {/* </ImageBackground> */}
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
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
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
    width: 400,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "Lobster"
    // backgroundColor: "#000000a0",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  small: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});

export default App;
