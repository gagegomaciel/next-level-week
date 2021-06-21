import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.buttonContainer}  
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>

      <Text style={styles.btnText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}