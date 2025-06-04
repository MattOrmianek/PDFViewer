# 🧠 PROMPTS.md – Dokumentacja współpracy z ChatGPT

Ten plik zawiera listę zapytań (promptów), które zostały użyte do stworzenia projektu **PDFViewer** z wykorzystaniem ChatGPT.

> Stwórz aplikację React (JavaScript), która pozwala na załadowanie pliku PDF oraz wyświetlenie jego podglądu. Aplikacja będzie typu one page i ma składać się z komponentów: App.js, który zarządza aplikacją oraz /components/UploadForm.js, gdzie znajdować się będzie strefa drag and drop oraz przycisk dla wrzucania plików pdf, a także /components/PdfViewer.js, który będzie odpowiedzialny za wyświetlanie pliku pdf przy pomocy biblioteki react-pdf-viewer. Wszystkie style będą pisane w pliku /styles/style.scss. Zacznijmy od komponentu UploadForm.js. Niech aplikacja będzie w minimalistycznym, eleganckim stylu. UploadForm ma mieć oznaczoną strefę drag and drop przy pomocy dashed border. Na środku niech znajduje się duży, pogrubiony napis "PDFViewer" z ozdobnym box-shadow. W prawym górnym rogu ma znajdować się ikonka z dowolnej biblioteki react - okrąg z znakiem zapytania w środku, która po naciśnięciu będzie otwierać /component/InfoModal.js z krótką instrukcją obsługi aplikacji. Pod tytułowym napisem niech będzie krótki opis z instrukcją dla użytkownika np. "Przeciągnij pliki pdf lub naciśnij przycisk by wybrać pliki, by wyświetlić podgląd PDF". Pod tymi napisami niech będzie prostokątny przycisk z napisem "Prześlij plik". Użyj #00b8ff.

> Na początek sprawmy, by strefa drag and drop była na całą szerokość i wysokość przeglądarki. Ikonka otwierająca modal ma być przy tytule strony. Natomiast tytuł ma mieć efekt boxshadow dla czcionki, a nie dla całego h1 (drop-shadow). Tytuł oraz przycisk mają korzystać z koloru "primary" zapisanego w /styles/_variables.scss.

> Popraw komponent, by całość znajdowała się w jeszcze jednym divie z paddingiem 20px. W całej aplikacji pamiętaj o responzywności.

> Stwórz komponent InfoModal.js z instrukcją działania.

> Dodajmy obsługę Modala w UploadForm.js

> Stwórz komponent PdfViewer.js, niech na górze strony znajduje się tytuł w takim samym stylu jak w UploadForm, następnie ma być widoczny podgląd pdf. Pod podglądem niech będzie przycisk pozwalajacy na powrót do UploadForm.js (dodamy do niego obsługę w App.js)

> Błąd: The API version "4.8.69" does not match the Worker version "3.11.174".

> Popraw komponent PdfViewer aby podgląd pdf zawierał opcje przybliżania, oddalania, przejścia stron oraz opcje fullscreen. Niech .pdf-preview będzie mniejszy (pamiętaj o responsywności).

> Ma być tylko przybliżanie, przechodzenie stron i fullscreen. Usuń pozostałe opcje

> Czy tooltipy dla podgladu pdf moga byc po polsku?

> Stwórz oddzielny plik w /utils

> tooltipy nadal są po angielsku

> Skorzystaj z react-icons dla nowych przycisków akcji

> Zmień przycisk "powrót" na "Wgraj inny plik" oraz dodaj odpowiednią ikonę

> Świetnie! Teraz dodaj backend do tej aplikacji (Node). Stwórz plik index.js, routes/api.js, actions/fileActions.js które pozwalają na upload pliku pdf. Następnie sprawimy, by plik nie był przechowany w przeglądarce lecz pobierany z backendu.

> Zaktualizuj frontendowe komponenty

> Użyj axios

> Stwórz upload progress przy wgrywaniu pliku

> Popraw by drag zone było w divie upload-fullscreen oraz by podczas isDragActive tło zmieniało się na niebieskie, a na środku pojawił się napis z odpowiednią ikonką "upuść plik"