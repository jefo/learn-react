import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
