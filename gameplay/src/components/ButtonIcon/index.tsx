import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProperties & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton 
      style={styles.buttonContainer}  
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>

      <Text style={styles.btnText}>
        {title}
      </Text>
    </RectButton>
  )
}