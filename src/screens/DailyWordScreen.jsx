import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import mockData from "../../mockData/mockData.json"
import WordList from '../components/WordList';
import styles from '../styles/DailyWordScreen';


const DailyWordScreen = props => {
    const [data, setData] = useState(props.route.params.data);

    const renderItem = ({ item, index }) => {
        return <WordList data={item} />;
      };

    return(
        <View style={styles.container}>
            <WordList data={data}/>
        </View>
    )
}

export default DailyWordScreen;