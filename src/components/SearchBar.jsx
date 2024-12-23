import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.searchBar}
                placeholder="Friend Name, Business"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default SearchBar;
