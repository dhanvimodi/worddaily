import React, {useEffect, useState} from 'react';
import { View , Button} from 'react-native';
import WordCard from '../components/WordCard';
import styles from '../styles/DailyWordScreen';


const DailyWordScreen = (props) => {

    const [data, setData] = useState(props.route.params.data);

        return(
        <View style={styles.container}>
            <WordCard data={data}/>
        </View>
    )
}

export default React.memo(DailyWordScreen);