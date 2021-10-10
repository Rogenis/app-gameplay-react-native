import React, { useEffect } from 'react';
// import { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
// import { Load } from '../../components/Load';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}


export function Guilds({handleGuildSelect}: Props){
    const guilds = [
        { 
            id: '1',
            name: 'Lendários',
            icon: 'image.png', 
            owner: true
        },
        { 
            id: '2',
            name: 'Fairy Tail',
            icon: 'image.png', 
            owner: false
        },
        { 
            id: '3',
            name: 'Lendários',
            icon: 'image.png', 
            owner: true
        },
        { 
            id: '4',
            name: 'Fairy Tail',
            icon: 'image.png', 
            owner: false
        },
        { 
            id: '5',
            name: 'Lendários',
            icon: 'image.png', 
            owner: true
        },
        { 
            id: '6',
            name: 'Fairy Tail',
            icon: 'image.png', 
            owner: false
        },
        { 
            id: '7',
            name: 'Lendários',
            icon: 'image.png', 
            owner: true
        },
        { 
            id: '8',
            name: 'Fairy Tail',
            icon: 'image.png', 
            owner: false
        },
        { 
            id: '9',
            name: 'Lendários',
            icon: 'image.png', 
            owner: true
        },
        { 
            id: '10',
            name: 'Fairy Tail',
            icon: 'image.png', 
            owner: false
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Guild 
                    data={item}
                    onPress={() => handleGuildSelect(item)}
                  />
                )}  
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68 }}
                style={styles.guilds}
            />
        </View>
    );
}