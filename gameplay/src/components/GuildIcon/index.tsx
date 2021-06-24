import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://assets.b9.com.br/wp-content/uploads/2018/10/discord-b9.jpg';
  
  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}