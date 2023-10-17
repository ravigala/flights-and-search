const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index')

const setupAndStartServer = async () => {

    // create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // better way
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);

        if(process.env.SYNC_DB){
            db.sequelize.sync({aalter: true})
        }
    })

}

setupAndStartServer();