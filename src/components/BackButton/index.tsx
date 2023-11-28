import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from "@expo/vector-icons/build/Feather";
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const BackButton = () => {
    const { goBack } = useNavigation()
   function handleGoBack() {
    goBack();
    }
    return (
        <TouchableOpacity style={styles.BackButton} onPress={handleGoBack}>
            <Feather name='chevron-left' size={24} color='#fff' />
        </TouchableOpacity>
    )
}
