import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [interests, setInterests] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    const handleSave = () => {
        // Logic to save user profile information goes here.
        alert('Profile updated!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>User Profile</Text>
            <TextInput
                style={styles.input}
                value={bio}
                onChangeText={setBio}
                placeholder="Bio"
                multiline
            />
            <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="Location"
            />
            <TextInput
                style={styles.input}
                value={interests}
                onChangeText={setInterests}
                placeholder="Interests"
            />
            <View style={styles.switchContainer}>
                <Text>Public Profile</Text>
                <Switch
                    value={isPublic}
                    onValueChange={setIsPublic}
                />
            </View>
            <Button title="Save Profile" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default UserProfileScreen;