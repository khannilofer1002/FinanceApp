import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Tabs from '../components/Tabs';
import people from './ContactData';
import PersonItem from '../components/PersonalItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState('All');

    const renderPersonItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                console.log('Navigating with:', item.image);
                navigation.navigate('FirstScreen', {
                    name: item.name,
                    image: item.image,
                    contact: item.contact,
                });
            }}
        >
            <PersonItem key={item.id} person={item} />

        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#000" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Send & Request</Text> <TouchableOpacity onPress={() => console.log('QR Code pressed')}>
                    <Icon name="qrcode" size={24} color="#000" style={styles.icon} />
                </TouchableOpacity>
            </View>
            {/* Serch Bar */}
            <View style={styles.searchBarContainer}>

                <TextInput
                    style={styles.searchBar}
                    placeholder="Friend Name, Business"
                />
            </View>
            {/* Tab Creation */}
            <Tabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />

            {/* Vertical Scrolling FlatList */}
            <Text style={styles.sectionTitle}>Top People</Text>
            <FlatList
                data={people.slice(0, 4)} // Display top 4 people
                renderItem={renderPersonItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                contentContainerStyle={styles.flatListContentHorizontal}
            />
            {/* Horisonal Scrolling FlatList */}
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <FlatList
                data={people}
                renderItem={renderPersonItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContent}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
    },
    icon: {
        padding: 10,
    },
    headertitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    // searchBar: {
    //     height: 60,
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     borderRadius: 30,
    //     paddingHorizontal: 10,
    //     backgroundColor: '#fff',
    // },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 16,
    },
    flatListContentHorizontal: {
        paddingHorizontal: 16,
    },
    flatListContent: {
        padding: 16,
    },
    // searchBarContainer: {
    //     padding: 10,
    //     backgroundColor: '#f5f5f5',
    //     borderRadius: 30
    // },
    searchBar: {
        height: 40,
        width: '95%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        backgroundColor: '#f0f5f1',
        marginLeft: 10
    },
});

export default HomeScreen;
