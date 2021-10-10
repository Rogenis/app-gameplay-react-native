import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

export function GuildIcon(){
    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDCSZrU46gKthwFPvgflXhypdnZjab68BHn-Y0HoQdBAdhEefapjQ-gGCV5HMdoaIW8&usqp=CAU'
    return (
        <View style={styles.container}>
            <DiscordSvg 
                width={40} 
                height={40}
            />
        </View>
    )
}