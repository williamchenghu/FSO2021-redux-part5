# FullStackOpen2021-backend

Redux exercises (part6) of Full Stack Open 2021.

This repo is used for excercises handing-in.

## Exercises 6.1.-6.2.

### Step 1

Before implementing the functionality of the UI, let's implement the functionality required by the store.
We have to save the number of each kind of feedback to the store, so the form of the state in the store is:

```json
{
  "good": 5,
  "ok": 4,
  "bad": 2
}
```

The project has the following base for a reducer:

```javascript
const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GOOD':
      return state;
    case 'OK':
      return state;
    case 'BAD':
      return state;
    case 'ZERO':
      return state;
  }
  return state;
};

export default counterReducer;
```

and a base for its tests

```javascript
import deepFreeze from 'deep-freeze';
import counterReducer from './reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  test('should return a proper initial state when called with undefined state', () => {
    const state = {};
    const action = {
      type: 'DO_NOTHING',
    };

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('good is incremented', () => {
    const action = {
      type: 'GOOD',
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });
});
```

Implement the reducer and its tests.

In the tests, make sure that the reducer is an _immutable function_ with the _deep-freeze-library_. Ensure that the provided first test passes, because Redux expects that the reducer returns a sensible original state when it is called so that the first parameter _state_, which represents the previous state, is _undefined_.

Start by expanding the reducer so that both tests pass. Then add the rest of the tests, and finally the functionality which they are testing.

A good model for the reducer is the [redux-notes](https://fullstackopen.com/en/part6/flux_architecture_and_redux#pure-functions-immutable) example above.

### Step 2

Now implement the actual functionality of the application.

Note that since all the code is in the file _index.js_ and you might need to manually reload the page after each change since the automatic reloading of the browser content does not always work for that file!

## Exercises 6.3.-6.8.

Let's make a new version of the anecdote voting application from part 1. Take the project from this repository [https://github.com/fullstack-hy2020/redux-anecdotes](https://github.com/fullstack-hy2020/redux-anecdotes) to base your solution on.

If you clone the project into an existing git-repository, remove the _git-configuration_ of the cloned application:

```bash
cd redux-anecdotes  // go to the cloned repository
rm -rf .git
```

The application can be started as usual, but you have to install the dependencies first:

```bash
npm install
npm start
```

### Step 3

Implement the functionality for voting anecdotes. The amount of votes must be saved to a Redux-store.

### Step 4

Implement the functionality for adding new anecdotes.

You can keep the form uncontrolled, like we did [earlier](https://fullstackopen.com/en/part6/flux_architecture_and_redux#uncontrolled-form).

### Step 5

Make sure that the anecdotes are ordered by the number of votes.

### Step 6

If you haven't done so already, separate the creation of action-objects to [action creator](https://read.reduxbook.com/markdown/part1/04-action-creators.html)-functions and place them in the _src/reducers/anecdoteReducer.js_ file, so do like we have been doing since the chapter [action creators](https://fullstackopen.com/en/part6/flux_architecture_and_redux#action-creators).

### Step 7

Separate the creation of new anecdotes into its own component called _AnecdoteForm_. Move all logic for creating a new anecdote into this new component.

### Step 8

Separate the rendering of the anecdote list into its own component called _AnecdoteList_. Move all logic related to voting for an anecdote to this new component.

Now the _App_ component should look like this:

```javascript
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};

export default App;
```
