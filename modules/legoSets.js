const setData = require("../data/setData.json");
const themeData = require("../data/themeData.json");

let sets = [];

function initialize() {
    setData.forEach(set => {
        const theme = themeData.find(theme => theme.id === set.theme_id).name;
        sets.push({ ...set, theme });
    });
}

function getAllSets() {
    return sets;
}

function getSetByNum(setNum) {
    return sets.find(set => set.set_num === setNum);
}

function getSetsByTheme(theme) {
    const themeLowerCase = theme.toLowerCase();
    return sets.filter(set => set.theme.toLowerCase().includes(themeLowerCase));
}

initialize();

module.exports = {
    initialize,
    getAllSets,
    getSetByNum,
    getSetsByTheme
};
