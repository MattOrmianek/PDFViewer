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

![main](https://github.com/user-attachments/assets/c4a1b281-3b1e-489b-838d-b89e98239e5c)

Podczas przeciągania plików aplikacja wyraźnie zaznacza obszar, gdzie plik można upuścić.

![upload](https://github.com/user-attachments/assets/9f2ef1da-0d15-40a4-88ee-dfad83ab0c61)

W aplikacji został także wykonany pasek postępu przesyłania pliku na serwer.

![progressbar](https://github.com/user-attachments/assets/fd23057c-207b-4599-86d3-d3645287accc)

Ekran podglądu prezentuje się na poniższym zrzucie ekranu. Zostały utworzone customowe przyciski akcji oraz zadbałam, aby tooltipy dla tych przycisków były w języku polskim. Dokument można powiększyć, zmniejszyć, włączyć na pełen ekran, a także za pomocą przycisków nawigować pomiędzy stronami.
Pod podglądem znajduje się przycisk, który umożliwia ponowne wgranie dokumentu.

![view](https://github.com/user-attachments/assets/a5bfec7a-f81e-447c-8370-7d16f49a7ab0)



