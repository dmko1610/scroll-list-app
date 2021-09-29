import React from "react";
import {PropTypes} from "prop-types";
import {View, Text, TextInput, StyleSheet} from "react-native";

export const TaskNameInput = ({taskNameCb, onSubmitCb})=> {
  const [name, setName] = React.useState("");
  const onChange = event => {
    setName(event.nativeEvent.text);
    taskNameCb(event.nativeEvent.text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        onFocus={() => setName("")}
        style={styles.input}
        value={name}
        onChange={onChange}
        onSubmitEditing={onSubmitCb}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#000000",
    padding: 5,
    width: 200,
    marginVertical: 10,
  },
});

TaskNameInput.propTypes = {
  taskNameCb: PropTypes.func,
  onSubmitCb: PropTypes.func,
};
