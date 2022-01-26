import React, {useState, useCallback} from 'react';
import { observer, inject } from 'mobx-react';

import Description from '../../components/Description/Description';
import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';
import TaskInput from '../../components/TaskInput/TaskInput';
import TaskTools from '../../components/TaskTools/TaskTools';
import ModeSwitch from '../../components/ModeSwitch/ModeSwitch';
import TaskList from '../../components/TaskList/TaskList';
import Header from '../../components/Header/Header';

import {hasSameText} from '../../functions/functions';

import {ThemeContext} from '../../contexts/ThemeContext';

import {FILTER} from '../../consts/filters';
import {THEME} from "../../consts/themes";

import tasksStore from '../../store/tasks/tasksStore'

const Home = observer(({tasks}) => {
  
  const [mode, setMode] = useState(FILTER.ALL);
  const [theme, setTheme] = useState(THEME.MOON);

  const handleAddTask = (textTask, isImportant) => {
    let isUnique = true;
    for(let task of tasksStore.tasks)
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

      tasks.addTask([newTask]);
    }
    else
      alert("this task already exists");
  };

  const handleDeleteAllTasks = () => { tasks.deleteAllTasks([]) } 

  const handleDeleteAllDoneTasks = () => { tasks.deleteAllDoneTasks() };

  const handleToggleDone = useCallback(
    (id) => {
      tasks.toggleDone(id);
    },
    [tasks.tasks],
  );

  const handleDeleteTask = useCallback(
    (id) => {
      tasks.deleteTask(id);
    },
    [tasks.tasks],
  );

  const handleToggleImportant = useCallback (
    (id) => {
      tasks.toggleImportant(id);
    },
    [tasks.tasks],
  );

  const handleToggleTheme = (e) => {
    setTheme(e.target.checked ? THEME.MOON : THEME.LIGHT)
  };

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
  };

  const activeTaskCount = tasks.tasks.filter(task => !task.isDone).length;
  const activeImportantTaskCount = tasks.tasks.filter(task => task.isImportant).length;

  const currentTasks = filterTasks(tasks.tasks, mode);

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
});

export default inject('tasks')(Home);