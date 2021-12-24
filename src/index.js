//Модули
import React from 'react';
import ReactDOM from 'react-dom';

// Компоненты
import Container from './components/Container/Container';
import App from './App';

// Стили
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById('root')
);