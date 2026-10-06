import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const [prenda, setPrenda] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [armario, setArmario] = useState([]);

  const agregarPrenda = () => {
    if (prenda && ubicacion) {
      setArmario([...armario, { id: Date.now().toString(), prenda, ubicacion }]);
      setPrenda('');
      setUbicacion('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>MyOutfit 👕</Text>
      
      <View style={styles.formulario}>
        <TextInput 
          style={styles.input} 
          placeholder="Prenda (ej. Camiseta Negra)" 
          placeholderTextColor="#888"
          value={prenda} 
          onChangeText={setPrenda} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Ubicación (ej. Cajón 2)" 
          placeholderTextColor="#888"
          value={ubicacion} 
          onChangeText={setUbicacion} 
        />
        <TouchableOpacity style={styles.boton} onPress={agregarPrenda}>
          <Text style={styles.textoBoton}>Guardar en Armario</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={armario}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={styles.textoPrenda}>{item.prenda}</Text>
            <Text style={styles.textoUbicacion}>📍 {item.ubicacion}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 50 },
  titulo: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  formulario: { marginBottom: 20 },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#ddd', color: '#000' },
  boton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBoton: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  tarjeta: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: '#007AFF' },
  textoPrenda: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  textoUbicacion: { color: '#666', marginTop: 4 }
});
