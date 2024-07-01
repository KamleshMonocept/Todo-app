import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Calendar from "../components/Calendar";
import { SafeAreaView } from "react-native-safe-area-context";
import InputContainer from "../components/InputContainer";
import Todos from "../components/Todos";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, overflow: "hidden" }}>
        <Calendar />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Todos />
      </View>
      <View style={{ flex: 0.3 }}>
        <InputContainer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
