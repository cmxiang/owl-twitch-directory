import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ players }) => {
  return (
    <div className="CardList">
      {players.map((player, i) => {
        return (
            <Card
              key={i}
              player={player}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;