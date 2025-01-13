import { useState } from 'react';
import { AnimatedCard } from './components/AnimatedCard';
import { Modal } from './components/Modal';

const cards = [
  {
    title: 'Card 1',
    content: 'This is a long description that will be shown when the card is expanded. It contains multiple lines of text to demonstrate the animation.',
    image: 'https://picsum.photos/300/200?1'
  },
  {
    title: 'Card 2',
    content: 'Another long description for the second card. This text will be revealed with an animation when the user clicks on the card.',
    image: 'https://picsum.photos/300/200?2'
  },
  {
    title: 'Card 3',
    content: 'The third card also has some interesting content that will be animated when shown. The animation should be smooth and performant.',
    image: 'https://picsum.photos/300/200?3'
  }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>Animation Performance Example</h1>
      
      <button 
        className="open-modal-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <div className="cards">
        {cards.map((card, index) => (
          <AnimatedCard key={index} {...card} />
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <h2>Modal Content</h2>
        <p>This is a modal window with problematic animations. Try opening and closing it multiple times to see performance issues.</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
