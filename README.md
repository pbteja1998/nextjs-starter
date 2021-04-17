# nextjs-starter

A Next.js starter kit template with React 17 + Typescript + Tailwind CSS 2 + React Query 3 + NextAuth.js (with GitHub Auth + Passwordless Auth) + Fauna DB

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Demo

- [Website](https://next-starter.bhanuteja.dev)
- [Blog Post](https://blog.bhanuteja.dev/nextjs-starter-with-authentication-react-17-typescript-tailwind-css-2-eslint?guid=36ac22f4-9641-432a-8837-5ac2f435667a&deviceId=c9650ad1-b0e8-451d-90f0-0df5bab42027)(old)
  - Will be replaced with new blog post soon.

## Run Locally

- Clone the project

  ```bash
    git clone https://github.com/pbteja1998/nextjs-starter.git
  ```

- Go to the project directory

  ```bash
    cd nextjs-starter
  ```

- Install dependencies

  ```bash
    yarn
  ```

- Create .env.local and change env variables as per the [instructions](#environment-variables).

  ```bash
    cp .env.example .env.local
  ```

- Setup the database by running the following command and pasting the Fauna Secret key when prompted. More details at [fauna-schema-migrate](https://github.com/fauna-brecht/fauna-schema-migrate).

  ```bash
    yarn setup-db
  ```

- Start the server

  ```bash
    yarn dev
  ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

- `NEXTAUTH_URL`
  - This is the your application URL. Locally, you can set this to `http://localhost:3000`
- `SECRET`
  - Set this to any randomly generated string
- `EMAIL_SERVER`
  - This is the email server string. It's in the format of `smtp://username:password@smtp.example.com:587`. Replace `username`, `password` and `smtp.example.com` with your own credentials.
- `EMAIL_FROM`
  - Your email address from which you are sending emails.
- `GITHUB_ID`
- `GITHUB_SECRET`
  - You need to create a GitHub OAuth App, and get the GITHUB_ID AND GITHUB_SECRET from that app.
  - You can follow [these instructions](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).
  - When creating an oauth app for local development, you can set the `Homepage URL` to `http://localhost:3000` and `Authorization Callback URL` to `http://localhost:3000/api/auth/callback/github`
- `LINKEDIN_ID`
- `LINKEDIN_SECRET`
  - You need to create an oauth app for LINKEDIN. You can set the callback URL to `http://localhost:3000/api/auth/callback/linkedin`
- `FAUNADB_SECRET`
  - Create a new fauna server key and set this variable to that key

## FAQ

### How to run Fauna locally?

**Please note that this is completely optional. You can directly create your database in Fauna cloud and directly use the secret you generate there.**

We are using [Fauna Dev](https://docs.fauna.com/fauna/current/integrations/dev) docker container to run Fauna instance locally.

These are the instructions to setup Fauna container locally.

```bash
# Pull the latest Docker container:
docker pull fauna/faunadb:latest

# Verify that the container executes correctly:
docker run fauna/faunadb --help
```

After you installed this, you can start the container using the following command

```bash
docker run --rm --name faunadb -p 8443:8443 -p 8084:8084 fauna/faunadb
```

Please note that this will create a new instance of Fauna everytime you run it, and all the data will be cleared when you stop this container. For other config options and approaches, go through the [documentation](https://docs.fauna.com/fauna/current/integrations/dev).

**Changes you need to do in the template:**

- You have to set `USE_FAUNA_DOCKER=true` in your `.env.local` file
- Everytime you start the docker container, you need to first apply the migrations. You can do it by running `yarn setup-docker-db`.
- More details at [fauna-schema-migrate](https://github.com/fauna-brecht/fauna-schema-migrate) and [Fauna Dev](https://docs.fauna.com/fauna/current/integrations/dev).

## Feedback & Support

For feedback and support, please [open an issue](https://github.com/pbteja1998/nextjs-starter/issues/new) in this repo.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Roadmap

**TBD**

## Contributing

**TBD**

## Deploying

### Vercel

**TBD**

### Netlify

**TBD**
