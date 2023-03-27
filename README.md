# Client Server Tutorium
This app is used to tutor client server architecture.

It is a simple poll app that allows users to create polls and vote on them.

## Used technologies
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [handlebars](https://handlebarsjs.com/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

## Usage

### Installation
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [DockerDesktop](https://www.docker.com/products/docker-desktop)
3. Install dependencies: `npm install`

### Run
1. Start the dockerized database: `docker-compose up`
2. Start the server: `npm run dev`

You can now access the client at [http://localhost:3000](http://localhost:3000)
The api is available at [http://localhost:3000/api](http://localhost:3000/api)

### Prisma
Prisma is used to generate the database schema and to access the database.

#### Generate database schema
1. Start the dockerized database: `docker-compose up`
2. Fill the schema in `prisma/schema.prisma`
3. Generate the migration for your defined schema with: `npx prisma migrate dev --name {migration-name}`