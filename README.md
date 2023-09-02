# home-assignment-boilerplate


## Initialize Project

1. Install dependencies `yarn`
2. Run docker container `docker-compose up`
3. Migrate prisma to database `yarn db:up`
4. Run `yarn db:generate-prisma` to generate GraphQL types based on Prisma schema
5. Run `yarn graphql:emit-schema` to generate GraphQL schema
5. Run `yarn graphql:generate-client` to generate GraphQL client helpers


## Create new Migration with Prisma
Any prisma file changes will require to run migration to generate SQL migration.
To do so just run `yarn db:migrate`. To apply migration run `yarn db:up`.
And afterwards dont forget to run `yarn db:generate-prisma` to generate GraphQL types based on Prisma schema.
