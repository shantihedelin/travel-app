import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListItem, Button } from "react-native-elements";
import { Card } from "react-native-paper";

const BudgetApp = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    try {
      const savedBudget = await AsyncStorage.getItem("budget");
      if (savedBudget) {
        const parsedBudget = JSON.parse(savedBudget);
        setBudget(parsedBudget);
        calculateTotal(parsedBudget);
      }
    } catch (error) {
      console.log("Error loading budget:", error);
    }
  };

  const saveBudget = async (newBudget) => {
    try {
      await AsyncStorage.setItem("budget", JSON.stringify(newBudget));
      setBudget(newBudget);
      calculateTotal(newBudget);
    } catch (error) {
      console.log("Error saving budget:", error);
    }
  };

  const addBudgetItem = () => {
    const newBudget = [...budget, { amount: parseFloat(amount), description }];
    saveBudget(newBudget);
    setAmount("");
    setDescription("");
  };

  const calculateTotal = (budgetList) => {
    const totalAmount = budgetList.reduce(
      (sum, item) => sum + parseFloat(item.amount),
      0
    );
    setTotal(totalAmount);
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.description}</ListItem.Title>
        <ListItem.Subtitle>{item.amount} SEK</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View className="p-20 h-full">
      <View className="flex items-center mb-6">
        <Text className="text-3xl">Plan your budget</Text>
      </View>
      <Card >
        <Card.Title>Enter Budget Details</Card.Title>
        <Card.Content>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount"
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Enter description"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <Button title="Add to Budget" onPress={addBudgetItem} />
        </Card.Content>
      </Card>
      <FlatList
        data={budget}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />
      <Card style={{ marginTop: 20 }}>
        <Card.Title>Total Budget</Card.Title>
        <Card.Content>
          <Text>Total: {total.toFixed(2)} SEK</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default BudgetApp;
