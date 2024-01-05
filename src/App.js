import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Brief from './components/brief';

function App() {
  return (
    <div className="App">
      <Header />
        <p>
          <Brief />
        </p>
      <Footer />
    </div>
  );
}

export default App;
