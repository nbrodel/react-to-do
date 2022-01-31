import React, {ChangeEvent, FC, useState} from 'react'
import {useSelector} from 'react-redux'

import {addTask, deleteAllTasks, deleteAllDoneTasks, deleteTask, toggleDone, toggleImportant, changeTask} from '../../store/tasks/tasksSlice'
import {selectTasks} from '../../store/tasks/tasksSlice';

import './Home.css';

import Description from '../../components/Description/Description'
import SwitchTheme from '../../components/SwitchTheme/SwitchTheme'
import TaskInput from '../../components/TaskInput/TaskInput'
import TaskTools from '../../components/TaskTools/TaskTools'
import FilterSwitcher from '../../components/FilterSwitcher/FilterSwitcher'
import TaskList from '../../components/TaskList/TaskList'
import Navigation from '../../components/Navigation/Navigation'

import {hasSameText} from '../../functions/functions'

import {ThemeContext} from '../../contexts/ThemeContext'

import {FILTER} from '../../consts/filters'
import {THEME} from "../../consts/themes"

import {ITask} from '../../models/ITask'

import {useAppDispatch} from '../../store/tasks/store'

const Home: FC<{}> = () => {
  const tasks = useSelector(selectTasks);
  const [mode, setMode] = useState<string>(FILTER.ALL);
  const [theme, setTheme] = useState<string>(THEME.LIGHT);

  const dispatch = useAppDispatch();

  const handleDeleteAllTasks = () => { dispatch(deleteAllTasks([])) }

  const handleDeleteAllDoneTasks = () => { dispatch(deleteAllDoneTasks()) }

  const handleChangeMode = (selectedMode: string) => { setMode(selectedMode) }

  const handleToggleDone = (id: number) => { dispatch(toggleDone(id)) }

  const handleDeleteTask = (id: number) => { dispatch(deleteTask(id)) }

  const handleToggleImportant = (id: number) => { dispatch(toggleImportant(id)) }

  const handleChangeTask = (id: number, currentText: string) => {
    const text = prompt('Change current task', currentText)
    if(isUnique(text)) dispatch(changeTask({id, text}))
    alert('This task already exists');
  }

  const handleToggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? THEME.MOON : THEME.LIGHT)
  }

  const handleAddTask = (taskText: string, isImportant: boolean) => {
    if(!taskText) alert('Task text must not be empty')
    else
    {
      if(isUnique(taskText))
      {
        dispatch(
          addTask({
            id: Math.random(),
            text: taskText,
            isDone: false,
            isImportant: isImportant && true,
            date: new Date().toLocaleString()
          }),
        )
      }
      else
        alert('This task already exists');
    }
  };

  const isUnique = (taskText: string | null) => {
    let isUnique = true;
    for(let i = 0; i < tasks.length; i++)
    {
      isUnique = hasSameText(tasks[i].text, taskText);
      if(!isUnique)
        break;
    }
    return isUnique;
  }

  const filterTasks = (tasks: ITask[], selectedMode: string) => {
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
        
        <SwitchTheme
            toggleTheme={handleToggleTheme}
            theme={theme}
        />

        <div className='task-header'>
          <Description
            activeTaskCount={activeTaskCount}
            activeImportantTaskCount={activeImportantTaskCount}
          />
          <TaskInput addItem={handleAddTask} />
        </div>

        <div className='task-list'>
          <TaskTools
              deleteAllTasks = {handleDeleteAllTasks}
              deleteAllDoneTasks = {handleDeleteAllDoneTasks}
            />

          <FilterSwitcher changeMode={handleChangeMode} />
          
          <TaskList
            tasks={currentTasks}
            toggleDone={handleToggleDone} 
            toggleImportant = {handleToggleImportant}
            deleteTask={handleDeleteTask} 
            changeTask={handleChangeTask}
          />
        </div>
    </ThemeContext.Provider>
  );
}

export default Home;