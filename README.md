## TypeScript + API Testing
This is my sample code structure for running automated API testing written for Typescript code.

Give a ⭐️ if this project helped you!


## Prerequisites
```
NodeJs 
```


## How to use

```
1. clone the project and go to it's folder on terminal
2. type `npm install`
3. type `npm run test`
4. enjoy
```

# How it is structured

```
.
src
├── base/
├── model/
├── test/
```

- `base`: Think of this as a "framework". Ideally should be a separate module distributed on `npm`. All general settings and initial configuration that are re-used by tests
- `model`: These are your `API Object` models. Likewise POM, each endpoint of your application should have a API Object that maps all the actions
- `test`: All your TDD-style/classes test goes here 

