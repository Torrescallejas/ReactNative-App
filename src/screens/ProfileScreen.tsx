import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';



const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://imgflip.com/s/meme/Cute-Cat.jpg'}} style={styles.image}/>
      <Text style={styles.text}>¡Tu perfil!</Text>
      <Button title='Iniciar Sesión'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
  image:{ 
    width: 200,
    height: 200
  }
});

export default ProfileScreen;
