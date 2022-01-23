import React, {useState} from 'react';

import Description from '../Description/Description'
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import TaskInput from '../TaskInput/TaskInput'
import TaskTools from '../TaskTools/TaskTools'
import ModeSwitch from '../ModeSwitch/ModeSwitch'
import TaskList from '../TaskList/TaskList'
import Header from '../Header/Header'

import {isSameText} from '../../functions/functions'

import {ThemeContext} from '../../contexts/ThemeContext'

import {FILTERS} from '../../consts/filters';
import {THEME} from "../../consts/themes"

function Home () {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState(FILTERS.ALL);
  const [theme, setTheme] = useState(THEME.MOON);

  function handleToggleTheme(e) {
    setTheme(e.target.checked ? THEME.MOON : THEME.LIGHT)
  }

  function handleAddTask(textTask, isImportant) {
    const isUnique = tasks.every(task => isSameText(task.text, textTask))

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

  function handleDeleteAllTasks() { setTasks([]) }

  function handleDeleteAllDoneTasks() {
    setTasks(tasks.filter(task => !task.isDone))
  }

  function handleChangeMode(selectedMode) { setMode(selectedMode) }

  function filterTasks(tasks, selectedMode) {
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

  function handleToggleDone(id) {
    setTasks(tasks.map(task => 
        task.id === id ? { ...task, isDone: !task.isDone } : task)
    );
  }

  function handleDeleteTask (id) {
    setTasks (tasks.filter(task => task.id !== id));
  }

  function handleToggleImportant(id) {
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