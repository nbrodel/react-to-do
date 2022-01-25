import React, {useState} from 'react';

import Description from '../../components/Description/Description'
import SwitchTheme from '../../components/SwitchTheme/SwitchTheme'
import TaskInput from '../../components/TaskInput/TaskInput'
import TaskTools from '../../components/TaskTools/TaskTools'
import ModeSwitch from '../../components/ModeSwitch/ModeSwitch'
import TaskList from '../../components/TaskList/TaskList'
import Header from '../../components/Header/Header'

import {hasSameText} from '../../functions/functions'

import {ThemeContext} from '../../contexts/ThemeContext'

import {FILTER} from '../../consts/filter';
import {THEME} from "../../consts/themes"

function Home () {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState(FILTER.ALL);
  const [theme, setTheme] = useState(THEME.MOON);

  const handleToggleTheme = (e) => {
    setTheme(e.target.checked ? THEME.MOON : THEME.LIGHT)
  }

  const handleAddTask = (textTask, isImportant) => {
    let isUnique = true;
    for(let task of tasks)
    {
      isUnique = hasSameText(task.text, textTask);
      if(!isUnique)
        break;
    }

    if(isUnique)
    {
      const newTask = {
        id: Math.random(),
        text: textTask,
        isDone: false,
        isImportant: isImportant && true,
        date: new Date().toLocaleString()
      };
      
      const newTasks = [ ...tasks, newTask];

      setTasks(newTasks)
    }
    else
      alert("this task already exists");
  };

  const handleDeleteAllTasks = () => { setTasks([]) }

  const handleDeleteAllDoneTasks = () => {
    setTasks(tasks.filter(task => !task.isDone))
  }

  const handleChangeMode = (selectedMode) => { setMode(selectedMode) }

  const filterTasks = (tasks, selectedMode) => {
    switch(selectedMode) {
      default: return tasks;
      case 'All': return tasks;
      case 'Active':
        return tasks.filter(task => !task.isDone);
      case 'Done':
        return tasks.filter(task => task.isDone);
      case 'Important':
        return tasks.filter(task => task.isImportant);
      case 'Unimportant':
        return tasks.filter(task => !task.isImportant);
    }
  }

  const handleToggleDone = (id) => {
    setTasks(tasks.map(task => 
        task.id === id ? { ...task, isDone: !task.isDone } : task)
    );
  }

  const handleDeleteTask = (id) => {
    setTasks (tasks.filter(task => task.id !== id));
  }

  const handleToggleImportant = (id) => {
    setTasks(tasks.map(task => 
        task.id === id ? { ...task, isImportant: !task.isImportant } : task)
    );
  }

  const activeTaskCount = tasks.filter(task => !task.isDone).length;
  const activeImportantTaskCount = tasks.filter(task => task.isImportant).length;

  const currentTasks = filterTasks(tasks, mode);

  return (
    <ThemeContext.Provider value={theme}>
        <Header />
        <Description
          activeTaskCount={activeTaskCount}
          activeImportantTaskCount={activeImportantTaskCount}
        />

        <SwitchTheme
          onToggleTheme={handleToggleTheme}
          theme={theme}
        />

        <TaskInput onItemAdded={handleAddTask} />

        <TaskTools
          onDeleteAllTasks = {handleDeleteAllTasks}
          onDeleteAllDoneTasks = {handleDeleteAllDoneTasks}
        />

        <ModeSwitch onChangeMode={handleChangeMode} />

        <TaskList
          tasks={currentTasks}
          onToggleDone={handleToggleDone} 
          onDeleteTask={handleDeleteTask} 
          onToggleImportant = {handleToggleImportant}
        />
    </ThemeContext.Provider>
  );
}

export default Home;