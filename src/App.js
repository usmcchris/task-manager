import './App.css';
import Home from './components/home';
import Tasks from './components/tasks';
import Contact from './components/contact';
import FAQ from './components/faq';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
        <div className="drop-down">
          <a href="#home" className="active">Home</a>
          <a href="#tasks">Tasks</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
          <a href="#taskform">Task Form</a>
        </div>
      </header>
      <div className="TaskList">

      </div>
      <div className="TaskForm">
        
      </div>
      <Home />
      <Contact />
      <Tasks />
      <FAQ />
    </div>
  );
}

export default App;
