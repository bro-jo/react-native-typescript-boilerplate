import * as React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';
import Color from '../../constant/Color';

interface IBottomTab {
  icon: ImageSourcePropType;
  text: string;
  onPress: () => void;
  isActive: boolean;
}

export const BottomTab = ({icon, text, onPress, isActive}: IBottomTab) => (
  <View style={{flex: 1, opacity: isActive ? 1 : 0.6}}>
    <TouchableOpacity
      activeOpacity={0.4}
      style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
      onPress={onPress}
    >
      <Image style={{width: 24, height: 24, margin: 3, resizeMode: 'contain'}} source={icon} />
      <Text style={{marginTop: 3, fontSize: 14, color: Color.white}}>{text}</Text>
    </TouchableOpacity>
  </View>
);
