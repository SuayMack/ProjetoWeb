const Database = require('sqlite-async')

function execute(db) {
    //criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS classe_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id TEXT,
            weekday TEXT,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
    //rodar no servidor:
    //node src/database/db.js
} 

Database.open(__dirname + '/database.sqlite').then(execute)