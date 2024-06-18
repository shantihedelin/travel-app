import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function BeforeTheTrip() {
  return (
    <View className="bg-[#d3f8fe] h-full flex items-center">
      <Text className="pt-8 mb-8 text-2xl">Things to do before the trip</Text>
      <TextInput
        className="bg-white h-16 w-full px-5"
        placeholder="Add to your list..."
        // value={text}
        // onChangeText={(newText) => setText(newText)}
      />
      <TouchableOpacity className="mt-6">
        <Text className="text-lg">Add</Text>
      </TouchableOpacity>
    </View>
  );
}
