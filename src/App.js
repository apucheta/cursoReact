
import AnimalCard from './component/animal-card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <AnimalCard></AnimalCard>
        <AnimalCard></AnimalCard>
        <AnimalCard></AnimalCard>
        <AnimalCard></AnimalCard>
        <AnimalCard></AnimalCard>
        <AnimalCard></AnimalCard>
      </div>
    </div>
  );
}

export default App;
