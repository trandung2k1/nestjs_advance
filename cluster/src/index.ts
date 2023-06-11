import express, { Express } from 'express';
const port: number = 4000;
const app: Express = express();
import cluster from 'cluster';
import os from 'os';
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to the server',
    });
});
if (cluster.isMaster) {
    const cores = os.cpus().length;
    console.log(`Total cores: ${cores}`);
    console.log(`Primary process ${process.pid} is running`);
    for (let i = 0; i < cores; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker: Worker) => {
        console.log(`Worker ${worker} has been killed`);
        console.log('Starting another worker');
        cluster.fork();
    });
} else {
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
        console.log(`Server started with worker ${process.pid}`);
    }).on('error', (error) => {
        console.log(error.message);
    });
}
