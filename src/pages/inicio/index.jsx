import React from 'react';
import './styles.scss';

// COMPONENTES
import Header from '../../components/header/index';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const moveButton = (event) => {
    const button = event.target;
    const randomX = getRandomInt(-100, 100); // Números aleatorios entre -500 y 500
    const randomY = getRandomInt(-50, 400); // Números aleatorios entre -50 y 500
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  const saludo = () => {
    alert('YA SABIA QUE SI MI AMOR ❤️')
  }

const Index = () => {
  return (
    <>
      <Header />

      <div className="titulo">
        Hola
      </div>

      <div className="panel">
        <div className="button no" onMouseOver={moveButton} onClick={moveButton}>
          no
        </div>
        <div className="button si" onClick={saludo}>
          Si
        </div>
      </div>
    </>
  );
};

export default Index;