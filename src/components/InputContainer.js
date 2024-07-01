import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TodoContext } from "../context/TodoProvider";

// data

export default function InputContainer() {
  const [task, setTask] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = () => {
    addTodo(task);
    setTask("");

    // console.log(todos);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter task..."
            placeholderTextColor="rgba(100,100,100,0.4)"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
            disabled={!task}
          >
            <Ionicons name="add-circle-outline" size={22} color="gray" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    padding: 10,
    backgroundColor: "#ddf5dd",
  },
  keyboardAvoidingContainer: {
    width: "100%",
  },
  innerContainer: {
    width: "85%",
    borderWidth: 1,
    borderColor: "rgba(100, 100, 100, 0.3)",
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  input: {
    height: 40,
    flex: 1,
  },
  button: {
    width: 20,
  },
});
