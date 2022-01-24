import React, {useState} from 'react';

import Heading from './components/Heading/Heading';
import TaskInput from './components/TaskInput/TaskInput';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';
import TaskList from './components/TaskList/TaskList';
import TaskTools from './components/TaskTools/TaskTools';
import SwitchTheme from './components/SwitchTheme/SwitchTheme'

import {hasSameText} from '../src/functions/functions'

import {ThemeContext} from './contexts/ThemeContext';

import {FILTER} from './consts/switches';
import {THEME} from "../src/consts/themes.js"

function App () {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState(FILTER.ALL);
  const [theme, setTheme] = useState(THEME.MOON);

  function handleToggleTheme(e) {
    setTheme(e.target.checked ? THEME.MOON : THEME.LIGHT)
  }

  function handleAddTask(textTask, isImportant) {
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
      <div className="app">
      
        <Heading
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
