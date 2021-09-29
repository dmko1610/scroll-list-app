import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import {AddButton} from "./Components/AddButton";
import {List} from "./Components/List";
import {TaskDescInput} from "./Components/TaskDescInput";
import {TaskNameInput} from "./Components/TaskNameInput";

const InputItems = ({taskNameCb, taskDescCb}) => {
  return (
    <View style={styles.inputContainer}>
      <TaskNameInput taskNameCb={taskNameCb} />
      <TaskDescInput taskDescCb={taskDescCb} />
    </View>
  );
};

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const [items, setItems] = React.useState([]);
  const [taskName, setTaskName] = React.useState("");
  const [taskDesc, setTaskDesc] = React.useState("");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getTaskName = data => setTaskName(data);

  const getTaskDesc = data => setTaskDesc(data);

  const addItems = () => {
    const item = {name: taskName, desc: taskDesc};
    setItems(old => [...old, item]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.controlContainer}>
        <InputItems taskNameCb={getTaskName} taskDescCb={getTaskDesc} />
        <AddButton itemsCb={addItems} taskName={taskName} taskDesc={taskDesc} />
      </View>

      <List items={items} />
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
