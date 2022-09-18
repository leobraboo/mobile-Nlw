import { View ,Text , ColorValue } from 'react-native';

import { styles } from './styles';

interface Props {
    label: string;
    value: string;
    colorValue?: ColorValue;
}


export function DuoInfo({ label , value , colorValue }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label} >
            {label}
        </Text>

        <Text style={styles.value} >
            {value}
        </Text>

    </View>
  );
}