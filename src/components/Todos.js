import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Todos() {
  const { todos } = useContext(TodoContext);

  return (
    <View style={{ marginTop: 12, paddingBottom: 34 }}>
      <View style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Text style={{ fontSize: 20 }}>Todos</Text>
      </View>
      {!todos.length > 0 ? (
        <View style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <Text>There is nothing to do for you today!</Text>
          <Text style={{ fontSize: 18, opacity: 0.4 }}>Add some tasks...</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          renderItem={(todo) => <RenderItem todo={todo} />}
        />
      )}
    </View>
  );
}

const RenderItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.item.completed);
  // console.log(isCompleted);
  const { removeTodo, toggleTodoCompletion } = useContext(TodoContext);

  const taskCompleted = (id) => {
    setIsCompleted((prev) => !prev);
    toggleTodoCompletion(id);
  };

  return (
    <View
      style={[
        styles.container,
        isCompleted ? styles.completed : styles.inCompleted,
      ]}
    >
      <View style={{ flex: 2 }}>
        <Text style={[styles.todoText, isCompleted && styles.completedText]}>
          {todo.item.task}
        </Text>
      </View>
      {/* Checkbox */}
      <View
        style={{
          justifyContent: "center",
          marginLeft: 4,
          marginRight: 8,
        }}
      >
        <BouncyCheckbox
          size={20}
          disableText
          fillColor="#111"
          unFillColor="#f0f0f0"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={() => taskCompleted(todo.item.id)}
          isChecked={todo.item.completed}
        />
      </View>
      <TouchableOpacity
        style={{ flex: 0.3, justifyContent: "center" }}
        onPress={() => removeTodo(todo.item.id)}
      >
        <Ionicons name="trash-bin-outline" color="black" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    minHeight: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 12,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
    elevation: 10,
  },
  todoText: {
    color: "#141313",
  },
  completed: {
    opacity: 0.3,
    borderWidth: 2,
    borderColor: "#21f821",
    elevation: 0,
  },
  inCompleted: {
    borderWidth: 2,
    borderColor: "red",
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: "black",
    textDecorationStyle: "double",
  },
});
