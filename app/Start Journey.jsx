import { Text, View, TouchableOpacity } from "react-native";
import DatePicker from "../components/DateTimePicker";
import PickCountry from "../components/CountryPicker";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function StartJourney({}) {
  const navigation = useNavigation();
  const [country, setCountry] = useState(null);
  const [daysUntil, setDaysUntil] = useState(null);
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    if (country && daysUntil !== null) {
      setCanNavigate(true);
    } else {
      setCanNavigate(false);
    }
  }, [country, daysUntil]);

  const handlePress = () => {
    if (canNavigate) {
      navigation.navigate("Your Journey", { country, daysUntil });
    } else {
      alert("Please fill in both the country and date before proceeding.");
    }
  };

  return (
    <View className="h-full flex items-center text-center pt-24 bg-[#d3f8fe]">
      <View className="pt-10 justify-center space-y-24 bg-white py-16 px-14 border-2 rounded-xl shadow-lg border-blue-300">
        <Text className="text-2xl mb-2 text-center">
          Where are you traveling?
        </Text>
        <PickCountry onSelect={setCountry} />
        <View>
          <Text className="text-2xl mb-2 text-center">When is your trip?</Text>
          <DatePicker className="" onChange={setDaysUntil} />
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#4d56ff] h-20 w-64 mt-20 rounded-full flex justify-center items-center"
        onPress={handlePress}
      >
        <Text className="text-xl font-medium text-white">
          Start planning journey
        </Text>
      </TouchableOpacity>
    </View>
  );
}
