# Client Server Tutorium
This app is used to tutor client server architecture.

It is a simple poll app that allows users to create polls and vote on them.

>On the [main branch](https://github.com/Jasaka/client-server-tutorium) you can find the finished app. You can use the commits to see the changes step by step.

>On this [start branch](https://github.com/Jasaka/client-server-tutorium/tree/start) you can find the app without any logic. This is the perfect place to start with your own implementation.

## Usage

### Installation
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [DockerDesktop](https://www.docker.com/products/docker-desktop)
3. Install dependencies: `npm install`
4. Copy the `dist.env` file to `.env` and fill in any values

### Run
1. Start the dockerized database: `docker-compose up`
2. Start the server: `npm run dev`

You can now access the client at [http://localhost:3000](http://localhost:3000)

### Prisma
Prisma is used to generate the database schema and to access the database.

#### Generate database schema
1. Start the dockerized database: `docker-compose up`
2. Run `npx prisma init` to initialize the prisma configuration
3. Fill the schema in `prisma/schema.prisma`
4. Generate the migration for your defined schema with: `npx prisma migrate dev --name {migration-name}`

From now on, you can use the prisma client to access the database.

Every time you change the schema, you have to generate a new migration with `npx prisma migrate dev --name {migration-name}`.

## Structure

### Logic
The app is split into two parts: the server and the client.
Views are rendered on the server and the client only sends requests to the server.
Post requests are used to modify the database and trigger window reloads.

In this example, there are two entities: polls and votes.
- A poll has many votes.
    - A poll has a name.
- A vote belongs to a poll.
    - A vote has a voted option.
        - Voted options are either `YES`, `NO` or `ABSTENTION`.
    - A vote has a voter name.
    - A vote has a poll id.

### Files
- `docker-compose.yml` contains the configuration for the dockerized database
- `prisma/` contains the prisma configuration and the database schema as well as the migrations
- `src/` contains the source code
- `src/config.js` contains the configuration for the server and exports it, split into express-related (`server`) and prisma-related (`prisma`) configuration
- `src/server.js` contains the routes and imports the configuration
- `src/views/` contains the handlebars templates
- `src/public/` contains the static files
- `src/queries` contains the prisma queries

## Used technologies
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [handlebars](https://handlebarsjs.com/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)