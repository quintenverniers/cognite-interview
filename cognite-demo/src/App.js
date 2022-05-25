import Grid from './components/Grid';
import {TictactoeContext, tictactoeData} from './context/TictactoeContext';

function App() {

  return (
    <TictactoeContext.Provider value={tictactoeData}>
      <Grid />
    </TictactoeContext.Provider>
  );
}

export default App;
