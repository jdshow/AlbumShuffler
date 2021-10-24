import './App.css';

import { Player } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>It Shuffles Albums</h1>
      </header>
      <main>
        <Player />
      </main>
    </div>
  );
}

export default App;
