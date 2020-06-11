import React, { useState } from 'react'

function Sample() {
  const [name, setName] = useState('サイコウ');
  const handleName = e => {
    setName(e.target.value)
  }
  return (
    <div>
      <input type="text" value={name}
  onChange={handleName} />
	{name}
    </div>
  );
}

export default Sample;