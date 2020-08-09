import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Banner from '../components/Banner';
import Page from './Page';

const MainPage = () => (
    <SafeAreaView style={styles.container}>
        <Banner />
        <Page />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161524',
    }
});

export default MainPage;
