import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CounterApp from "./src/CounterApp";
import { Provider } from "react-redux"; //this provider make sure this store available in all application
import { createStore } from "redux";

/*
store- hold our state - there is ONLY ONE STATE
action - state can be modified using action - SIMPLE OBJECT
Dispatcher - Action need to be sent by someone - known ad dispatching an action
Reducer - recives the action and modifies the state
Subscriber - listens for state changes to update the ui
more:

  */

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { counter: state.counter + 1 };

    case "DECREASE":
      return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

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
export default App;
