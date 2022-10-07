import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  },
  header :{
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal:32,
    marginTop:28,
    justifyContent: 'space-between'
  },
  // logo:{
  //   width: 180,
  //   height: 100,
  //   marginTop: 24,
  //   flex:1,
  //   alignItems: 'center'

  // },
  right:{
    width: 20,
    height: 20
  },
  cover:{
    padding: 10 ,
    width: 311,
    height: 120,
    borderRadius: 32
  },
  covernot:{
    width: 200,
    height: 100,
    borderRadius: 60,
    alignItems: "center"
  },
  containerList:{
    width:'100%',

  },
  contentList:{

    paddingLeft:32,
    paddingRight:64,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start'
  },
  emptyText:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    
  },
  emptyContent:{
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center'
  }
});