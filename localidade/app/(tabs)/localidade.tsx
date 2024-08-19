import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

//fonte 
import {useFonts, Urbanist_400Regular, Urbanist_700Bold} from '@expo-google-fonts/urbanist'

export default function Localidade(){
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Urbanist_400Regular,
        Urbanist_700Bold
    })
 
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}> Página Localidade</Text>
        <TouchableOpacity style={styles.botao}
        onPress={() => router.push('/home')}>
        <Text style={styles.textobotao}> Voltar </Text>
        </TouchableOpacity>
    </View>
    )
   
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        titulo: {
            fontSize: 40,
            textAlign: 'left',
            fontFamily: 'Urbanist',
        },
        botao: {
            backgroundColor: '#4169E1',
            paddingVertical: 20,
            paddingHorizontal: 80,
            borderRadius: 10,
        },
        textobotao: {
            color: '#FFF',
            fontSize: 20,
            textAlign: 'center',
        },
    })