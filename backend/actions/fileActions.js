const path = require('path');
const fs = require('fs');

const uploadPdf = (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ message: 'Brak pliku' });
  }

  const file = req.files.file;

  if (file.mimetype !== 'application/pdf') {
    return res.status(400).json({ message: 'Nieprawidłowy format pliku. Tylko PDF.' });
  }

  const uploadPath = path.join(__dirname, '../uploads', file.name);

  file.mv(uploadPath, (err) => {
    if (err) {
      console.error('Błąd podczas zapisu pliku:', err);
      return res.status(500).json({ message: 'Błąd serwera' });
    }

    const fileUrl = `/uploads/${file.name}`;
    res.status(200).json({ message: 'Plik zapisany', fileUrl });
  });
};

module.exports = { uploadPdf };
