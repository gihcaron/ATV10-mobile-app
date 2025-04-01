import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { icons, Ionicons } from "@expo/vector-icons";

export default function Perfil() {
return (
    <View style={styles.container}>
        <Text style={styles.title}> Giovanna Caron 🎀</Text>
        <Text style={styles.description}>
           Olá, eu sou a Giovanna Caron, estudante do 3o semestre do curso Analise e Desenvolvimento de Sistemas no SENAI de Valinhos. Confira abaixo, algumas das minhas habilidades :
        </Text>

        <Image
            source={{ uri: "https://avatars.githubusercontent.com/u/158209996?v=4" }}
            style={styles.profileImage}
        />
        
        <View style={styles.iconContainer}>
            <View style={styles.iconRow}>
                <Ionicons name="logo-html5" size={40} color="orange" />
                <Ionicons name="logo-github" size={40} color="black" />
                <Ionicons name="logo-python" size={40} color="blue" />
                <Ionicons name="logo-figma" size={40} />
            </View>
            <View style={styles.iconRow}>
                <Ionicons name="logo-css3" size={40} color="blue" />
                <Ionicons name="logo-javascript" size={40} color="yellow" />
                <Ionicons name="logo-react" size={40} color="cyan" />
            </View>

        </View>
    </View>
);
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5FCFF',
    },

    title: {
        fontSize: 23,
        fontWeight: '600',
        textAlign: 'center',
        margin: 10,
    },

    description: {
        fontSize: 13,
        textAlign: 'center',
        margin: 10,
    },

    profileImage: {
        width: 300,
        height: 180,
        borderRadius: 10,
        marginBottom: 20,
    },

    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    iconR:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});