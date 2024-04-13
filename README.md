# -Backend-baserad
## CV Webapplikation

Detta projekt är en webbapplikation som låter användare skapa sitt CV och visa de kurser de har tagit. Applikationen erbjuder en användarvänlig och interaktiv gränssnitt för att lägga till, redigera och ta bort kurser.

### Projektets Komponenter

1. **index.js**: Denna fil är huvudfilen för servern, där Express.js används för att skapa en webbserver och interagera med MySQL-databasen för att hämta och lagra data.

2. **script.js**: Denna fil innehåller JavaScript för att interagera med användargränssnittet på klientens sida, där kurser hämtas och begäran skickas för att lägga till eller ta bort kurser.

3. **index.html**: Denna fil innehåller det primära användargränssnittet för applikationen, som visar en introduktion till applikationen och instruktioner för användning.

### Viktiga steg för att köra applikationen

1. **Installera nödvändiga bibliotek**: Du måste installera Express.js och MySQL-biblioteket på servern.

2. **Starta servern**: Servern startas med kommandot `node index.js`, och applikationen är kopplad till port 3001.

3. **Utforska applikationen**: När servern har startats kan du öppna webbläsaren och gå till `http://localhost:3001` för att visa huvudanvändargränssnittet för applikationen.

### Huvudfunktionerna i applikationen

- **Lägga till en kurs**: Användare kan lägga till en ny kurs genom att klicka på länken "Klicka här" i avsnittet "Vad vill du göra?".

- **Visa kurser**: En lista över alla tillagda kurser visas på huvudsidan för applikationen, där användare kan granska kursinformation och hantera dem.

- **Ta bort en kurs**: Användare kan ta bort en befintlig kurs genom att klicka på länken "Klicka här" i avsnittet "Vad vill du göra?".

### Beroenden

- **Express.js**: Ett ramverk för att utveckla webbapplikationer med Node.js.

- **MySQL**: Ett databashanterningssystem för att hantera databaser på servern.

- **Font Awesome**: En ikonbibliotek för att ge applikationen högkvalitativa ikoner.

