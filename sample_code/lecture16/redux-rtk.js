const {
  configureStore,
  createReducer,
  createSlice
} = require('@reduxjs/toolkit');

const initialState = {
  count: 0
};

// const counter = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: state => {
//       state.count += 1;
//     },
//     decrement: state => {
//       state.count -= 1;
//     },
//     reset: state => {
//       state.count = 0;
//     }
//   }
// });

// const store = configureStore({ reducer: counter.reducer });

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = createReducer(initialState, {
  [INCREMENT]: state => {
    state.count += 1;
  },
  [DECREMENT]: state => {
    state.count -= 1;
  },
  [RESET]: state => {
    state.count = 0;
  }
});

// const reducer = createReducer(initialState, builder => {
//   builder.addCase([INCREMENT], state => {
//     state.count += 1;
//   });
//   builder.addCase([DECREMENT], state => {
//     state.count -= 1;
//   });
//   builder.addCase([RESET], state => {
//     state.count = 0;
//   });
// });

const store = configureStore({ reducer });

store.subscribe(() => {
  console.log('current state:', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
