import express, { Express } from 'express';
const port: number = 4000;
const app: Express = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to the server',
    });
});
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
}).on('error', (error) => {
    console.log(error.message);
});
