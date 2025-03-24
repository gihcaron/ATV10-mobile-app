import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Detalhes = ({ route, navigation }) => {
    const { inputText = 'Nenhum texto salvo', savedText = 'Nenhum texto salvo' } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.red_text}>Sem Persistência: {inputText}</Text>
            <Text style={styles.green_text}>Persistência: {savedText}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Voltar' onPress={() => navigation.goBack()} color="blue" />
            </View>
        </View>
    );
};

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

    red_text: {
        color: 'red',
        marginBottom: 10,
    },

    green_text: {
        color: 'green',
        marginBottom: 10,
    },
    
});

export default Detalhes;