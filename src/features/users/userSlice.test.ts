import usersReducer from './usersSlice';
import { fetchUsers } from './usersSlice';


describe('users reducer', () => {
  const initialState = {
    data: [],
    loading: false,
    error: ''
  }
  it('should handle initial state', () => {
    expect(usersReducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle fetchUsers.pending', () => {
    const nextState = usersReducer(initialState, {type: fetchUsers.pending.type});
    expect(nextState.loading).toBe(true);
  });

  it('should handle fetchUsers.fulfilled', () => {
    const nextState = usersReducer(initialState, {
      type: fetchUsers.fulfilled.type,
      payload: [{ id: 1, name: 'John' }]
    });
    expect(nextState.data.length).toBe(1);
  });
})