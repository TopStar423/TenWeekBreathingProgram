import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

import AppText from '../components/AppText';
import Button from '../components/Button';

import { weekLength } from '../constants/menu';
import { orderItemLink } from '../constants/amazon';

const renderIntroPage = (content, goNextWeek)  => (
    <View style={styles.container}>
        <View>
            <AppText style={styles.introTitle}>{content.title}</AppText>
            <AppText style={styles.description}>{content.description}</AppText>
        </View>
        <View style={styles.introButtonContainer}>
            <Button type='pageButton' status='active' onPress={() => goNextWeek()}>
                Begin Program
            </Button>
            <Button type='pageButton' status='normal' onPress={() => Linking.openURL(orderItemLink)}>
                Order on Amazon
            </Button>
        </View>
    </View>
);

const renderWeekPage = (programState, content, goNextWeek, restartProgram, finishProgram, updateWeek) => {
    const { pageId, lastPageId, currentStatus, completed } = programState;

    const handleProgramCheck = idx => {
        if ( pageId !== lastPageId ) return;
        if (currentStatus.findIndex(item => item === idx) !== -1) return;
        updateWeek(idx);
    };

    const isChecked = idx => {
        if (pageId < lastPageId) return true;
        return currentStatus.findIndex(item => item === idx) !== -1
    };

    const handleButtonClick = buttonActionType => {
        switch (buttonActionType) {
            case 'restart':
                restartProgram();
                break;
            case 'finish':
                finishProgram();
                break;
            case 'unlock':
                goNextWeek();
                break;
            default:
                break;
        }
    };

    const renderButton = () => {
        const isActive = pageId < lastPageId || currentStatus.length === content.programs.length;
        let buttonText = '';
        let buttonActionType = '';

        if (pageId < lastPageId) {
            buttonText = 'Restart Program';
            buttonActionType = 'restart';
        } else {
            if (pageId === weekLength - 1) {
                buttonText = 'Finish Program';
                buttonActionType = 'finish';
            } else {
                buttonText = `Unlock Week ${pageId + 2}`;
                buttonActionType = 'unlock';
            }
        }

        return (
            <Button
                type='pageButton'
                status={isActive ? 'active' : 'disabled'}
                onPress={() => isActive && handleButtonClick(buttonActionType)}
            >
                {buttonText}
            </Button>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <AppText style={styles.description}>{content.description}</AppText>
                <View style={styles.programList}>
                    {content.programs.map((program, idx) => (
                        <CheckBox
                            key={idx}
                            title={
                                <AppText style={[styles.description, styles.checkboxText, isChecked(idx) && styles.checkedDescription]}>
                                    {program}
                                </AppText>
                            }
                            containerStyle={styles.checkBoxContainer}
                            size={32}
                            checked={isChecked(idx)}
                            checkedIcon='square'
                            checkedColor='rgba(255, 255, 255, 0.2)'
                            onPress={() => handleProgramCheck(idx)}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.weekButtonContainer}>
                {pageId === 9 && completed && (
                    <AppText style={styles.congrats}>
                        Congrats!
                    </AppText>
                )}
                {renderButton()}
            </View>
        </View>
    )
}

const PageContent = ({ programState, content, ...props }) => {
    const { goNextWeek, restartProgram, finishProgram, updateWeek } = props;
    const { pageId } = programState;

    return (
        <>
            { pageId === -1 ?
                renderIntroPage(content, goNextWeek) :
                renderWeekPage(programState, content, goNextWeek, restartProgram, finishProgram, updateWeek)
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 57,
        paddingHorizontal: 20,
    },
    introButtonContainer: {
        width: '70%',
        marginHorizontal: 'auto',
    },
    weekButtonContainer: {
        width: '60%',
        marginHorizontal: 'auto',
    },
    introTitle: {
        fontFamily: 'TruenoBd',
        fontSize: 16,
        marginBottom: 35,
    },
    description: {
        fontFamily: 'TruenoRg',
        fontSize: 14,
    },
    checkboxText: {
        marginLeft: 15,
    },
    checkedDescription: {
        textDecorationLine: 'line-through',
        color: 'rgba(255, 255, 255, .29)',
    },
    programList: {
        marginTop: 25,
        marginLeft: -20,
    },
    checkBoxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        justifyContent: 'flex-start',
    },
    congrats: {
        fontFamily: 'TruenoExBd',
        fontSize: 36,
        marginBottom: 45,
        textAlign: 'center',
    }
});

export default PageContent;