import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {peso: '', altura: '', info: '', resultado: 0.0}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
  
  calculaIMC(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if(s.resultado < 18.5){
      s.info ='Está menor que 18,5, seu quadro é de: Magreza'
    }
    else if (s.resultado < 24.9){
     s.info ='Está entre 18,5 e 24,9, seu quadro é: Normal'
    }
    else if (s.resultado < 29.9){
     s.info ='Está entre 25,0 e 29,9, você está com: Sobrepeso'
    }
    else if (s.resultado < 39.9) {
     s.info ='Está entre 30,0 e 39,9, tome cuidado, você está com: Obesidade'
    }
    else if (s.resultado > 39.9) {
     s.info ='Está maior que 40,0, tome cuidado, você está com: Obesidade Grave'
    }
    this.setState(s)
  }

  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: 0.0,
      info: ''
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <Text style={styles.text}>Altura (M)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder='Exemplo: 1.75'
          keyboardType={'numeric'}
        />
        <Text style={styles.text}>Peso (KG)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='Exemplo: 68.8'
          keyboardType={'numeric'}
        />
        <Separator />
        <Text style={styles.input}>
         Seu IMC é: {this.state.resultado.toFixed(2)}
        </Text>
        <Text style={styles.input}>{this.state.info}</Text>
        <View style={styles.btnview}>
        <Button
          onPress={this.calculaIMC}
          title='Calcular'
          color='#1F5EAF'
          accessibilityLabel='Clique aqui para calcular seu IMC'
        />
        </View>
        <Separator />
        <View style={styles.btnview}>
        <Button
          onPress={this.clear}
          title='Limpar'
          color='#DC4500'
          accessibilityLabel='Botão para limpar os valores'
        />
        </View>
        <Separator />
      </View>
    );
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#292C35',
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    marginVertical: 30,
    fontFamily: 'helvetica',
    color: 'white',
    paddingBottom: 100,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 100,
    fontSize: 18,
    fontFamily: 'helvetica',
    color: 'white',
  },
  text: {
    marginLeft: 18,
    fontFamily: 'helvetica',
    color: 'white',
  },
  separator: {
    marginVertical: 8,
  },
  textInput: {
    color: 'white',
    height: 50,
    borderWidth: 1,
    borderColor: '#e5e5e5e5',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 10
  },
  btnview: {
    marginLeft: 10,
    marginRight: 10,
  }
});