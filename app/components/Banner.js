import React from 'react';
import { View, ImageBackground, StyleSheet, BackHandler } from 'react-native';
import RNExitApp from 'react-native-exit-app';

import Button from './Button';
import AppText from './AppText';

const image = require('../assets/img/banner-bg.png');

const handleAppExit = () => {
    RNExitApp.exitApp();
};

const Banner = () => (
    <ImageBackground source={image} style={styles.image} resizeMode='contain'>
        <Button type='appButton' onPress={handleAppExit} style={styles.button}>Exit</Button>
        <AppText style={styles.title}>
            10 Week Breathing Program
        </AppText>
    </ImageBackground>
);

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 375/175,
        flexDirection: 'row',
    },
    button: {
        marginTop: 32,
        marginLeft: 12,
    },
    title: {
        fontFamily: 'TruenoBd',
        fontSize: 27,
        lineHeight: 28,
        marginTop: 60,
        flex: 1,
    },
});

export default Banner;