import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask, deleteAllTasks, deleteAllDoneTasks, deleteTask, toggleDone, toggleImportant } from '@store/tasks/tasksSlice';

import Description from '@components/Description/Description'
import SwitchTheme from '@components/SwitchTheme/SwitchTheme'
import TaskInput from '@components/TaskInput/TaskInput'
import TaskTools from '@components/TaskTools/TaskTools'
import ModeSwitch from '@components/ModeSwitch/ModeSwitch'
import TaskList from '@components/TaskList/TaskList'
import Navigation from '@components/Navigation/Navigation'

import {hasSameText} from '@functions/functions'

import {ThemeContext} from '@contexts/ThemeContext'

import {FILTER} from '@consts/filters';
import {THEME} from "@consts/themes"

function Home () {
  const {tasks} = useSelector((state) => state.tasks);
  const [mode, setMode] = useState(FILTER.ALL);
  const [theme, setTheme] = useState(THEME.MOON);

  const dispatch = useDispatch();

  const handleDeleteAllTasks = () => { dispatch(deleteAllTasks([])) }

  const handleDeleteAllDoneTasks = () => { dispatch(deleteAllDoneTasks(tasks)) }

  const handleChangeMode = (selectedMode) => { setMode(selectedMode) }

  const handleToggleDone = (id) => { dispatch(toggleDone(id)) }

  const handleDeleteTask = (id) => { dispatch(deleteTask(id)) }

  const handleToggleImportant = (id) => { dispatch(toggleImportant(id)) }

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
      dispatch(
        addTask({
          id: Math.random(),
          text: textTask,
          isDone: false,
          isImportant: isImportant && true,
          date: new Date().toLocaleString()
        }),
      )
    }
    else
      alert("this task already exists");
  };

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

  const activeTaskCount = tasks.filter(task => !task.isDone).length;
  const activeImportantTaskCount = tasks.filter(task => task.isImportant).length;

  const currentTasks = filterTasks(tasks, mode);

  return (
    <ThemeContext.Provider value={theme}>
        <Navigation />
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