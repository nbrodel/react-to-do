import { Component } from 'react/cjs/react.production.min';

import Heading from './components/Heading/Heading';
import TaskInput from './components/TaskInput/TaskInput';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';
import TaskList from './components/TaskList/TaskList';
import TaskTools from './components/TaskTools/TaskTools';

import {isSameText} from '../src/functions/functions'

import {doneModes} from './consts/switches';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      mode: doneModes.ALL
    }
  }

  handleAddTask = (textTask, isImportant) => {
    const isUnique = this.state.tasks.every(task => isSameText(task.text, textTask))

    if(isUnique)
    {
      const newTask = {
        id: Math.random(),
        text: textTask,
        isDone: false,
        isImportant: isImportant ? true : false,
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
      default:
        return tasks;
      case 'All':
        return tasks;
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

  handleToogleDone = (id) => {
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
    const { state, filterTasks, handleAddTask, handleDeleteAllTasks, handleDeleteAllDoneTasks, handleChangeMode, handleToogleDone, handleDeleteTask, handleToggleImportant } = this;

    const { tasks, mode } = state;

    const activeTaskCount = tasks.filter(task => !task.isDone).length;
    const activeImportantTaskCount = tasks.filter(task => task.isImportant).length;

    const currentTasks = filterTasks(tasks, mode);    

    return (
      <div className="App">
        <Heading
          activeTaskCount={activeTaskCount}
          activeImportantTaskCount={activeImportantTaskCount}
          />

        <TaskInput onItemAdded={handleAddTask} />

        <TaskTools
          onDeleteAllTasks = {handleDeleteAllTasks}
          onDeleteAllDoneTasks = {handleDeleteAllDoneTasks}/>

        <ModeSwitch onChangeMode={handleChangeMode} />

        <TaskList
          tasks={currentTasks}
          onToggleDone={handleToogleDone} 
          onDeleteTask={handleDeleteTask} 
          onToggleImportant = {handleToggleImportant}
          />
      </div>
    );
  }
}

export default App;
