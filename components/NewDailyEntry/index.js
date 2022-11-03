import React, {Component} from 'react';
import { Text, View, ImageBackground, StackNavigator, Button, TextInput} from 'react-native';
import styles from './styles.js';
import StyledButton from '../StyledButton/index.js';
import { NavigationContainer } from '@react-navigation/native';


const NewDailyEntry = ({navigation}) => {
  return (
    <View style={styles.backgroundContainer}> 
    <ImageBackground style={styles.image} />
    
    <View style={styles.titles}>
    <Text style={styles.title}>Welcome, Dr. Tsui!</Text>
    </View>

    </View>

);
};

export default NewDailyEntry;