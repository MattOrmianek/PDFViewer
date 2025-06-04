import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import PdfViewer from './components/PdfViewer';
import './styles/style.scss';

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileUploaded = (url) => {
    setPdfUrl(url);
  };

  const handleBack = () => {
    setPdfUrl(null);
  };

  return (
    <div className="app">
      {pdfUrl ? (
        <PdfViewer fileUrl={pdfUrl} onBack={handleBack} />
      ) : (
        <UploadForm onFileUploaded={handleFileUploaded} />
      )}
    </div>
  );
}

export default App;
