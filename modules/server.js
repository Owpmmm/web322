const express = require("express");
const legoData = require("./legoSets");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Assignment 2: Jiyoon Kim - 154653208`);
});

app.get("/lego/sets", (req, res) => {
    res.json(legoData.getAllSets());
});

app.get("/lego/sets/num-demo", (req, res) => {
    const setNum = "001-1"; 
    const set = legoData.getSetByNum(setNum);
    if (set) {
        res.json(set);
    } else {
        res.status(404).send("Unable to find requested set");
    }
});

app.get("/lego/sets/theme-demo", (req, res) => {
    const theme = "tech";  
    const sets = legoData.getSetsByTheme(theme);
    if (sets.length > 0) {
        res.json(sets);
    } else {
        res.status(404).send("Unable to find requested sets");
    }
});

async function startServer() {
    try {
        await legoData.initialize();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Error initializing lego data:", err);
    }
}

startServer();
