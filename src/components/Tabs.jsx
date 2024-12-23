import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tabs = ({ selectedTab, onSelectTab }) => {
    return (
        <View style={styles.tabsContainer}>
            {['All', 'Local', 'International'].map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.tab,
                        selectedTab === tab ? styles.selectedTab : null
                    ]}
                    onPress={() => onSelectTab(tab)}
                >
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'flex-start',

    },
    tab: {
        padding: 10,
        backgroundColor: "#f0f5f1",
        borderRadius: 30,
        marginLeft: 20
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#007BFF',
        backgroundColor: '#dde3eb'
    },
    tabText: {
        fontSize: 16,
        color: '#007BFF',
    },
});

export default Tabs;
