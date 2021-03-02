import Featured from './components/Featured'
import Header from './components/Header'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Navbar />
      <Featured />
    </div>
  );
}

export default App;
