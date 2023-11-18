import './App.css';
import Header from "./components/header/Header";
import Configuration from './components/configuration/Configuration';
import DragAndDrop from './components/dragndrop/DragAndDrop';
import Content from './components/content/Content';
import { useState, useEffect } from 'react';
import { CleanData } from './components/CleanData';

function App() {
  const [bannersData, setBannersData] = useState([]);

  useEffect(() => {
    const handleBeforeUnload = async () => {
      await CleanData();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Configuration />
        <div className="IO_container">
          <DragAndDrop setBannersData={setBannersData} />
          <Content bannersData={bannersData} setBannersData={setBannersData} />
        </div>
      </div>
    </div>
  );
}

export default App;

