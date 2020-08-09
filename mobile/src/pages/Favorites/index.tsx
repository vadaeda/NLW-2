import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import TeacherItem, { iTeacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [favorites])
    );

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }



    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: iTeacher) =>
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                    />)}
            </ScrollView>

        </View>
    );
}

export default Favorites;