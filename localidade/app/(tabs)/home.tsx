import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import {useRouter} from 'expo-router'

//fonte 
import {useFonts, Urbanist_400Regular, Urbanist_700Bold} from '@expo-google-fonts/urbanist'
export default function Home(){
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Urbanist_400Regular,
        Urbanist_700Bold
    })

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}> Página principal</Text>
        <TouchableOpacity style={styles.botao} 
        onPress={()=> router.push('/localidade')}>
              <Text style={styles.textbotao}> Entrar</Text>

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
        fontSize:40,
        textAlign:'left',
        fontFamily: 'Urbanist',
    },
    botao:{
        backgroundColor: '#8790E4',
        paddingVertical: 20,
        paddingHorizontal:80,
        borderRadius:10,

    },
    textbotao:{
        color:'#fff',
        fontSize:20,
        textAlign: 'center',        
    }
})