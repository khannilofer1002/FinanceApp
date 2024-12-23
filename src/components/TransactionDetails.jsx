import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const TransactionDetails = ({ amount, message, recipient }) => {
    return (
        <View style={styles.container}>

            {/* Success Icon */} <View style={styles.successIconContainer}>
                <Icon name="check" size={80} color="#007BFF" style={styles.successIcon} />
            </View>

            {/* Success Message */}
            <Text style={styles.successMessage}>Transaction Success!</Text>
            <Text style={styles.successDescription}>
                Your money has been successfully sent to {recipient.name}
            </Text>

            {/* Amount */}
            <Text style={styles.amount}>Rs {amount}</Text>

            {/* Notes Section */}
            <Text style={styles.notesTitle}>Notes</Text>
            <Text style={styles.notesText}>{message}</Text>

            {/* Recipient Details */}
            <Text style={styles.notesTitle}>Recipient</Text>
            <View style={styles.recipientContainer}>
                <Image
                    source={recipient.image} // Placeholder for profile picture
                    style={styles.recipientImage}
                />
                <View style={styles.recipientDetails}>
                    <Text style={styles.recipientName}>{recipient.name}es</Text>
                    <Text style={styles.recipientContact}>{recipient.contact}</Text>
                </View>
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.shareButton}>
                <Icon name="facebook" size={20} color="#1877F2" style={styles.icon} />
                <Text style={styles.shareButtonText}>Share to Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    successIconContainer: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10
    },
    successIcon: {
        width: 80,
        height: 100,
        backgroundColor: 'white',
    },
    successMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    successDescription: {
        fontSize: 16,
        textAlign: 'center',
        color: '#6c757d',
        marginBottom: 20,
    },
    amount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 20,
    },
    notesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    notesText: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    recipientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#007BFF',
        width: '100%',
    },
    recipientImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    recipientDetails: {
        flex: 1,
    },
    recipientName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    recipientContact: {
        fontSize: 14,
        color: '#6c757d',
    },
    shareButton: {
        flexDirection: 'row', // Align icon and text horizontally
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 15,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center', // Center both icon and text
        marginBottom: 10,
    },
    icon: {
        marginRight: 10, // Add some space between the icon and text
    },
    shareButtonText: {
        color: '#1877F2',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default TransactionDetails;