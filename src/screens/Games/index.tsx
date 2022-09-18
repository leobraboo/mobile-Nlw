import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background';
import { useRoute } from '@react-navigation/native'

import { styles } from './styles';

export function Games() {

    const route = useRoute();
    const game = route.params;

  return (
    <Background>
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
    </Background>
  );
}