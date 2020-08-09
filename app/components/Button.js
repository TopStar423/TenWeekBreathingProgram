import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

const Button = ({ type, status, onPress, style={}, children, ...props }) => {
    const handleOnPress = () => status !== 'disabled' && onPress();

    return (
        <TouchableOpacity style={[styles[type], styles[status], style]} onPress={handleOnPress}>
            <AppText style={[styles[type + 'Text'], status === 'normal' && styles.normalButtonFont]}>{children}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    appButton: {
        height: 28,
        borderRadius: 14,
        paddingHorizontal: 18,
        backgroundColor: 'rgba(0, 0, 0, .61)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageButton: {
        width: '100%',
        height: 53,
        borderRadius: 26.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    normal: {
        backgroundColor: '#fff',
        marginTop: 25,
    },
    active: {
        backgroundColor: '#6C49FF',
    },
    disabled: {
        backgroundColor: '#454450',
    },
    appButtonText: {
        fontFamily: 'TruenoRg',
        fontSize: 14,
    },
    pageButtonText: {
        fontFamily: 'TruenoRg',
        fontSize: 14,
        textTransform: 'uppercase',
    },
    normalButtonFont: {
        color: '#000',
    },
});

export default Button;