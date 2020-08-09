import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import giveClasssesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
function GiveClasses(){

    const { goBack } = useNavigation();

    function handleNavigationBack(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={giveClasssesBgImage}
                style={styles.content}
                resizeMode='contain'
            >

                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar você precisa primeiro se cadastrar na nossa plataforma web
                </Text>

            </ImageBackground>
            
            <RectButton 
                style={styles.okButton}
                onPress={handleNavigationBack}
            >
                    <Text style={styles.okButtonText}>Tudo bem</Text>
                </RectButton>
        </View>
    );
}

export default GiveClasses;