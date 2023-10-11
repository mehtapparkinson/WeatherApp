import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <SearchBar></SearchBar>
    <WeatherDisplay></WeatherDisplay>
    </div>
  );
}

export default App;
