import React from 'react';
import { Text, View } from 'react-native';

const TestFontComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'cactus-classical-serif-regular', fontSize: 24 }}>
        This is a test of the Cactus Classical Serif font.
      </Text>
    </View>
  );
};

export default TestFontComponent;
