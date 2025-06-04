import React, { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { FaFileUpload, FaRegFilePdf } from 'react-icons/fa';
import axios from 'axios';
import InfoModal from './InfoModal';
import '../styles/style.scss';
import Swal from 'sweetalert2';


const UploadForm = ({ onFileUploaded }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFile = (file) => {
    if (file && file.type === 'application/pdf') {
      uploadFile(file);
    } else {
      alert('Wybierz plik PDF.');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        },
      });

      if (response.status === 200) {
        const fileUrl = `http://localhost:5000${response.data.fileUrl}`;
        onFileUploaded(fileUrl);
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Błąd wysyłania pliku',
        text: 'Coś poszło nie tak podczas przesyłania PDF. Spróbuj ponownie później.',
        confirmButtonColor: '#00b8ff',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-wrapper">
      <div
        className={`upload-fullscreen ${isDragActive ? 'drag-active' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragActive(true);
        }}
        onDragLeave={() => setIsDragActive(false)}
        onDrop={handleDrop}
      >
        <div className={`title-container ${isDragActive ? 'drag-active' : ''}`}>
          <h1 className="title">PDFViewer</h1>
          <FiHelpCircle
            className="help-icon"
            size={24}
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <p className={`description ${isDragActive ? 'drag-active' : ''}`}>
          Przeciągnij plik PDF tutaj lub kliknij, aby go wybrać.
        </p>

        <label htmlFor="file-upload" className={`upload-button ${isDragActive ? 'drag-active' : ''}`}>
          <FaFileUpload /> {isUploading ? 'Wysyłanie...' : 'Prześlij plik'}
        </label>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        {isUploading && (
          <div className="upload-progress">
            <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
            <span>{uploadProgress}%</span>
          </div>
        )}

        {isDragActive && (
          <div className="drop-overlay">
            <FaRegFilePdf size={48} />
            <p>Upuść plik tutaj</p>
          </div>
        )}
      </div>

      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default UploadForm;
