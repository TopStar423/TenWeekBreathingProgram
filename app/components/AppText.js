import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = ({ style={}, children, ...props }) => (
    <Text {...props} style={[styles.defaultFont, style]}>
        {children}
    </Text>
);

const styles = StyleSheet.create({
    defaultFont: {
        fontSize: 16,
        color: '#fff',
    }
})

export default AppText;