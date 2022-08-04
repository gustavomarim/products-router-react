import React from 'react';
import styles from './Contact.module.css';

import contactImage from '../../assets/contactImage.jpg';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactImage}>
        <img src={contactImage} alt="contact image" />
      </div>
      <div>
        <h2>Entre em contato.</h2>
        <ul>
          <li>gustavo@email.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;