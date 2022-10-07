import { useEffect , useState  } from 'react';
import { FlatList , View , TouchableOpacity , Image , Text  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute , useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'
import adImg from '../../assets/games/game-1.png'

import { THEME } from '../../theme';
import { styles } from './styles';

import { GameParams } from '../../@types/navegation';

import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';
import { DuoCard , DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';



export function Game() {


    const [duos , setDuos] = useState<DuoCardProps[]>([])
    const [ discordDuoSelected , setDiscordDuoSelected ] = useState (''); 
    
    const navegation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    function handleBack (){
        navegation.goBack();
    }

    async function getDiscordUser(adsId: any){
        fetch(`http://192.168.2.108:3333/ads/${adsId.id}/discord`)
        .then(response => response.json())
        .then(data => setDiscordDuoSelected(data.discord))

    }

    useEffect(() => {
        fetch(`http://192.168.2.108:3333/games/${game.id}/ads`)
        .then(response => response.json())
        .then(data => setDuos(data))
      }, []);
    

  return (
    <Background>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                <Entypo
                name='chevron-thin-left'
                color={THEME.COLORS.CAPTION_300}
                size={20}
                />

                </TouchableOpacity>

                {/* <Image
                source={ logoImg }
                style={styles.logo}
                /> */}

            </View >


            <Image
                source={{ uri: game.bannerUrl}}
                style={styles.cover}
                resizeMode='center'
            />

            <Heading
            title={game.title}
            subtitle="Conecte-se e comece a jogar"
            />
            

            <FlatList
                data={duos}
                keyExtractor={item => item.id}
                renderItem={( {item} ) =>(
                    <DuoCard
                     data={item}
                     onConnect={() => getDiscordUser(item.id)}
                     />
                
            )}
            horizontal
            style={styles.containerList}
            contentContainerStyle={[ duos.length > 0 ?  styles.contentList : styles.emptyContent] }
            showsHorizontalScrollIndicator
            ListEmptyComponent= {() => (
                <Text style={styles.emptyText} >
                        Não há anúncios para esse jogo 
                {/* <Image
                    source={ adImg }
                    style={styles.covernot}
                    resizeMode='cover'
                /> */}
                </Text>
            )}
            />
            <DuoMatch 
            visible={discordDuoSelected.length > 0 }
            discord={discordDuoSelected}
            onclose={() => setDiscordDuoSelected('')}
            />
        </SafeAreaView>
    </Background>
  );
}