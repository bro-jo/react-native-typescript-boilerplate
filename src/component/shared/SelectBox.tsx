import * as React from 'react';
import {Image, Text, View} from 'react-native';
import Picker from 'react-native-picker-select';
import Color from '../../constant/Color';

interface IProps {
  value: any;
  items: Array<{ label: string; value: any; }>;
  onValueChange: (value: any, index: number) => void;
  placeholder: string;
  disabled?: boolean;
}

const SelectBox = ({value, items, onValueChange, placeholder, disabled}: IProps) => (
  <Picker
    value={value}
    style={{width: '100%'}}
    items={items}
    placeholder={{}}
    onValueChange={onValueChange}
    disabled={disabled}
  >
    <View
      style={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 280,
          height: 40,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 14,
          justifyContent: 'center',
          backgroundColor: Color.white,
          borderWidth: 1,
          borderColor: Color.grayLight4,
          borderRadius: 4,
        }}
      >
        <Text style={{fontSize: 14, color: value ? Color.black2 : Color.grayLight4}}>
          {value || placeholder}
        </Text>
        <Image
          style={{
            width: 24,
            height: 24,
            position: 'absolute',
            top: 6,
            right: 6,
          }}
          source={require('../../../image/icon/selectbox_arrow.png')}
        />
      </View>
    </View>
  </Picker>
);

export default SelectBox;