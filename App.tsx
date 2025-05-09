import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type StepCounterProps = {
  label: string;
  step: number;
};

const StepCounter = ({ label, step }: StepCounterProps) => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handlePress = () => {
    setClicks(clicks + 1);
    setCount(count + step);
  };

  const handleReset = () => {
    setClicks(0);
    setCount(0);
  };

  const renderHistory = () => {
    return Array.from({ length: clicks }, (_, i) => {
      const multiplier = i + 1;
      return (
        <Text key={i}>
          {label} x {multiplier} = {Number(label) * multiplier}
        </Text>
      );
    });
  };

  return (
    <View style={styles.counterBox}>
      <Text style={styles.heading}>{label}'s Table</Text>
      <Button title={`Add ${label}`} onPress={handlePress} />
      <View style={{ marginVertical: 5 }}>{renderHistory()}</View>
      <Button title="Reset" onPress={handleReset} color="red" />
    </View>
  );
};

const App = () => {
  return (
    <LinearGradient
      colors={["#3A0519", "#670D2F", "#A53860", "#EF88AD"]}
      style={styles.container}
    >
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📚 Multiplication Table App</Text>
        <Text style={styles.subtitle}>
          Tap "Add" to build multiplication tables. Reset anytime!
        </Text>
      </View>

      {/* Scrollable Section */}
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <View style={styles.buttonRow}>
          <StepCounter label="2" step={2} />
          <StepCounter label="3" step={3} />
          <StepCounter label="4" step={4} />
          <StepCounter label="5" step={5} />
          <StepCounter label="6" step={6} />
          <StepCounter label="7" step={7} />
          <StepCounter label="8" step={8} />
          <StepCounter label="9" step={9} />
          <StepCounter label="10" step={10} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
  },
  scrollView: {
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  counterBox: {
    margin: 10,
    alignItems: "center",
    width: screenWidth / 2 - 30,
    backgroundColor: "#ffffffcc",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    height: 350,
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default App;
