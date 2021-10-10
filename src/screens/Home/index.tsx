import React, { useState } from 'react';
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { Background } from '../../components/Background';
import { Appointment } from "../../components/Appointment";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from './styles'
import { ListDivider } from '../../components/ListDivider';

export function Home(){
    const [category, setCategory] = useState('')

    const navigation = useNavigation();

    const appointments = [
        { 
            id: '1',
            guild: {
                id: '1',
                name: 'Fairy Tail',
                icon: null,
                owner: true
            },
            category: '1',
            date: '06/11 ás 15:57',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10!'
        },
        { 
            id: '2',
            guild: {
                id: '1',
                name: 'Fairy Tail',
                icon: null,
                owner: false
            },
            category: '1',
            date: '06/11 ás 15:57',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10!'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
            />
            <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment
                        data={item} 
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 69 }}
            />
        </Background>
    );
}