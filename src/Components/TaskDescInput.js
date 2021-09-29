import React from "react";
import {PropTypes} from "prop-types";
import {View, Text, TextInput, StyleSheet} from "react-native";

export const TaskDescInput = ({taskDescCb}) => {
  const [desc, setDesc] = React.useState("");

  const onChange = event => {
    setDesc(event.nativeEvent.text);
    taskDescCb(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descr:</Text>
      <TextInput
        style={styles.input}
        value={desc}
        onChange={onChange}
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

TaskDescInput.propTypes = {
  taskDescCb: PropTypes.func,
};
