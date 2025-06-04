import React from 'react';
import '../styles/style.scss';

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Jak korzystać z PDFViewer?</h2>
        <ul>
          <li>📂 Przeciągnij plik PDF do ramki lub kliknij „Prześlij plik”, aby go wybrać.</li>
          <li>☁️ Plik zostanie wysłany na serwer i automatycznie wyświetlony w podglądzie.</li>
          <li>🔍 Użyj przycisków do przybliżania, zmiany stron i pełnego ekranu.</li>
          <li>📲 Aplikacja działa również na smartfonach i tabletach.</li>
          <li>♻️ Możesz wrócić i wgrać inny plik w dowolnym momencie.</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoModal;
