import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function YourJourney() {
  const route = useRoute();
  const navigation = useNavigation();
  const { country, daysUntil } = route.params;

  return (
    <ScrollView className="h-full bg-[#d3f8fe]">
      <View className="flex items-center">
        <View className="flex justify-center flex-row pt-16 pb-16 items-center">
          <View className="border rounded-full h-32 w-32 flex justify-center items-center">
            <Text className="text-7xl pt-2">{daysUntil}</Text>
          </View>
          <Text className="text-2xl pt-3 ml-4">
            days until {country ? country.name : "your trip"}
          </Text>
        </View>
        <View className="shadow-xl ">
          <TouchableOpacity onPress={() => navigation.navigate("Packing List")}>
            <View className="h-28 border-b w-full bg-white flex-row justify-between p-4 border-t-2 border-l border-r border-blue-400 border-b-black rounded-t-3xl">
              <Text className="text-xl">My Packing List</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Before Trip")}>
            <View className="h-28 border-b w-full bg-white flex-row justify-between p-4 border-l border-r border-blue-400 border-t-black border-b-black">
              <Text className="text-xl">Before the trip</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <View className="h-28 border-b w-full bg-white flex-row justify-between p-4 border-l border-r border-blue-400 border-t-black border-b-black">
            <Text className="text-xl">Bookings and Tickets</Text>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("My Budget")}>
            <View className="h-28 border-b w-full bg-white flex-row justify-between p-4 border-l border-r border-blue-400 border-t-black border-b-black">
              <Text className="text-xl">My Budget</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <View className="h-28 border-b w-full bg-white flex-row justify-between p-4 border-l border-r border-blue-400 border-t-black border-b-black">
              <Text className="text-xl">Restaurants to visit</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <View className="h-28 border-b w-full bg-white flex-row justify-between p-4 border-l border-r border-blue-400 border-t-black border-b-black">
            <Text className="text-xl">To dos</Text>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </View>
          <View className="h-28 border-b-2 rounded-b-3xl border-l border-r border-blue-400 w-full bg-white flex-row justify-between p-4">
            <Text className="text-xl">Local places to visit</Text>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
