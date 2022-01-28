import React, {ChangeEvent, FC, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTask, deleteAllTasks, deleteAllDoneTasks, deleteTask, toggleDone, toggleImportant } from '../../store/tasks/tasksSlice'
import { selectTasks } from '../../store/tasks/tasksSlice';

import Description from '../../components/Description/Description'
import SwitchTheme from '../../components/SwitchTheme/SwitchTheme'
import TaskInput from '../../components/TaskInput/TaskInput'
import TaskTools from '../../components/TaskTools/TaskTools'
import ModeSwitch from '../../components/ModeSwitch/ModeSwitch'
import TaskList from '../../components/TaskList/TaskList'
import Navigation from '../../components/Navigation/Navigation'

import {hasSameText} from '../../functions/functions'

import {ThemeContext} from '../../contexts/ThemeContext'

import {FILTER} from '../../consts/filters'
import {THEME} from "../../consts/themes"
import { ITask } from '../../models/task'

function Home() {
  const tasks = useSelector(selectTasks);
  const [mode, setMode] = useState(FILTER.ALL);
  const [theme, setTheme] = useState(THEME.MOON);

  const dispatch = useDispatch();

  const handleDeleteAllTasks = () => { dispatch(deleteAllTasks([])) }

  const handleDeleteAllDoneTasks = () => { dispatch(deleteAllDoneTasks()) }

  const handleChangeMode = (selectedMode: string) => { setMode(selectedMode) }

  const handleToggleDone = (id: number) => { dispatch(toggleDone(id)) }

  const handleDeleteTask = (id: number) => { dispatch(deleteTask(id)) }

  const handleToggleImportant = (id: number) => { dispatch(toggleImportant(id)) }

  const handleToggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? THEME.MOON : THEME.LIGHT)
  }

  const handleAddTask = (textTask: string, isImportant: boolean) => {
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

  const filterTasks = (tasks: Array<ITask>, selectedMode: string) => {
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
          toggleTheme={handleToggleTheme}
          theme={theme}
        />

        <TaskInput addItem={handleAddTask} />

        <TaskTools
          deleteAllTasks = {handleDeleteAllTasks}
          deleteAllDoneTasks = {handleDeleteAllDoneTasks}
        />

        <ModeSwitch changeMode={handleChangeMode} />

        <TaskList
          tasks={currentTasks}
          toggleDone={handleToggleDone} 
          deleteTask={handleDeleteTask} 
          toggleImportant = {handleToggleImportant}
        />
    </ThemeContext.Provider>
  );
}

export default Home;