import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TransactionDetails from '../components/TransactionDetails';

const SecondScreen = ({ navigation, route }) => {
    const { amount, message, recipientData } = route.params;
    const handleHome = () => {
        navigation.navigate('HomeScreen');
        console.log("hello");
    };
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Send Money</Text>
            </View>

            {/* Transaction Details */}
            <View style={styles.content}>
                <TransactionDetails amount={amount} message={message} recipient={recipientData} />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
                    <Text style={styles.homeButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80,
    },
    content: {
        flex: 1, // Adjust the size of the content area
        overflow: 'hidden', // Prevent content overflow
    },
    footer: {
        alignItems: 'center',
        paddingTop: 10,
    },
    homeButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
        marginTop: 5
    },
    homeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SecondScreen;
