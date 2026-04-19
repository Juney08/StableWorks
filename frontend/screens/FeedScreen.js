import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { getFeed, createPost } from '../api/api';

export default function FeedScreen({ token }) {
  const [feed, setFeed] = useState([]);
  const [newPost, setNewPost] = useState('');

  const fetchFeed = async () => {
    const response = await getFeed(token);
    setFeed(response.data);
  };

  const handlePost = async () => {
    await createPost(token, newPost, 'reflection');
    setNewPost('');
    fetchFeed();
  };

  useEffect(() => { fetchFeed(); }, []);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Write something..." value={newPost} onChangeText={setNewPost} style={styles.input} />
      <Button title="Post" onPress={handlePost} />
      <FlatList
        data={feed}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.content_text}</Text>
            <Text style={styles.time}>{new Date(item.timestamp).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10 },
  post: { marginVertical: 10, padding: 10, borderWidth: 1 },
  time: { fontSize: 10, color: '#999' }
});
