const app = require('./app');

const PORT = 4000;


app.listen(PORT, () => {
    console.log(`Express server started at http://localhost:${PORT}`);
});