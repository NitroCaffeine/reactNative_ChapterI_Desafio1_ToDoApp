import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Feather, AntDesign} from '@expo/vector-icons'; 
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/TasksController";


type Tasks = {
    tarefadescription: string;
    checked: boolean;
}

interface TarefasProps {
    tasks: Tasks,
    onRemove: (name:string) => void;
    onUpdate: (tarefa: Tasks) => void;
}


export function Tarefas({tasks, onRemove, onUpdate}: TarefasProps) {

    const [tarefa, setTarefa] = useState<Tasks>(tasks)
    const {concluded, setConcluded} = useContext(Context)

  
    useEffect(() => {
        setTarefa(tarefa)   

    }, [tarefa])

    function UpdateTask(tarefaAtualizada: Tasks){

        onUpdate(tarefaAtualizada)
        
        setTarefa({...tarefaAtualizada, checked: !tarefaAtualizada.checked})

    }
     
    
    
    return(
        
        <View style={tarefa.checked? styles.containerChecked : styles.container}>
            {tarefa.checked? 
            
            <View style={styles.containerText}>
                <TouchableOpacity><AntDesign name="checkcircle" size={24} color="#5E60CE" onPress={()=> {UpdateTask(tarefa)}} /></TouchableOpacity>
                <Text style={styles.textTaskChecked}>{tasks.tarefadescription}</Text>
            </View>  : 
            
            <View  style={styles.containerText}>
                <TouchableOpacity><Feather name="circle" size={24} color="#4EA8DE" onPress={()=> {UpdateTask(tarefa)}} /></TouchableOpacity>
                <Text style={styles.textTask}>{tasks.tarefadescription}</Text>  
            </View>          
            }          
            <TouchableOpacity>
                <Feather name="trash-2" size={24} color="#808080" onPress={()=> onRemove(tasks.tarefadescription)}/>
            </TouchableOpacity>
        </View>
     )
}