
import React from 'react';
import axios from 'axios';

const SyncButton = () => {
  const handleSync = async () => {
    try {
      await axios.get('/api/forms/sync');
      console.log('Data synchronized with Excel.');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button onClick = {handleSync}>Refresh</button>
    </div>
);
};

export default SyncButton;
