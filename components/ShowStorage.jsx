import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShowStorage = () => {
  const [storageContent, setStorageContent] = useState([]);

  const loadStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);

      const formattedResult = result.map(([key, value]) => ({ key, value }));
      setStorageContent(formattedResult);
    } catch (error) {
      console.error("Error loading AsyncStorage:", error);
    }
  };

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Reload Storage" onPress={loadStorage} />
      <ScrollView>
        {storageContent.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.key}>{item.key}:</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "pink",
  },
  itemContainer: {
    marginVertical: 10,
  },
  key: {
    fontWeight: "bold",
    text: "black",
  },
  value: {
    marginLeft: 10,
    text: "black",
  },
});

export default ShowStorage;
