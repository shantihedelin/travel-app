import React from 'react';
import { Text } from 'react-native';
import { styled } from 'nativewind';

const StyledText = styled(Text);

const CustomText = ({ style, className, ...props }) => {
  return (
    <StyledText style={[{ fontFamily: 'Assistant' }, style]} className={className} {...props} />
  );
};

export default CustomText;
