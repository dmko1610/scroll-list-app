import React from "react";
import {PropTypes} from "prop-types";
import {View, Text, TextInput} from "react-native";

export const TaskDescInput = ({taskDescCb}) => {
  const [desc, setDesc] = React.useState("");

  const onChange = event => {
    setDesc(event.nativeEvent.text);
    taskDescCb(event.nativeEvent.text);
  };

  return (
    <View style={{flexDirection: "row"}}>
      <Text>Descr:</Text>
      <TextInput
        placeholder="description"
        style={{
          borderWidth: 2,
          borderColor: "#000000",
          padding: 5,
          width: 200,
        }}
        value={desc}
        onChange={onChange}
      />
    </View>
  );
};

TaskDescInput.propTypes = {
  taskDescCb: PropTypes.string,
};
