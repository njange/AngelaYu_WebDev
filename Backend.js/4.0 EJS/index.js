import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let advice = "Work hard";

    if (day === 0 || day === 6) {
        type = "a weekend";
        advice = "Party hard";
    }

    res.render('index.ejs', {dayType: "a weekday", advice: "Take it easy"});
    }); 


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });
