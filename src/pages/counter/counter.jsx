import React, { useReducer } from 'react';
import { View } from '@tarojs/components';
function Counter() {
  // 使用 useReducer Hook
  const [state, dispatch] = useReducer(counterReducer, { count: 1 });
  function counterReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  return (
    <View>
      <text>Count: {state.count}</text>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </View>
  );
}

export default Counter;
