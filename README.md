
<h1 align="center">Unkey Node.js Example</h1>
<p align="center">
  <img alt="GitHub Actions Status" src="https://github.com/sondr3/astro-compressor/workflows/pipeline/badge.svg" />
</p>

<p align="center">
  This is an example of how to use the Unkey API with NestJS.
</p>

<details>
<summary>Table of Contents</summary>
<br />

## Table of Contents

- [Quickstart](#quickstart)
  - [Create a root key](#create-a-root-key)
  - [Create your API](#create-your-api)
  - [Create your first API key](#create-your-first-api-key)
  - [Set up the example](#set-up-the-example)

## Quickstart

### Create a root key

1. Go to /settings/root-keys and click on the "Create New Root Key" button.
2. Enter a name for the key.
3. Select the following workspace permissions: create_key, read_key, encrypt_key and decrypt_key.
4. Click "Create".

### Create your API

1. Go to <https://app.unkey.com/apis> and click on the "Create New API" button.
2. Give it a name.
3. Click "Create".

### Create your first API key

1. Click "Create Key" in the top right corner.
2. Feel the form with any key information you want or leave it empty.
3. Click "Create"
4. Copy the key and save it somewhere safe.

### Set up the example

1. Clone the repository to your local machine.

```bash

git clone <repo-url>
cd /path/to/repo

```

2. Duplicate the `.env.example` file and rename it to `.env`.

```bash

cp .env.example .env

```

3. Replace your API key in the `.env` file.

4. Install the dependencies.

```bash

pnpm install

```

5. Run the application.

```bash

pnpm run start

```

6. Test the public route as a guest:

```bash

curl http://localhost:3000/api/v1/public

```

7. Test the protected route, which requires valid authorization:

```bash

curl http://localhost:3000/api/v1/protected -H "Authorization: Bearer <YOUR_API_KEY>"

```
