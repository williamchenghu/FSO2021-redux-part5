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
