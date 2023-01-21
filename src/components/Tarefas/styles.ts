import { StyleSheet} from "react-native";


export const styles = StyleSheet.create({

    container:{
        
        marginBottom: 12,
        backgroundColor: '#262626',
        height: 64,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // opacity: 0.8,
        
    },
    containerChecked:{
        marginBottom: 12,
        backgroundColor: '#262626',
        height: 64,
        borderRadius: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        opacity: 0.8,

    },
    containerText:{
        flexDirection: 'row',
    },
    textTask:{
        color: '#fff',
        marginLeft: 12,
    },
    textTaskChecked:{
        color: '#fff',
        marginLeft: 12,
        textDecorationLine: 'line-through',

    },
    Button:{
        backgroundColor: '#1E6F9F',
        borderRadius: 999,
        width: 24,
        height: 24,
    },
    delete:{
        backgroundColor: '#456839',
        width: 24,
        height: 24,
    }
})