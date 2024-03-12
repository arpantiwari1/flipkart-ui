import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Heading from './component/topbar';
import Left_panel from './component/leftpanel';
import Cards from './component/cards';
import Footer from './component/footer';
import MultiActionAreaCard from './component/card_pro';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <Heading />
    <Left_panel />
    <Footer />
  </>
);

reportWebVitals();
