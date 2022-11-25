import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
 return (
   <View style={styles.container}>
        <Text style={styles.texto}>Seja Bem Vindo</Text>

        <View>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Mongaguá")}>
                <Text style={styles.txtBotao}>Mongaguá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Itanhaém")}>
                <Text style={styles.txtBotao}>Itanhaém</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Peruíbe")}>
                <Text style={styles.txtBotao}>Peruíbe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Iguape")}>
                <Text style={styles.txtBotao}>Iguape</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Ilha Comprida")}>
                <Text style={styles.txtBotao}>Ilha Comprida</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    texto: {
        fontSize: 30,
        textAlign: 'center'
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#000',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 10
    },
    txtBotao: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center'
    }
})