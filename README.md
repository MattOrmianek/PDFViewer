# 📄 PDFViewer

PDFViewer to nowoczesna, responsywna aplikacja internetowa typu Single Page Application (SPA), która umożliwia przesyłanie plików PDF, ich podgląd oraz interakcję w przeglądarce. Pliki są przesyłane do backendu i wyświetlane dynamicznie z serwera, bez przechowywania ich w przeglądarce.

Projekt został stworzony z pomocą ChatGPT.
---

## 🔧 Technologie

- ⚛️ React (z `react-pdf-viewer`)
- 🎨 SCSS (modularny styl)
- 📦 Axios (upload z postępem)
- 🗂️ Node.js + Express (backend API + static file serving)
- 📄 Font Awesome + React Icons
- 🧠 Interfejs promptowania opisany w `PROMPTS.md`

---

## 🛠️ Funkcjonalności

- Przesyłanie pliku PDF (drag & drop lub przycisk)
- Upload na backend z paskiem postępu
- Podgląd PDF (przybliżanie, przechodzenie stron, fullscreen)
- Responsywny UI (działa na desktopie i mobilnie)
- Modal z instrukcją obsługi
- Ikony i nowoczesny interfejs
- Pliki nie są przechowywane lokalnie — są ładowane z serwera
- Tooltipy dla podglądu PDF w języku polskim
- Wyświetlanie stylowego alertu przy wystąpieniu błedu z przesyłem pliku

---

## 🚀 Uruchomienie projektu

### 1. Klonowanie repozytorium

```bash
git clone https://github.com/Adriannax3/PDFViewer.git
cd pdfviewer
```

### 2. Uruchomienie backendu

```bash
cd backend
npm install
node index.js
```

### 3. Uruchomienie frontendu

```bash
cd frontend
npm install
npm start
```
Frontend uruchomi się pod http://localhost:3000.


---

## Użyte prompty

Użyte prompty znajdują się w pliku PROMPTS.md

---

## Interfejs użytkownika
Projekt ma jedną prostą funkcję, dlatego tworząc UI postawiłam na minimalizm i prostotę bez zbędnego lania wody i ozdób. Na głównej stronie znajduje się tytuł aplikacji i krótki opis. Obok tytułu dodatkowo jest ikonka pomocy, która otwiera modal z instrukcją. Obszar do przeciągania plików został oznaczony szarym obramowaniem. Na środku jest także przycisk do przesyłania plików pdf.

![main](https://github.com/user-attachments/assets/dc1a8236-511c-4c05-9127-d660f3579755)

Podczas przeciągania plików aplikacja wyraźnie zaznacza obszar, gdzie plik można upuścić.

![upload](https://github.com/user-attachments/assets/d26b11b2-d1d6-44c4-842e-00f03e089271)

W aplikacji został także wykonany pasek postępu przesyłania pliku na serwer.

![progressbar](https://github.com/user-attachments/assets/1d4baa1e-ec67-401f-b61c-ceabf8b07162)

Ekran podglądu prezentuje się na poniższym zrzucie ekranu. Zostały utworzone customowe przyciski akcji oraz zadbałam, aby tooltipy dla tych przycisków były w języku polskim. Dokument można powiększyć, zmniejszyć, włączyć na pełen ekran, a także za pomocą przycisków nawigować pomiędzy stronami.
Pod podglądem znajduje się przycisk, który umożliwia ponowne wgranie dokumentu.

![view](https://github.com/user-attachments/assets/d501843d-8074-4598-a1f4-637e3fd54f6b)

