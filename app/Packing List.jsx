import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function PackingList() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem("packingListItems");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load packing list.");
    }
  };

  const saveItems = async (newItems) => {
    try {
      await AsyncStorage.setItem("packingListItems", JSON.stringify(newItems));
    } catch (error) {
      Alert.alert("Error", "Failed to save packing list.");
    }
  };

  const addItem = () => {
    // definera egenskaper som alla items ska ha när dom skapas, text, id, done
    const newItem = {
      text: text,
      id: Date.now(),
      done: false,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    saveItems(updatedItems);
    setText("");
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  const markAsDone = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  const renderRightActions = (id) => (
    <TouchableOpacity
      style={{
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: "100%",
      }}
      onPress={() => removeItem(id)}
    >
      <Text style={{ color: "white" }}>Delete</Text>
    </TouchableOpacity>
  );

  // sortera dom "checkade" items längst ner i listan
  const sortedItems = items.sort((a, b) => a.done - b.done);

  return (
    <View className="bg-[#d3f8fe] h-full flex items-center">
      <Text className="pt-8 mb-8 text-3xl">Packing List</Text>
      <TextInput
        className="bg-white h-16 w-full px-5"
        placeholder="Add to your packing list..."
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <TouchableOpacity onPress={addItem} className="mt-6">
        <Text className="text-lg">Add</Text>
      </TouchableOpacity>
      <View className="mt-16 bg-white w-full">
        {sortedItems.map((item) => (
          <Swipeable
            key={item.id}
            renderRightActions={() => renderRightActions(item.id)}
          >
            <View
              className={`flex justify-between flex-row w-full px-8 py-3 border-b border-blue-500 ${
                item.done ? "bg-green-300" : ""
              }`}
            >
              <Text className={`text-lg ${item.done ? "line-through" : ""}`}>
                {item.text}
              </Text>
              <TouchableOpacity onPress={() => markAsDone(item.id)}>
                <MaterialIcons
                  name={item.done ? "task-alt" : "radio-button-unchecked"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </Swipeable>
        ))}
      </View>
    </View>
  );
}
