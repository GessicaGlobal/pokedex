import pikachu from '../../assets/img/pikachu.png'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

const RotatingImage = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 30);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.wrapperIcon}>
      <Image style={[styles.pikapika, { transform: [{ rotate: `${rotation}deg` }] }]} source={pikachu} />
    </View>
  );
};

export function Welcome() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  function handleNavigation() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <RotatingImage />
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.subTitle}>Encontre todos os pokémons em um só lugar</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={[styles.button]} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}