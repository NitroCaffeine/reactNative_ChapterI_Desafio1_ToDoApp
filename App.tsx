import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Home } from './src/screens/Home';
import {ProviderTasks } from './src/context/TasksController';

export default function App() {

 

  return (
    <ProviderTasks >
     <Home/>
    </ProviderTasks>
  );
}
