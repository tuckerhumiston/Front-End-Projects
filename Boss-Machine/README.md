# Boss Machine

## Project Overview
For this project, I created an API using Express.js for an existing frontend to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. The API allows users to manage their 'minions', their brilliant 'million-dollar ideas', and handle all the meetings that keep getting added to their busy schedule.

## Getting Started
Once you have the project downloaded, you'll need to run some terminal commands to get the application started. First, open the root project directory in your terminal. Run `npm install` to install the dependencies of this project and build the front-end application. Once it has finished installing, you can run `npm run start` to begin your server. You'll see `Server listening on port 4001` in the terminal. The `npm run start` script will automatically restart your server whenever you make changes to the **server.js** file or **server/** folder. If you want to turn this off, simply start your server with the `node server.js` command. You can kill either process with the `Ctrl + C` command.

## Routes created by me

/api/minions
- GET /api/minions: Get an array of all minions.
- POST /api/minions: Create a new minion and save it to the database.
- GET /api/minions/:minionId: Get a single minion by ID.
- PUT /api/minions/:minionId: Update a single minion by ID.
- DELETE /api/minions/:minionId: Delete a single minion by ID.

/api/ideas
- GET /api/ideas: Get an array of all ideas.
- POST /api/ideas: Create a new idea and save it to the database.
- GET /api/ideas/:ideaId: Get a single idea by ID.
- PUT /api/ideas/:ideaId: Update a single idea by ID.
- DELETE /api/ideas/:ideaId: Delete a single idea by ID.
/api/meetings

- GET /api/meetings: Get an array of all meetings.
- POST /api/meetings: Create a new meeting and save it to the database.
- DELETE /api/meetings: Delete all meetings from the database.


## Custom Middleware
I created a custom middleware function checkMillionDollarIdea in server/checkMillionDollarIdea.js. This function ensures that any new or updated ideas are still worth at least one million dollars. The total value of an idea is calculated as the product of its numWeeks and weeklyRevenue properties.




