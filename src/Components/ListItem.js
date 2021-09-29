import React from "react";
import {PropTypes} from "prop-types";
import {View, Text} from "react-native";

export const ListItem = ({item}) => (
  <View>
    <Text style={{fontSize: 30}}>{item.name}</Text>
    <Text>{item.desc}</Text>
  </View>
);

ListItem.propTypes = {
  item: PropTypes.object,
};
