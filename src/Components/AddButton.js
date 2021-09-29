import React from "react";
import {PropTypes} from "prop-types";
import {Keyboard, Pressable, StyleSheet, Text} from "react-native";

export const AddButton = ({itemsCb}) => (
  <Pressable
    onPress={() => { Keyboard.dismiss(); itemsCb();}}
    style={styles.button}
    android_ripple={{
      color: "#FFFFFF",
      borderless: false,
    }}>
    <Text style={styles.text}>Add</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "darkblue",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    width: 80,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 23,
  },
});

AddButton.propTypes = {
  itemsCb: PropTypes.func,
};
