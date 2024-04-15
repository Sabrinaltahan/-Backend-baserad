// Importera nödvändiga paket
const express = require("express"); // Importera Express.js för att skapa en webbserver
const mysql = require("mysql"); // Importera MySQL-paketet för att hantera databasen

// Skapa en Express-app
const app = express(); 
const PORT = 3001; // Ange portnummeret för servern

// Använd statiska filer i "public" mappen för frontend
app.use(express.static("public"));

// Använd JSON-parser för att tolka inkommande JSON-data
app.use(express.json()); 

// Lyssna på angivet portnummer och skriv ut en bekräftelse
app.listen(PORT, () => {
    console.log("Express-servern körs på port nummer: " + PORT);
}); // Lägg till en punkt här för slutet på kommentaren

// Skapa en anslutning till MySQL-databasen
const connection = mysql.createConnection({
    host: "sql6.freemysqlhosting.net", // Värd för databasservern
    port: 3306, // Port för databasanslutning
    user: "sql6699251", // Användarnamn för databasanslutning
    password: "VlbbgfbCL9", // Lösenord för databasanslutning
    database: "sql6699251" // Namnet på den databas som ska användas
}); 

// Hantera anslutningsstatus
connection.connect((err) => {
    if (!err) {
        console.log("DB anslutningen lyckades"); // Visa meddelande vid lyckad anslutning
    } else {
        console.log("DB anslutningen misslyckades: " + JSON.stringify(err, undefined, 2)); // Visa felmeddelande vid misslyckad anslutning
    }
}); 

// Hämta alla kurser från databasen och returnera dem som JSON-data
app.get("/fetch-all-courses", (req, res) => {
    connection.query("SELECT * FROM `courses`", (err, rows, fields) => {
        res.json(rows);
    });
}); 

// Lägg till en ny kurs i databasen med uppgifter från inkommande begäran
app.post("/create", (req, res) => {
    const body = req.body; // Hämta JSON-data från inkommande begäran
    if(!body){
        return res.sendStatus(400); // Returnera felstatus om ingen data skickades
    }
    // Utför en SQL-fråga för att lägga till en ny kurs med informationen från inkommande begäran
    connection.query("INSERT INTO `courses` SET ?", {
        course_code: body.course_code, 
        course_name: body.course_name, 
        syllabus: body.syllabus,
        progression: body.progression 
    }, (err, row, field) => {
        if(err) throw err; // Kasta ett fel om det uppstår ett fel
        res.sendStatus(200); // Returnera framgångsstatus om kursen har lagts till
    })
})

// Ta bort en befintlig kurs från databasen med hjälp av kursens ID
app.delete("/delete", (req, res) => {
    const id = req.body.id; // Hämta kursens ID från inkommande begäran
    if(!id){
        return res.sendStatus(400); // Returnera felstatus om inget ID skickades
    }
    // Utför en SQL-fråga för att ta bort kursen med det angivna ID:et
    connection.query("DELETE FROM `courses` WHERE id=" + id, (err, row, fields) => {
        if(err) throw err; // Kasta ett fel om det uppstår ett fel
        res.sendStatus(200); // Returnera framgångsstatus om kursen har tagits bort
    })
})

// Hämta en specifik kurs från databasen med hjälp av kursens ID och returnera den som JSON-data
app.get("courses/:id", (req, res) => {
    const id = req.params.id; // Hämta kursens ID från URL:en
    if(!id){
        return res.sendStatus(400); // Returnera felstatus om inget ID angavs
    }
    // Utför en SQL-fråga för att hämta kursen med det angivna ID:et
    connection.query("SELECT FROM `courses` WHERE id=" + id, (err, row, fields) => {
        if(err) throw err; // Kasta ett fel om det uppstår ett fel
        res.json(rows); // Returnera kursen som JSON-data
    })
})
