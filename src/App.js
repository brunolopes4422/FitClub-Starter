import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Depoimentos from './assets/Depoimentos/Depoimentos';
import Join from './components/Join/Join';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Depoimentos/>
      <Join/>
    </div>
  );
}

export default App;
