import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const fetchTodos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@todos");
      if (jsonValue) {
        setTodos(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log("Error fetching the todos ", error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const setTodosToStorage = async () => {
      try {
        await AsyncStorage.setItem("@todos", JSON.stringify(todos));
      } catch (error) {
        console.error("Error saving todos to AsyncStorage:", error);
      }
    };

    const updateKey = () => {
      if (todos.length > 0) {
        const lastKey = todos[todos.length - 1].id;
        if (lastKey) {
          setCount(lastKey + 1);
        }
      }
    };

    setTodosToStorage();
    updateKey();
  }, [todos]);

  const removeCompletedTodosDaily = async () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    if (currentHour === 0 && currentMinute === 0) {
      try {
        const data = await AsyncStorage.getItem("@todos");
        const newTodos = JSON.parse(data);
        const todosToRemove = newTodos?.filter((todo) => !todo.completed);

        setTodos(todosToRemove);
        try {
          await AsyncStorage.setItem("@todos", JSON.stringify(todosToRemove));
        } catch (error) {
          console.error("Error saving filtered todos to AsyncStorage:", error);
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      removeCompletedTodosDaily();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const addTodo = (task) => {
    setCount((prev) => prev + 1);
    const newTodo = { id: count, task, completed: false };
    // console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodoCompletion = async (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodoCompletion }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
