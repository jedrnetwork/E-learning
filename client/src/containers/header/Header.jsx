import React from 'react';
import chatAI from '../../assets/chatAI.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Ignite minds with education's infinite potential</h1>
      <p>My past might describe my origins and my background but won't define my destiny. Deep within, a flame burns with relentless resolve and limitless potential. I hold the pen to my own story, crafting a future that surpasses past constraints. A tale of resilience, growth, and boundless possibilities unfolds as I transcend the limitations of yesterday.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={chatAI} alt='Logo'/>
    </div>
  </div>
);

export default Header;
