import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Biscoito",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "cookie" : "cookie-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Cronômetro",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "timer" : "timer-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scrollView"
        options={{
          title: "Scrol lView",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "accessibility" : "accessibility-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="flatListC"
        options={{
          title: "FlatList",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "airplane" : "airplane-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pizza"
        options={{
          title: "Pizza",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "pizza" : "pizza-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sliderCommunity"
        options={{
          title: "Slider",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "shield" : "shield-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
