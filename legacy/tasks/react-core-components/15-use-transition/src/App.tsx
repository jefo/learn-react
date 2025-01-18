import { ThreadList } from './components/ThreadList';
import { threads } from './data/comments';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Discussion Forum</h1>
        <p>Join the conversation in our {threads.length} active threads</p>
      </header>
      <main>
        <ThreadList threads={threads} />
      </main>
    </div>
  );
}

export default App;
