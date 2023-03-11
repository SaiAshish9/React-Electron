```
Electron 11

npx create-react-app react-electron

yarn add electron concurrently wait-on cross-env

since we don't want application to be opened at browser we can sef cross-env
BROWSER=none

we will wait till react starts at port 3000, (yarn start) when electron starts 
it will look at package.json 
for the js entrypoint

we'll use IPC (Interprocess Communication) for the communication between react 
index.js and electron main.js
```

<img width="1254" alt="Screenshot 2023-03-11 at 11 37 28 PM" src="https://user-images.githubusercontent.com/43849911/224504681-b30aa0af-6bc1-4311-97ec-b611b793c380.png">

```
electron has a library for common operations. We can install that via:

yarn add @electron/remote
```
