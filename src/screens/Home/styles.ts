import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0D0D0D',
        height: SCREEN_HEIGHT * 0.20, 
        flex: 1,
        
    },
    container: {
        backgroundColor: '#191919',
        marginTop: SCREEN_HEIGHT * 0.10,
       
        zIndex: 1,
        flex: 1,
       
        paddingLeft: 24,
        paddingRight: 24,
        
       
    },
    containerImage:{
        alignItems: 'center',
        
    },
    image: {
        marginTop: 78
    },
    form: {
            flexDirection: 'row',
            justifyContent: 'center',       
            marginTop: SCREEN_HEIGHT * (-0.030),
    },
    input : {
        backgroundColor: '#262626',
        height: 64,
        fontSize: 16,
        color: '#fff',
        width: '85%',
        borderRadius: 8,
        paddingLeft: 24,
       
        
    },
    inputSelected:{
        borderStyle: 'solid',
        borderWidth: 0.8,
        borderColor: '#8284FA',

        backgroundColor: '#262626',
        height: 64,
        fontSize: 16,
        color: '#fff',
        width: '85%',
        borderRadius: 8,
        paddingLeft: 24,
       
    },
    button:{
        backgroundColor: '#1E6F9F',
        marginLeft: 10,
        height: 64,
        width: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

        
    },
    content:{
        
        justifyContent:'space-between',
        flexDirection: 'row',
        marginTop: 32,
        width:'100%',
       
       
     
        // padding: 24,
       
    },
    contentText:{
        // fontFamily:'Inter',
        fontWeight: 'bold',
        fontSize: 20,
       
        alignItems: 'center',
       

    },
    quantity:{
        backgroundColor:'#AAAAAA',
        borderRadius: 24,
        width: 24,
        height: 19,
        marginLeft: 20,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
   
        
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#333333',
        marginTop: 20,
        marginBottom: 20,
    },
    tasksEmptyContent:{
            paddingVertical: 48,
            paddingHorizontal: 20,
            
    },
    tasksEmptyContentText:{
        color: '#808080',
        fontSize: 20,
        textAlign: 'center',
    },
    tasksEmptyContentImage:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    }
})