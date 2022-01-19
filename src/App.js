import { Component } from 'react/cjs/react.production.min';

/* import './App.css' */

import Heading from './components/Heading/Heading';
import TaskInput from './components/TaskInput/TaskInput';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';
import TaskList from './components/TaskList/TaskList';
import TaskTools from './components/TaskTools/TaskTools';
import SwitchTheme from './components/SwitchTheme/SwitchTheme'

import {isSameText} from '../src/functions/functions'

import { ThemeContext } from './contexts/ThemeContext';

import {FILTERS} from './consts/switches';
import {themes} from "../src/consts/themes.js"

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [],
      mode: FILTERS.ALL,
      theme: themes.LIGHT
    }
  } 

  handleToggleTheme = (e) => {
    this.setState({
      theme: e.target.checked ? themes.MOON : themes.LIGHT
    })
  }

  handleAddTask = (textTask, isImportant) => {
    const isUnique = this.state.tasks.every(task => isSameText(task.text, textTask))

    if(isUnique)
    {
      const newTask = {
        id: Math.random(),
        text: textTask,
        isDone: false,
        isImportant: isImportant && false,
        date: new Date().toLocaleString()
      };
      
      this.setState(({ tasks }) => {
        const newTasks = [ ...tasks, newTask ];
  
        return {
          tasks: newTasks
        };
      });
    }
    else
      alert("this task already exists");
  };

  handleDeleteAllTasks = () => {
    this.setState({ tasks: [] })
  }

  handleDeleteAllDoneTasks = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.isDone)
    })
  }

  handleChangeMode = (selectedMode) => {
    this.setState({ mode: selectedMode })
  }

  filterTasks = (tasks, selectedMode) => {
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

  handleToggleDone = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => 
        task.id === id ? { ...task, isDone: !task.isDone } : task)
    });
  }

  handleDeleteTask = (id) => {
    this.setState ({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  handleToggleImportant = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => 
        task.id === id ? { ...task, isImportant: !task.isImportant } : task)
    });
  }

  render () {
    const { state, filterTasks, 
      handleToggleTheme, handleAddTask, handleDeleteAllTasks, handleDeleteAllDoneTasks, 
      handleChangeMode, handleToggleDone, handleDeleteTask, handleToggleImportant } = this;

    const { tasks, mode, theme } = state;

    const activeTaskCount = tasks.filter(task => !task.isDone).length;
    const activeImportantTaskCount = tasks.filter(task => task.isImportant).length;

    const currentTasks = filterTasks(tasks, mode);    

    return (
      <div className="app">
        <ThemeContext.Provider value={theme}>
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
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
