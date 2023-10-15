import React from 'react';
import './styles.scss';
import { data } from '../../../assets/data';
import { HeroCard } from '../HeroCard';

function List(props) {
  const { data } = props; // Извлечь массив данных data из props

  return (
    <div className="list">
      {data.map((hero, index) => (
        <HeroCard key={index} hero={hero} />
      ))}
    </div>
  );
}

export { List };
