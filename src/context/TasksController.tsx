import React, {createContext, useContext, useState} from 'react';

interface ContextData {
    concluded: number;
    setConcluded: (conclued: number) => void;
    created: number;
    setCreated: (created: number) => void;
   
}

interface ProviderProps{
    children: React.ReactNode;
    
}

export const Context = createContext<ContextData>({} as ContextData);

export function TasksController(){
    const {concluded, setConcluded, created, setCreated} = useContext(Context);


    function AddConcluded(){
        setConcluded(concluded + 1);
    }

    function AddCreated(){
        setCreated(created + 1);
    }


    return {
        concluded,
        AddConcluded,
        created,
        AddCreated,
    };
}

export function ProviderTasks({children}: ProviderProps){

    const [concluded, setConcluded] = useState(0);
    const [created, setCreated] = useState(0);

    return (
        <Context.Provider  value={{concluded, created, setConcluded, setCreated}}>

            {children}
        </Context.Provider>
    );

}