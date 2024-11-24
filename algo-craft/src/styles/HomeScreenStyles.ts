import { StyleSheet } from 'react-native';

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  topbox: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0093D2',
  },
  middlebox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  bottombox: {
    flex: 1,
    gap: 10,
    justifyContent: 'flex-end', 
    width: '100%', 
    paddingBottom: 30,
  },
  blueButton: {
    backgroundColor: '#0093D2', // Cor azul
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15, // Espaçamento entre os botões
    alignItems: 'center', // Centraliza o texto no botão
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default homeScreenStyles;
