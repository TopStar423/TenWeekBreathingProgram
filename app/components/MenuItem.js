import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

const MenuItem = ({ item, onPress, isActive, isDisabled }) => (
    <TouchableOpacity
        onPress={() => !isDisabled && onPress()}
        style={[styles.menu, isActive && styles.active]}
    >
        <AppText style={[styles.font, isDisabled && styles.disabled]}>{item.title}</AppText>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    menu: {
        marginVertical: 2,
        marginHorizontal: 18,
    },
    active: {
        borderBottomWidth: 3,
        borderBottomColor: '#00FFFF',
    },
    disabled: {
        opacity: 0.29,
    },
    font: {
        fontFamily: 'TruenoRg',
    }
})

export default MenuItem;