import React from "react";
import {FlatList} from "react-native";
import {ListItem} from "./ListItem";

export const List = ({items}) => (
  <FlatList data={items} renderItem={({item}) => <ListItem item={item} />} />
);
