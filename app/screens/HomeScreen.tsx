import React from "react";

import { DrawerActions } from "@react-navigation/native";
import { Text, View } from "react-native";

// Initializing of the HomeScreen
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
