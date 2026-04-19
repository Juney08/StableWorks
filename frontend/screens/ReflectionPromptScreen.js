import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { getRandomPrompt, submitReflection } from '../api/api';

const API_URL = 'http://localhost:5000';

export default function ReflectionPromptScreen({ token }) {
  const [prompt, setPrompt] = useState(null);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const fetchRandomPrompt = async () => {
    setLoading(true);
    try {
      const result = await getRandomPrompt(token);
      setPrompt(result.data);
      setResponse('');
      setSubmitted(false);
    } catch (err) {
      console.error('Error fetching prompt:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitResponse = async () => {
    if (!response.trim()) {
      alert('Please write a reflection before submitting');
      return;
    }

    try {
      await submitReflection(token, prompt.id, response);
      setSubmitted(true);
      setTimeout(() => fetchRandomPrompt(), 1500);
    } catch (err) {
      console.error('Error submitting response:', err);
      alert('Failed to submit reflection');
    }
  };

  useEffect(() => { fetchRandomPrompt(); }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (submitted) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>✨ Reflection saved!</Text>
        <Text>Loading next prompt...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{prompt?.category?.toUpperCase()}</Text>
      <Text style={styles.prompt}>{prompt?.prompt_text}</Text>
      <TextInput
        placeholder="Write your reflection here..."
        value={response}
        onChangeText={setResponse}
        multiline
        numberOfLines={6}
        style={styles.input}
      />
      <Button title="Save Reflection" onPress={handleSubmitResponse} color="#4CAF50" />
      <Button title="Skip to Next Prompt" onPress={fetchRandomPrompt} color="#999" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  category: { fontSize: 12, color: '#999', marginBottom: 5 },
  prompt: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 15, textAlignVertical: 'top', height: 100 }
});
