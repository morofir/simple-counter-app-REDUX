import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.text}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.counter}</Text>

          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.text}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE" }),
    decreaseCounter: () => dispatch({ type: "DECREASE" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp); //connecting the props to the counter app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});
