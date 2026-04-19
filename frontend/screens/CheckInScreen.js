import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { checkIn } from '../api/api';

export default function CheckInScreen({ token, navigation }) {
  const [mood, setMood] = useState('');
  const [intent, setIntent] = useState('');

  const handleCheckIn = async () => {
    await checkIn(token, mood, intent);
    navigation.replace('Feed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Check-In</Text>
      <TextInput placeholder="Your mood" value={mood} onChangeText={setMood} style={styles.input} />
      <TextInput placeholder="Intent for browsing" value={intent} onChangeText={setIntent} style={styles.input} />
      <Button title="Submit" onPress={handleCheckIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10 }
});
