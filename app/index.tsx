import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { Link } from "expo-router";
import { color } from 'react-native-reanimated';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo a Home</Text>
      <Image></Image>
      <TouchableOpacity style= {styles.telaA}> 
      <Text style={styles.bottomtxt}> <Link href="/telaA">Tela A</Link> </Text>
      
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  titulo:{
    fontSize: 26,
    fontWeight: 'bold'
  },
  telaA:{
    backgroundColor: '#1967D2',
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    alignContent:'center'
  },
  bottomtxt:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent:'center'
  },
  
  
});
