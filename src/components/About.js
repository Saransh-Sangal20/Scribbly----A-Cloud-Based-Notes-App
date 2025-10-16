import React, { useEffect } from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

export default function About() {
  const a = useContext(noteContext);
  useEffect(()=> {
    a.updateState();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      This is about {a.state.name} and class {a.state.class};
    </div>
  )
}