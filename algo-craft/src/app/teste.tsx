import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  // Função para gerar os itens ondulados
  const renderWavyItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push(
        <View
          key={i}
          style={[
            styles.item,
            {
              marginTop: i % 2 === 0 ? 30 : -30, // Define a ondulação
              backgroundColor: i % 2 === 0 ? '#6a5acd' : '#ff6347', // Alterna as cores
            },
          ]}>
          <Text style={styles.text}>Item {i + 1}</Text>
        </View>
      );
    }
    return items;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {renderWavyItems()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
