const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

module.exports = app;

// app.use(express.static(public));
app.use(express.static(__dirname))

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middware for parsing request bodies here:
app.use(bodyParser.json());

// Api Route Paths
const ideasRouter = require('./server/routes/ideas.js');
app.use('/api/ideas', ideasRouter);

const meetingsRouter = require('./server/routes/meetings.js');
app.use('/api/meetings', meetingsRouter);

const minionsRouter = require('./server/routes/minions.js');
app.use('/api/minions', minionsRouter);



//Start the server
if (!module.parent) { 
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });
 }