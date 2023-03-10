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

<img width="782" alt="Screenshot 2023-03-11 at 11 51 50 PM" src="https://user-images.githubusercontent.com/43849911/224505203-529e4bc2-9e97-4cf6-8ba6-a1eeda13f64e.png">

```
electron has a library for common operations. We can install that via:

yarn add @electron/remote
```

```

npx create-react-app react-electron

yarn add electron concurrently wait-on cross-env

yarn electron:serve

yarn build
yarn electron:build
```

<img width="1436" alt="Screenshot 2023-03-11 at 11 50 32 PM" src="https://user-images.githubusercontent.com/43849911/224505164-008ba489-78dc-4cb5-9f0c-4a7ed501ad97.png">

<img width="1787" alt="Screenshot 2023-03-12 at 1 10 44 AM" src="https://user-images.githubusercontent.com/43849911/224508379-853ac764-d9d7-4f36-95c8-4a7189f75d9f.png">

<img width="692" alt="Screenshot 2023-03-11 at 11 41 35 PM" src="https://user-images.githubusercontent.com/43849911/224504844-ffca1bf3-b4ce-4d96-a09d-c1cabb0ba47e.png">

<img width="1025" alt="Screenshot 2023-03-11 at 11 42 41 PM" src="https://user-images.githubusercontent.com/43849911/224504887-85c3fb93-0c98-421e-aec5-93ac1b7f81dc.png">


```
Sometimes it's not as straight forward to build on various OS. we can use build pipelines like travisCI and circleCI in such scenarios.
```

<img width="1221" alt="Screenshot 2023-03-11 at 11 55 37 PM" src="https://user-images.githubusercontent.com/43849911/224505347-92e81858-afcf-452d-966f-71be728e3496.png">

<img width="746" alt="Screenshot 2023-03-11 at 11 57 07 PM" src="https://user-images.githubusercontent.com/43849911/224505397-66a10319-a508-4efb-970b-dddb03b6066b.png">


