import React from "react";
import {PropTypes} from "prop-types";
import {View, Text, StyleSheet, Pressable} from "react-native";

export const ListItem = ({item, onDeleteCb}) => (
  <View style={styles.itemContainer}>
    <View style={styles.columnContainer}>
      <View style={styles.dot} />
      <View style={styles.taskContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.desc}</Text>
      </View>
    </View>
    <Pressable
      onPress={() => onDeleteCb(item.id)}
      style={styles.delete}
      android_ripple={{
        color: "#FFFFFF",
        borderless: false,
      }}>
      <Text style={styles.x}>X</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginTop: 10,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskContainer: {
    paddingVertical: 5,
    flexShrink: 1,
  },
  columnContainer: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 25,
  },
  description: {
    fontSize: 14,
  },
  delete: {
    marginHorizontal: 10,
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: "darkred",
    justifyContent: "center",
    alignItems: "center",
  },
  x: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});

ListItem.propTypes = {
  item: PropTypes.object,
  onDeleteCb: PropTypes.func,
};
