import { useState } from 'react';

export default function AddTicket({ onAddTicket }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add ticket"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTicket(text);
        }}>
        Add
      </button>
    </>
  );
}


