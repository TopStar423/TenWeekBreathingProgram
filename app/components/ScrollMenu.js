import React, {useEffect, useRef, useState} from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import MenuItem from './MenuItem';
import { MENU } from '../constants/menu';

const ScrollMenu = ({ pageId, lastPageId, selectWeek }) => {
    const flatList = useRef(null);
    const [isPressed, setPressed] = useState(false);
    const [viewableInfo, setViewableInfo] = useState({});


    useEffect(() => {
        const { viewableItems } = viewableInfo;

        if (pageId === undefined || !viewableItems || !flatList) return;

        if (isPressed === false
            && !(viewableItems.find(item => item.index === pageId + 1))) {
            flatList.current.scrollToIndex({
                index: pageId + 1,
                viewPosition: 1,
            });
        }
        if (isPressed === true) {
            setPressed(false);
        }
    }, [pageId, flatList]);

    const renderItem = ({ item }) => (
        <MenuItem
            item={item}
            onPress={() => {item.id <= lastPageId + 1 && (
                selectWeek(item.id - 1),
                setPressed(true)
            )}}
            isActive={item.id === pageId + 1}
            isDisabled={item.id > lastPageId + 1}
        />
    );

    return (
        <SafeAreaView>
            <FlatList
                ref={flatList}
                onViewableItemsChanged={setViewableInfo}
                data={MENU}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal
            />
        </SafeAreaView>
    )
}

export default ScrollMenu;