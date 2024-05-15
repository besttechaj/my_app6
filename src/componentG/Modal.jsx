import React from 'react';
import './Modal.css';
import { createPortal } from 'react-dom';
export default function Modal({ status, closeModal }) {
  if (status) {
    let x = (
      <>
        <div className='container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quos aliquam nostrum ea fuga, eum autem dolore praesentium,
            laudantium magni placeat. Officia deserunt qui vitae, pariatur
            nostrum aliquam quis sed.
          </p>
          <br />
          <button onClick={closeModal}>Go Back</button>
        </div>
      </>
    );
    return createPortal(x, document.getElementById('portalNode'));
  } else {
    return null;
  }
}
