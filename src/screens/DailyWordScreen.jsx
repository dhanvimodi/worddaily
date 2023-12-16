import React, {useEffect, useState} from 'react';
import { View , Button, Alert, BackHandler} from 'react-native';
import { useNavigation, useNavigationState, CommonActions,useFocusEffect } from '@react-navigation/native';
import WordCard from '../components/WordCard';
import styles from '../styles/DailyWordScreen';


const DailyWordScreen = (props) => {

    console.log("DailyWordScreen")
    const previousScreen=usePreviousRouteName()
    function usePreviousRouteName() {
      return useNavigationState(state =>
        state.routes[state.index - 1]?.name
          ? state.routes[state.index - 1].name
          : 'None'
      );
    }

    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        console.log('back press');
        if (previousScreen === 'None') {
          console.log('Navigating to home screen');
          props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            })
          );
          return true; // Prevent default behavior (app exit)
        }
        return false; // Allow default behavior (app exit)
      });
  
      return () => backHandler.remove(); // Cleanup the event listener when component unmounts
    }, [props.navigation]);

    const [data, setData] = useState(props.route.params.data);

        return(
        <View style={styles.container}>
            <WordCard data={data}/>
        </View>
    )
}

export default React.memo(DailyWordScreen);