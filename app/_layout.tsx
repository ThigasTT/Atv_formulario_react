import React,{ useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
 
export default function App(){
  //Estado para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');
 
  const mostrarResultado =()=>
    {
      if(nome && idade){
      setResultado(`Nome: ${nome}, Idade: ${idade}`);
      }else{
        setResultado("Por favor, preencha os campos");
      }
      };
 
  return(
    <View style={styles.container}>
     
      <Text style={styles.title}>Formulário de Cadastro de Funcionários</Text>
 
      <TextInput
      style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
 
      <TextInput
          style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />
 
      <Button title="Cadastro"
                  onPress={mostrarResultado}></Button>
 
      {resultado?(
      <Text>{resultado}</Text>):null}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#fff',
  },
 
  title:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom: 10,
  },
  input:{
    height: 40,
    borderColor:'#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius:5,
  },
  resultado:{
    marginTop: 20,
    fontSize: 18,
    color:'#333',
    textAlign:'center',
  }
 
})