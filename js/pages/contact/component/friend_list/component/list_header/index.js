import React from 'react'
import { View, Text } from 'react-native'
import Search from './component/search'
import FeatureList from './component/feature_list'
export default ListHeader = (props) => {
    return (
        <View>
            <Search />
            <FeatureList />
        </View>
    )
}