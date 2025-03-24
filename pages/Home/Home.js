import React, { useEffect, useState } from 'react';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Home ({navigation}) {
    
    const [inputText, setInputText] = useState('');
    const [savedText, setSavedText] = useState('Nenhum texto salvo');

    useEffect(() => {
        const loadPersistedText = async () => {
            const savedText = await AsyncStorage.getItem('savedText');
            if (savedText) setSavedText(savedText);
        };
        loadPersistedText();
    }, []);

    const saveText = async () => {
        await AsyncStorage.setItem('savedText', inputText);
        setSavedText(inputText);
    };
    
    const clearText = async () => {
        await AsyncStorage.removeItem('savedText');
        setSavedText('Nenhum texto salvo');
        setInputText('');
    };

    return (
        <View style={styles.container}>

        <Text style={styles.title}> Persistência e Navegação </Text>
        <TextInput style={styles.input}
        placeholder='Digite algo'
        value={inputText}
        onChangeText={setInputText}/>

       <Text style={styles.red_Text}>Sem Persistência: {inputText || 'Nenhum texto salvo'}</Text>
       <Text style={styles.green_Text}>Texto persistido: {savedText}</Text>

        <View style={styles.buttonContainer}>
        <Button title='Salvar'
        onPress={saveText}
        color="blue"/>
        </View>

        <View style={styles.buttonContainer}>
        <Button title='Limpar' 
        onPress={clearText}
        color="blue"/>
        </View>

        <View style={styles.buttonContainer}>
            <Button 
            title='Detalhes'
            onPress={() => navigation.navigate('Detalhes', { inputText, savedText })}
            color={'blue'}
            />
        </View>

        </View>
    );
}

    const styles = StyleSheet.create({
        
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },

        title: {
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            margin: 10,
        },

        input: {
            borderColor: 'gray',
            borderWidth: 1,
            width: '80%',
            marginBottom: 10,
            backgroundColor: 'white',
        },

        red_Text: {
            color: 'red',
            marginBottom: 10,
        },

        green_Text: {
            color: 'green',
            marginBottom: 10,
        },

        buttonContainer: {
            width: '80%',
            marginBottom: 10,
        },
    });
