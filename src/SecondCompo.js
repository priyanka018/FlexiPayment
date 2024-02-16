import React from 'react';
import { useLocation } from 'react-router-dom';

const SecondCompo = () => {
    const location = useLocation();
    const { count, color } = location.state || {};

  return (
    <div> {count} {color}</div>
  )
}

export default SecondCompo;