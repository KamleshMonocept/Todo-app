import { StatusBar, StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { TodoProvider } from "./src/context/TodoProvider";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-debrosse": require("./assets/fonts/Poppins-debrosse.ttf"),
    "Poppins-Christmas": require("./assets/fonts/Poppins-Christmas.ttf"),
    "Poppins-Credit": require("./assets/fonts/Poppins-Credit.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TodoProvider>
      <SafeAreaProvider style={{ backgroundColor: "#ddf5dd" }}>
        <Home />
      </SafeAreaProvider>
      <StatusBar barStyle={"default"} hidden={false} translucent={true} />
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
