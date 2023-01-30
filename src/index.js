import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/constants/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Що ще планую зробити:
//    - анімацію при появі, як в header
//    - анімація при hover/focus
//    - модальне вікно для реєстрації
//    - поле для пошуку
//    - модальне вікно з товаром
//    - модальне вікно з корзиною
//    - секція відгуки - слайдер
//    - секція відгуки - форма для створення відгука
//    - секція відгуки - кнопка для виклику форми для відгука
//    - news - модальне вікно з діючою акцією
//    - навігація по сторінці - використовуючи React Router, прибрати вже існуючу
