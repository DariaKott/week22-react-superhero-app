import React from 'react';
import { List } from './components/CardsList';
import '../assets/global.scss';
import { data } from '../assets/data';

function App() {
  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export { App };
