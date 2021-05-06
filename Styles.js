import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    app:{
      backgroundColor: '#d1d1d1',
    },

    container: {
      flex: 1,
      alignItems: 'center',
      marginBottom: 30,
      justifyContent: 'center',
    },

    title:{
      fontFamily: 'Roboto',
      fontWeight: '900',
      fontSize: 35,
      marginTop: 15,
      textAlign: 'center'
    },
  
    subtitle:{
      fontFamily: 'Roboto',
      fontWeight: '900',
      textAlign:'center',
      fontSize: 30,
      margin: 20,
    },
  
    text:{
      textAlign:'center',
      margin: 20,
      fontSize:16,
      fontFamily: 'Roboto',
    },
   
    flexRow:{ 
      display:'flex',  
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,  
    },

    container: {
      flex: 1,
      alignItems: 'center',
      marginBottom: 30,
      justifyContent: 'center',
    },
  
    subtitle:{
      fontWeight: '800',
      textAlign:'center',
      fontSize: 20,
      margin: 20,
    },

    quote:{
      fontWeight: '800',
      textAlign:'center',
      fontSize: 15,
      fontStyle: 'italic',
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
    },
  
    image:{
      borderWidth:2,
      borderColor:'#000000',
      borderRadius:20,
      margin: 20,
      width: 250,
      height:250 
    },
  
});
  
export { styles }