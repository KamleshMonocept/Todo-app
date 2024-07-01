import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function Calendar() {
  let [currentDate, setCurrentDate] = useState(new Date());

  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

  const months = [
    "J A N U A R Y",
    "F E B R U A R Y",
    "M A R C H",
    "A P R I L",
    "M A Y",
    "J U N E",
    "J U L Y",
    "A U G U S T",
    "S E P T E M B E R",
    "O C T O B E R",
    "N O V E M B E R",
    "D E C E M B E R",
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          borderColor: "white",
          borderBottomWidth: 0.2,
          width: "97%",
          height: "97%",
          elevation: 7,
        }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.month}>{months[month]}</Text>
          </View>
          <View>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View>
            <Text style={styles.year}>{year}</Text>
          </View>
        </View>
      </View>
      <View style={{ ...styles.lines, width: "97.2%" }} />
      <View
        style={{
          ...styles.lines,
          width: "97.5%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "97.8%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "98.1%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "98.4%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "98.7%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "99%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "99.3%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "99.6%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "99.9%",
        }}
      />
      <View
        style={{
          ...styles.lines,
          width: "100%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "78%",
    height: 260,
    margin: "auto",
    top: 12,
    elevation: 24,
    borderTopEndRadius: 38,
    borderBottomStartRadius: 38,
    backgroundColor: "#8b8bf7",

    overflow: "hidden",
  },
  innerContainer: {
    padding: 14,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#8b8bf7",
  },
  month: {
    fontSize: 32,
    fontFamily: "Poppins-debrosse",
    color: "snow",
    fontWeight: "500",
  },
  date: {
    color: "snow",
    fontFamily: "Poppins-Credit",
    fontSize: 84,
    fontWeight: "bold",
  },
  year: {
    color: "snow",
    fontSize: 20,
    fontWeight: "400",
  },
  lines: {
    backgroundColor: "white",
    height: 0.2,
    marginBottom: 0.2,
    marginTop: 0.2,
  },
});
