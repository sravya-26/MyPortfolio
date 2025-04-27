import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { FaEye } from 'react-icons/fa'; // Eye icon

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://api.countapi.xyz/hit/sravyaportfolio/visitorcount')
      .then(res => {
        setCount(res.data.value);
      })
      .catch(err => {
        console.error('Failed to fetch visitor count:', err);
      });
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#555' }}>
      <FaEye style={{ fontSize: '20px' }} />
      <CountUp end={count} duration={2} /> {/* Duration controls speed */}
    </div>
  );
}

export default VisitorCounter;
