import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
    restartProgram,
    finishProgram,
    goNextWeek,
    selectWeek,
    updateWeek,
} from '../actions';

import ScrollMenu from '../components/ScrollMenu';
import PageContent from './PageContent';

import { pageContents } from '../constants/pageContents';

const Page = () => {
    const dispatch = useDispatch();
    const programState = useSelector(state => state)
    const { pageId, lastPageId } = programState;

    return (
        <View style={styles.container}>
            <ScrollMenu
                pageId={pageId}
                lastPageId={lastPageId}
                selectWeek={pageId => dispatch(selectWeek(pageId))}
            />
            <PageContent
                programState={programState}
                content={pageId === -1 ? pageContents.intro : pageContents.week[pageId]}
                restartProgram={() => dispatch(restartProgram())}
                finishProgram={() => dispatch(finishProgram())}
                goNextWeek={() => dispatch(goNextWeek())}
                updateWeek={newProgramIdx => dispatch(updateWeek(newProgramIdx))}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161524',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        marginTop: -26,
        paddingTop: 26,
    },
});

export default Page;