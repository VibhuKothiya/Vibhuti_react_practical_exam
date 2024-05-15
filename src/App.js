
import './App.css';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StudentForm/>
      <StudentList/>
    </div>
  );
}

export default App;
