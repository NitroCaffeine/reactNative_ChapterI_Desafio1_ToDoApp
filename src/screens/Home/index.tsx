import { View, Text, Image, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import {styles} from "./styles";
import { ImageAssets } from "../../../assets/ImageAssets";
import { useContext, useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons'; 
import { Tarefas } from "../../components/Tarefas";
import { Context } from "../../context/TasksController";
import { FontAwesome5 } from '@expo/vector-icons'; 

interface Tasks {
    tarefadescription: string;
    checked: boolean;
    
}

export  function Home() {

    const [border, setBorder] = useState(false);
    const [tarefasList, setTarefasList] = useState<Tasks[]>([]);
    const [tarefaName, setTarefaName] = useState<string>('');
    const { created, setCreated, setConcluded, concluded} = useContext(Context)

  
   

    function handleAddTarefa() {
       
        const existe = tarefasList.find(tarefa => tarefa.tarefadescription === tarefaName)
       

        if (existe) {
            return Alert.alert('Tarefa já existente','Você não pode cadastrar tarefas iguais')
        }

        setTarefasList([...tarefasList, {tarefadescription: tarefaName, checked: false}])
        setCreated(created + 1)
        setTarefaName('')
      
    }

    function handleRemoveTarefa(name: string){
        const tarefa = tarefasList.filter(tarefa => tarefa.tarefadescription !== name)
        const deleteTask = () => {
            
            setTarefasList([...tarefa])
            
            created > 0 ? setCreated(created - 1) : setCreated(0)
            concluded > 0 ? setConcluded(concluded - 1) : setConcluded(0)
            
        
        }

        
        Alert.alert('deletar tarefa',`deseja deletar ${name} da lista de tarefas?`,[
            {
            text: 'Não',
            style: 'cancel'
            },
            {
            text: 'Sim',
            onPress: () => deleteTask()
            }
        ])
     
    }

    function UpdateTask(tarefaAtualizada: Tasks){
        const tarefa = tarefasList.map(tarefa => {
            if (tarefa.tarefadescription === tarefaAtualizada.tarefadescription){
                return {...tarefa, checked: !tarefa.checked}
            }else{
                return tarefa
            }
        })

        setTarefasList([...tarefa])

      

       
     
    }

    useEffect(() => {

        const listController = tarefasList.map(tarefa => tarefa.checked === true)
        let counter = 0
        console.log(listController)

        listController.forEach(item => {
            if (item === true){
                counter+=1
                setConcluded(counter)
            }
            else if (item === false && counter > 0){
                counter-=1
                setConcluded(counter)
            }
        })

        console.log(counter)

        
    


    },[tarefasList])
   


    return(
     
            <View style={styles.background}>
                <View style={styles.containerImage}>
                    <Image source={ImageAssets.logo} style={styles.image}  resizeMode="stretch"/>
                </View>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <TextInput style={styles.input} placeholder="Adicione uma nova tarefa" placeholderTextColor='#808080' underlineColorAndroid="transparent"  onFocus={()=>setBorder(!border)} onChangeText={text => setTarefaName(text)} value={tarefaName} />
                        <TouchableOpacity style={styles.button} onPress={handleAddTarefa}><AntDesign name="pluscircleo" size={24} color="white" /></TouchableOpacity>
                    </View>  
                  <View>
                      
                        <View style={styles.content}>
                                <Text style={{...styles.contentText, color:'#4EA8DE'}}>Criadas<View style={styles.quantity}>
                                    <Text style={{color: '#fff'}}>{created}</Text>
                                </View></Text>
                                <Text style={{...styles.contentText, color:'#8284FA'}}>Concluídas<View style={styles.quantity}>
                                    <Text style={{color: '#fff'}}>{concluded}</Text>
                                </View></Text>
                      
                        </View>
                       <View style={styles.lineStyle}/>
                        {/*  */}
                        <FlatList 
                        data={tarefasList}
                        keyExtractor={(item) => item.tarefadescription}
                        renderItem={({ item }) => (
                        <Tarefas
                            tasks={item} 
                            onRemove={() => handleRemoveTarefa(item.tarefadescription)} 
                            onUpdate={() => UpdateTask(item)}
                        />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                        <View style={styles.tasksEmptyContent}>
                            <View style={styles.tasksEmptyContentImage}><FontAwesome5 name="tasks" size={56} color="#3B3F39"/></View>
                            <Text style={{...styles.tasksEmptyContentText, fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.tasksEmptyContentText}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                        )}
                    />
                  </View>
                    
                          
                </View>
              
            </View>
           
        
    )
}


