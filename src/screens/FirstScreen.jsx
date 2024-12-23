import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { Platform } from 'react-native';


const FirstScreen = ({ navigation, route }) => {
    const { name, image, contact } = route.params;
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('Hallo, Thanks for your progress today!');

    const handleSend = () => {
        navigation.navigate('SecondScreen', {
            recipientData: { name, image, contact },
            amount,
            message,
        });
        console.log("hello");
    };
    const handleHome = () => {
        navigation.navigate('HomeScreen');
        console.log("hello");
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleHome}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Send & Request</Text>
            </View>
            {/* Profile Image */}
            <View style={styles.profileContainer}>
                <Image
                    source={route.params.image} // Replace with your image URL
                    style={styles.profileImage}
                />

            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <View style={styles.amountContainer}>
                    <Text style={styles.currencyText}>Rs</Text>
                    <TextInput
                        style={styles.amountInput}
                        placeholder="5000"
                        placeholderTextColor="#000"
                        keyboardType="numeric" // Brings up numeric keyboard
                        value={amount}
                        onChangeText={setAmount}
                    />
                    <Text style={styles.currencyText}>USD</Text>
                </View>

                <TextInput
                    style={styles.notesInput}
                    placeholder="Hallo, Thanks for your progress today!"
                    placeholderTextColor="#9CA3AF"
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.requestButton}>
                        <Text style={styles.requestButtonText}>Request</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sendButton} onPress={handleSend} >
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEDED",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    cancelText: {
        color: "#FF3B30",
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
        marginRight: 30, // Adjust alignment for spacing
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    nameText: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 24,
    },
    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    currencyText: {
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 8,
    },
    amountInput: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#000",
        borderBottomWidth: 1,
        borderBottomColor: "#D1D5DB",
        textAlign: "center",
        minWidth: 120,
    },
    notesInput: {
        backgroundColor: "#F3F4F6",
        borderRadius: 8,
        padding: 12,
        width: "100%",
        fontSize: 16,
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    requestButton: {
        flex: 1,
        backgroundColor: "#E5E7EB",
        padding: 16,
        borderRadius: 8,
        marginRight: 8,
        alignItems: "center",
    },
    requestButtonText: {
        color: "#6B7280",
        fontWeight: "bold",
    },
    sendButton: {
        flex: 1,
        backgroundColor: "#4B5563",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    sendButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35, // Makes the image circular
        marginBottom: 10,
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 20,
        marginBottom: 70
    },
});
export default FirstScreen;