import './App.css';
import Navbar from './containers/Navbar';
import MainContent from './containers/MainContent';
import Sidebar from './containers/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Sidebar />
    </div>
  );
}

export default App;
