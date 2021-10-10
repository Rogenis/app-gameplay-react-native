import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
// import * as Linking from 'expo-linking';

import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';

import {
    ImageBackground,
    Text,
    View,
    Alert,
    FlatList,
    Share,
    Platform
  } from 'react-native';

import BannerImg from '../../assets/banner.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails(){
    const members = [
        { 
            id: '1',
            username: 'Rógenis Silva',
            avatar_url: 'https://github.com/rogenis.png',
            status: 'online'
        },
        { 
            id: '2',
            username: 'Bruno Pedrosa',
            avatar_url: 'https://github.com/BrunoPDRS.png',
            status: 'offline'
        },
        { 
            id: '3',
            username: 'Marcos Augusto',
            avatar_url: 'https://github.com/Marcosccp04.png',
            status: 'offline'
        },
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

        <ImageBackground
            style={styles.banner}
            source={BannerImg}
        >
            <View style={styles.bannerContent}>
                <Text style={styles.title}>Lendários </Text>
                <Text style={styles.subtitle}>
                    É hoje que vamos chegar ao challenger sem perder uma partida da md10.
                </Text>
            </View>
        </ImageBackground>

        <ListHeader
            title="Jogadores"
            subtitle="Total 3"
        />

        <FlatList
            data={members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Member data={item} />
            )}
            ItemSeparatorComponent = {() => <ListDivider isCentered/>}
            style={styles.members}
        />

        <View style={styles.footer}>
            <ButtonIcon title="Entrar na partida"/>
        </View>

        </Background>
    )
}