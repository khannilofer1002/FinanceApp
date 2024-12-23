import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PersonItem = ({ person }) => {
    return (
        <View style={styles.personItemContainer}>
            <Image source={person.image} style={styles.personImage} />
            <View style={styles.personDetails}>
                <Text style={styles.personName}>{person.name}</Text>
                <Text style={styles.personContact}>{person.contact}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    personItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    personImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    personDetails: {
        flex: 1,
    },
    personName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    personContact: {
        fontSize: 14,
        color: '#6c757d',
    },
});

export default PersonItem;
