import React from "react";
import {PropTypes} from "prop-types";
import {Pressable, StyleSheet, Text} from "react-native";

export const AddButton = ({itemsCb}) => (
  <Pressable
    onPress={() => itemsCb()}
    style={{
      backgroundColor: "blue",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 20,
      width: 70,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    }}>
    <Text style={{color: "white", fontSize: 30}}>Add</Text>
  </Pressable>
);

AddButton.propTypes = {
  itemsCb: PropTypes.func,
};
