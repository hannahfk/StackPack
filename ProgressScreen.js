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
import React from "react";
import { Alert, StyleSheet, ImageBackground } from "react-native";

const image2 = {
  uri: "https://media.istockphoto.com/vectors/vector-vertical-endless-border-of-donuts-with-colorful-glaze-sugar-vector-id1190023391?k=6&m=1190023391&s=612x612&w=0&h=bLdFWTZ-AauIN4t0mwym5lTwqftrTG3ynlxGyy_c3WU=",
};

export default class ProgressScreen extends React.Component {
  showAlert = () => Alert.alert("Message", "Info Saved!");
  render() {
    return (
      <Container>
        <ImageBackground source={image2} style={styles.image}>
          <Header>
            <Text style={styles.header}>Progress</Text>
          </Header>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.medium}>You've done some squats, girl! ☞ </Text>
                <Item regular>
                  <Input style={styles.input} placeholder="Total Squats" />
                </Item>

                <Text style={styles.medium}>
                  That's a lot of time! 🤯
                </Text>
                <Item regular>
                  <Input
                    style={styles.input}
                    placeholder="All the Time!"
                  />
                </Item>
                <Text style={styles.medium}>
                  {" "}
                  This is what you've burned 🍩
                </Text>
                <Item regular>
                  <Input style={styles.input} placeholder="Impressive Totals" />
                </Item>
                <Text style={styles.medium}>
                  {" "}
                  And here's your daily streak! 🏋️‍♀️{" "}
                </Text>
                <Item regular>
                  <Input style={styles.input} placeholder="Wow!" />
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
