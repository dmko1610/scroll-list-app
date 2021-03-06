import React from "react";
import {PropTypes} from "prop-types";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import "react-native-get-random-values";
import {v4 as uuidv4} from "uuid";

import {Colors} from "react-native/Libraries/NewAppScreen";
import {AddButton} from "./Components/AddButton";
import {List} from "./Components/List";
import {TaskDescInput} from "./Components/TaskDescInput";
import {TaskNameInput} from "./Components/TaskNameInput";

const InputItems = React.forwardRef(
  ({taskNameCb, taskDescCb, makeFocused}, ref) => {
    return (
      <View style={styles.inputContainer}>
        <TaskNameInput onSubmitCb={makeFocused} taskNameCb={taskNameCb} />
        <TaskDescInput ref={ref} taskDescCb={taskDescCb} />
      </View>
    );
  },
);

InputItems.displayName = "InputItems";

export const App = () => {
  const inputRef = React.useRef(null);
  const isDarkMode = useColorScheme() === "dark";

  const [items, setItems] = React.useState([]);
  const [taskName, setTaskName] = React.useState("");
  const [taskDesc, setTaskDesc] = React.useState("");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#FFFFFF",
  };

  const makeFocused = () => inputRef.current.focus();

  const getTaskName = data => setTaskName(data);

  const getTaskDesc = data => setTaskDesc(data);

  const addItems = () => {
    if (taskName) {
      const item = {id: uuidv4(), name: taskName, desc: taskDesc};
      setItems(old => [...old, item]);
    }
  };

  const deleteItem = id => {
    const updatedTasks = items.filter(task => task.id !== id);
    setItems(updatedTasks);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.controlContainer}>
        <InputItems
          ref={inputRef}
          makeFocused={makeFocused}
          taskNameCb={getTaskName}
          taskDescCb={getTaskDesc}
        />
        <AddButton itemsCb={addItems} taskName={taskName} taskDesc={taskDesc} />
      </View>

      <List items={items} deleteItemCb={deleteItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    marginVertical: 10,
  },
});

InputItems.propTypes = {
  taskNameCb: PropTypes.func,
  taskDescCb: PropTypes.func,
  makeFocused: PropTypes.func,
};
