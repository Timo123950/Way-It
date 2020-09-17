import React from "react";
import * as Sentry from 'sentry-expo'

import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "./app/components/Drawer/Drawer";
import HomeScreen from './app/screens/HomeScreen'
import MapScreen from './app/screens/MapScreen'

// Initializing of Sentry for Error and Crash Reports and Logs
Sentry.init({
  dsn: "https://47b0a6b743314f8596cc4771a15151ae@o448307.ingest.sentry.io/5429489",
  enableInExpoDevelopment: true,
  debug: true,
})

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

// Initialize the Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
    </Drawer.Navigator>
  );
}

// Initializing of the App
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
