import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  // Função para interagir com a API que está na mesma pasta
  const enviarExpressao = async () => {
    try {
      const response = await fetch('http://localhost:3001/avaliar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expressao: expressao,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResultado(`Resultado: ${data.resultado}`);
      } else {
        setResultado(`Erro: ${data.mensagem}`);
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao conectar à API.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Expressões</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma expressão (ex: 3 + 2 / 5)"
        value={expressao}
        onChangeText={setExpressao}
      />

      <Button title="Calcular" onPress={enviarExpressao} />

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default App;
