function randColor () {
    let c = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if(c.length != 7) c = randColor();
    return c;
};

module.exports = randColor