import React from "react";

import { DrawerActions } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

// Initializing of the Drawer Content
export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}>
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      </DrawerItemList>
    </DrawerContentScrollView>
  );
}
