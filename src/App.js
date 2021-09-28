
import Header from './components/Header'
import Stage from './components/Stage';
import Toolbar from './components/Toolbar';
import { MemeProvider } from './components/MemeContext';

function App() {
  return (
    /* wrap all components in the provider to make context accessible */
    <MemeProvider>
    <div>
      <Header />
        <div className='container'>
          <Toolbar/> 
          <Stage/>   
        </div>
      </div>
    </MemeProvider>
  );
}

export default App;
