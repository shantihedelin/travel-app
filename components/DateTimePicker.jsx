import { useState } from "react";
import { View, TouchableOpacity, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({
  mode = "date",
  display = "default",
  textColor = "black",
  onChange,
}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(true);
  const [daysUntil, setDaysUntil] = useState(null);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(true);
    setDate(currentDate);
    calculateDaysUntil(currentDate);
    onChange(daysUntil);
  };

  const showMode = (currentMode) => {
    setShow(true);
  };

  const calculateDaysUntil = (selectedDate) => {
    const currentDate = new Date();
    const timeDifference = selectedDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    setDaysUntil(daysDifference);
  };

  return (
    <View className="flex items-center justify-center pt-2">
      <View className="flex items-center flex-row justify-center">
        {/* <TouchableOpacity
        onPress={() => showMode(mode)}
        className="text-black border-transparent h-10 w-full rounded-xl flex items-center bg-white justify-center"
      >
        <Text style={{ color: textColor }}>Choose Date</Text>
      </TouchableOpacity> */}
        <Text>Choose date:</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display={display}
            onChange={handleChange}
          />
        )}
      </View>
      {/* <View className="mt-3">
        {daysUntil !== null && <Text>{daysUntil} days until your trip</Text>}
      </View> */}
    </View>
  );
};

export default DatePicker;
