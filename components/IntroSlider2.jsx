import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "expo-router";
import LottieView from "lottie-react-native";

const IntroSlider = () => {
  const navigation = useNavigation();

  return (
    <Swiper
      showsButtons={false}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      paginationStyle={styles.pagination}
    >
      <View style={styles.slide}>
        <LottieView
          source={require("../assets/animation.json")}
          autoPlay
          style={{ width: "70%", height: "40%" }}
        />
        <Text style={styles.text}>
          Collect everything you need for your trip in one place
        </Text>
      </View>

      <View style={styles.slide}>
        <LottieView
          source={require("../assets/friends.json")}
          autoPlay
          style={{ width: "100%", height: "40%" }}
        />
        <Text style={styles.text}>
          Share all plans and travel information with your friends with only one
          code - no account needed!
        </Text>
      </View>

      <View style={styles.slide}>
        <Text style={styles.lastText}>Create your perfect trip</Text>
        <LottieView
          source={require("../assets/Airplane.json")}
          autoPlay
          style={[styles.lottie, { width: "100%", height: "50%" }]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("First Page")}
          title="Start"
          className="w-20 mt-8 rounded-lg bg-transparent shadow-lg items-center"
        >
          <Text className="text-2xl text-blue-600">Start</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 40,
  },
  lastText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 40,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#000",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  pagination: {
    bottom: 20,
  },
  lottie: {
    position: "absolute",
    bottom: 0,
  },
});

export default IntroSlider;
