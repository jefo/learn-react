import { useState } from 'react';
import { ChatRoom } from './components/ChatRoom';

function App() {
  const [roomId, setRoomId] = useState('general');

  return (
    <div className="app">
      <h1>Chat Room Example</h1>
      
      <div className="room-selector">
        <button onClick={() => setRoomId('general')}>General Room</button>
        <button onClick={() => setRoomId('random')}>Random Room</button>
        <button onClick={() => setRoomId('help')}>Help Room</button>
      </div>

      <ChatRoom roomId={roomId} />
    </div>
  );
}

export default App;
