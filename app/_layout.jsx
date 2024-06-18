import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { View, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShowStorage from "../components/ShowStorage";

const clearSpecificStorage = async () => {
  try {
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
  }
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <View style={styles.clearButtonContainer}>
        <Button title="Clear Storage" onPress={clearSpecificStorage} />
      </View> */}
      {/* <ShowStorage/> */}
      <Stack>
        <Stack.Screen name="First Page" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Start Journey" />
        <Stack.Screen name="Your Journey" />
        <Stack.Screen name="Restaurants" />
        <Stack.Screen name="My Budget" />
        <Stack.Screen name="Before Trip" />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  clearButtonContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
});
