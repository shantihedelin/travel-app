import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

const PickCountry = ({ onSelect = () => {} }) => {
  const [country, setCountry] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleSelect = (selectedCountry) => {
    setCountry(selectedCountry);
    setVisible(false);
    onSelect(selectedCountry);
  };

  return (
    <View className="flex items-center">
      {country && (
        <View className="flex-row">
          <Text className="mb-6">Selected country:&nbsp;</Text>
          <Text className="font-semibold">{country.name}</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="text-black border-transparent flex items-center bg-[#EFEFF0] w-32 h-10 rounded-xl justify-center mt-4"
      >
        <Text className="text-black ">Select Country</Text>
      </TouchableOpacity>
      {visible && (
        <CountryPicker
          withFilter
          withFlag
          withCountryNameButton
          withAlphaFilter
          onSelect={handleSelect}
          visible={visible}
          onClose={() => setVisible(false)}
        />
      )}
    </View>
  );
};

export default PickCountry;
