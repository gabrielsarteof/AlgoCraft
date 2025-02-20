import React from 'react';
import { TouchableOpacity, Image, ViewStyle, ImageStyle } from 'react-native';
import iconButtonStyles from '@/styles/iconButtonStyles'; 

interface IconButtonProps {
  iconSource: any; 
  onPress: () => void; 
  style?: ViewStyle; 
}

export const IconButton: React.FC<IconButtonProps> = ({ iconSource, onPress, style }) => {
  return (
    <TouchableOpacity style={[iconButtonStyles.bottomButton]} onPress={onPress}>
      <Image source={iconSource} style={iconButtonStyles.buttonIcon} />
    </TouchableOpacity>
  );
};
