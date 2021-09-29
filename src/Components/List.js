import React from "react";
import {PropTypes} from "prop-types";
import {FlatList} from "react-native";
import {ListItem} from "./ListItem";

export const List = ({items, deleteItemCb}) => (
  <FlatList
    data={items}
    renderItem={({item}) => <ListItem item={item} onDeleteCb={deleteItemCb} />}
  />
);

List.propTypes = {
  items: PropTypes.array,
  deleteItemCb: PropTypes.func,
};
