import './App.css';
import Header from "./components/header/Header";
import Configuration from './components/configuration/Configuration';
import DragAndDrop from './components/dragndrop/DragAndDrop';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Configuration />
        <div className="IO_container">
          <DragAndDrop />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;

