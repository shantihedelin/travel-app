import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View className="h-full flex items-center text-center  bg-[#d3f8fe]">
      <View
        style={{ width: "100%", height: 370, position: "relative" }}
        className="flex items-center pt-16"
      >
        <Video
          source={require("../assets/globe.mp4")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
        <LinearGradient
          colors={["rgba(211, 248, 254, 0)", "rgba(211, 248, 254, 1)"]}
          style={{
            position: "absolute",
            top: 200,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 0,
          }}
        />
        <Text className="text-5xl mt-8">Travel Planner</Text>
      </View>
      <TouchableOpacity
        className="bg-[#4d56ff] h-20 w-64 mt-48 rounded-full flex justify-center items-center"
        onPress={() => navigation.navigate("Start Journey")}
      >
        <Text className="text-xl font-medium text-white">Plan my journey</Text>
      </TouchableOpacity>
    </View>
  );
}
