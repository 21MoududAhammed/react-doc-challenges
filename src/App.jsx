import { useState } from 'react';
import { letters } from './data.js';
import Letter from './components/Letter.jsx';



export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

 

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setSelectedIds([...selectedIds, toggledId]);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
               selectedIds.find(id => id === letter.d)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedIds.length} letters
          </b>
        </p>
      </ul>
    </>
  );
}
