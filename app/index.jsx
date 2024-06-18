import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IntroSlider2 from "../components/IntroSlider2";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View className="h-full flex items-center text-center  bg-[#d3f8fe]">
      <IntroSlider2 />
    </View>
  );
}
