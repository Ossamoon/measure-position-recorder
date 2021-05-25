import './App.css';

import Sheet from './mozart_piano_sonata_11/1.png';

function App() {
  return (
    <div className="App">
      <img src={Sheet} alt="[sheet]" onClick={(e) => console.log("x: " + (e.pageX / 1734 * 100) + "%, y:" + (e.pageY / 2400 * 100))} />
    </div>
  );
}

export default App;
