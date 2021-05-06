import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
//   TextInput,
//   ScrollView,
// } from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  Text,
  Card,
  CardItem,
  Body,
} from "native-base";

import { Alert, StyleSheet, ImageBackground } from "react-native";
import { fetchWorkouts } from "./client/store/workout";

const image2 = {
  uri: "https://wallpaperaccess.com/full/3990577.jpg",
};

class Workout extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      workouts: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.props.loadWorkouts();
  }

  handleAdd(evt) {
    const newWorkout = evt.target.name;
    console.log("target name==>", newWorkout);
    const existItems = this.state.workouts;

    existItems.push(newWorkout);

    this.setState({
      workouts: existItems,
    });
  }

  showAlert = () => Alert.alert("Message", "Info Saved!");
  render() {
    return (
      <Container>
        <ImageBackground source={image2} style={styles.image}>
          <Header>
            <Text style={styles.header}>Workouts</Text>
          </Header>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.medium}>Enter your workout ☞ </Text>
                <Item regular>
                  <Input style={styles.input} placeholder="...here" />
                </Item>

                <Text style={styles.medium}>
                  {" "}
                  How long did you do this for? 🤯{" "}
                </Text>
                <Item regular>
                  <Input
                    style={styles.input}
                    placeholder="...you fitness genie!"
                  />
                </Item>
                <Text style={styles.medium}>
                  {" "}
                  How many calories did you burn? 🔥{" "}
                </Text>
                <Item regular>
                  <Input style={styles.input} placeholder="...you are goals" />
                </Item>
                <Text style={styles.medium}>
                  {" "}
                  Did you make it past rep one? 🏋️‍♀️{" "}
                </Text>
                <Item regular>
                  <Input style={styles.input} placeholder="...Amazing!" />
                </Item>

                <Button title="Go to Home" onPress={this.showAlert} success>
                  <Text>Let's Go!</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </ImageBackground>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    workouts: state.workouts,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadWorkouts: () => dispatch(fetchWorkouts()),
  };
};

export default connect(mapState, mapDispatch)(Workout);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    width: 400,
    // opacity: .5
  },
  small: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
  },
  medium: {
    // color: "green",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    paddingTop: 10,
    color: "pink",
  },
});
