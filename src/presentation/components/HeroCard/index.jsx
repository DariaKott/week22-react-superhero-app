import React from 'react';
import './styles.scss';

function HeroCard(props) {
  const { hero } = props;

  return (
    <div className="card">
      <h2>{hero.name}</h2>
      <img src={hero.url} alt={hero.name} />
      <p>
        <span className="card_subtitle">Вселенная:</span>
        <span>{hero.universe}</span>
      </p>
      <p>
        <span className="card_subtitle">Альтер-эго:</span>
        <span>{hero.alterego}</span>
      </p>
      <p>
        <span className="card_subtitle">Род деятельности:</span>
        <span>{hero.occupation}</span>
      </p>
      <p>
        <span className="card_subtitle">Друзья:</span>
        <span>{hero.friends}</span>
      </p>
      <p>
        <span className="card_subtitle">Суперсилы:</span>
        <span>{hero.superpowers}</span>
      </p>
      <p>{hero.info}</p>
      <p>
        <span>Оценить: </span>
        <span className="card_star">&#9733;</span>
        <span className="card_star">&#9733;</span>
        <span className="card_star">&#9733;</span>
      </p>
    </div>
  );
}

export { HeroCard };
