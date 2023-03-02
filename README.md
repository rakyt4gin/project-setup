## Architecture

Kwikwins follows this architecture:

````
src
│
└───  assets                   ##  used to store images, svgs and fonts.
│          │
|          └─── img                   ##  used to store png/jpg/jpeg
│          |
|          └─── font                  ##  used to store fonts
│          │
|          └─── svg                   ##  used to store svg images and
│
└───  components               ##  used to store components
│
└───  constants                ##  used to store constants(enums & etc.)
│
└───  data                     ##  used to store data(routes & etc.)
│
└───  helpers                  ##  used to store helpers function
│
└───  hooks                    ##  used to store hooks
│
└───  pages                    ##  used for different pages
│
└───  services                 ##  used for independent code blocks
│            │
|            └─── api          ##  used to store plain components like Input, Button etc...
│
└───  styles                   ##  used for global scss variables, mixins and functions

## Installation

Install the dependencies and devDependencies and start the client.

```sh
git clone [rep-url]
cd [rep]
git checkout dev
npm i
npm run dev
````

## Development

In order to create a clean environment for developing you need to follow this git rules:

1.  Create a valid git branches that follows this structure:

```sh
git checkout -b [type of commitment]/[short description]-[ticket number(if you have one)]
```

For example: we have to do a feature to create user based on a ticket № 23. The git branch will look like this:

```sh
feature/user-creation-23
```

2. Before commiting and pushing to the repo, make sure to run tests, prettier and eslint

3. Assign Andrew Strigaliov for reviewers of a pull requests

<!-- ## .env -->
