import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const SendMoneyScreen = () => {
    return (
        < View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.cancelButton}>Cancel</Text>
                <Text style={styles.title}>Send & Request</Text>
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/70' }} // Replace with Bruno Fernandes' image link
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Bruno Fernandes</Text>
            </View>

            {/* Input Section */}
            <View style={styles.inputSection}>
                <Text style={styles.currencyText}>Rs</Text>
                <TextInput
                    style={styles.amountInput}
                    placeholder="5000"
                    placeholderTextColor="#000"
                    keyboardType="numeric"
                />
                <Text style={styles.currencyLabel}>USD</Text>
            </View>

            {/* Message Input */}
            <TextInput
                style={styles.messageInput}
                placeholder="Hallo, Thanks for your progress today!"
                placeholderTextColor="#666"
            />

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.requestButton}>
                    <Text style={styles.buttonText}>Request</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FB',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cancelButton: {
        color: '#FF4D6D',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        marginRight: 50, // Align title centrally
    },
    profileSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    currencyText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10,
    },
    amountInput: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
        borderBottomWidth: 2,
        borderBottomColor: '#DDD',
        width: 120,
        textAlign: 'center',
    },
    currencyLabel: {
        fontSize: 18,
        marginLeft: 10,
        color: '#AAA',
    },
    messageInput: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    requestButton: {
        backgroundColor: '#DDD6FF',
        padding: 15,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    sendButton: {
        backgroundColor: '#120E43',
        padding: 15,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default SendMoneyScreen;
