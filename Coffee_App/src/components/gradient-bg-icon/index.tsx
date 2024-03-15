import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme';
import CustomIcon from '../custom-icon';
import {styles} from './style';

interface Props {
  name: string;
  color: string;
  size: number;
}

export const GradientBGIcon = (props: Props) => {
  const {color, name, size} = props;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0}}
        style={styles.background}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};
