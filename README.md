# Imgir

This project is intended as a solution for the teachaway frontend coding challenge. It is a simple implementation of an Imgur gallery viewer, powered by the [Imgur API](https://apidocs.imgur.com/).

## Running the project locally

In order to run the project locally, you need to follow these steps

1. Clone the project from github

```bash
git clone https://github.com/rinald/teachaway-coding-challenge.git
```

2. Move to the project directory and install project dependencies

```bash
cd teachaway-coding-challenge && npm install
```

3. Create a file named `.env` and insert the following line

```
REACT_APP_CLIENT_ID=<your-client-id>
```

where `<your-client-id>` should be replaced by your Imgur API Client ID.

In order to get a Client ID, you need to register an app at https://api.imgur.com/oauth2/addclient. After signing in, under `Authorization type` select `Anonymous usage without user authorization`.

4. Run the project

```bash
npm start
```

**Note**: When running the project, a broser tab will automatically open at `localhost:3000`. Due to limitations of the Imgur API, in order to view the working app, you should access the app from the second link shown on the terminal instead ( e.g., `On Your Network: http://...`)
