import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './style';

export const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/app_images/avatar.png')}
        style={styles.image}
      />
    </View>
  );
};
