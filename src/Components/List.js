import React from "react";
import {PropTypes} from "prop-types";
import {FlatList} from "react-native";
import {ListItem} from "./ListItem";

export const List = ({items}) => (
  <FlatList data={items} renderItem={({item}) => <ListItem item={item} />} />
);

List.propTypes = {
  items: PropTypes.array,
};
