import React from "react";
import {PropTypes} from "prop-types";
import {View, Text, TextInput} from "react-native";

export const TaskNameInput = ({taskNameCb}) => {
  const [name, setName] = React.useState("");
  const onChange = event => {
    setName(event.nativeEvent.text);
    taskNameCb(event.nativeEvent.text);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
      <Text>Task:</Text>
      <TextInput
        placeholder="task"
        style={{
          borderWidth: 2,
          borderColor: "#000000",
          padding: 5,
          width: 200,
        }}
        value={name}
        onChange={onChange}
      />
    </View>
  );
};

TaskNameInput.propTypes = {
  taskNameCb: PropTypes.string,
};
