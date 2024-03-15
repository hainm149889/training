import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {GradientBGIcon} from '../gradient-bg-icon';
import {COLORS, FONTSIZE} from '../../theme';
import {ProfilePic} from '../profile-pic';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  title?: string;
}

export const Header = (props: HeaderProps) => {
  const {title} = props;
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {top: top}]}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.title}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
