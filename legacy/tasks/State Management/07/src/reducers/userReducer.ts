import { UserState, UserAction } from '../types/User';

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  saving: false,
  saveError: null,
};

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };

    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'SELECT_USER':
      return {
        ...state,
        selectedUser: action.payload,
      };

    case 'UPDATE_USER_START':
      return {
        ...state,
        saving: true,
        saveError: null,
      };

    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        saving: false,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
        selectedUser: action.payload,
        saveError: null,
      };

    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        saving: false,
        saveError: action.payload,
      };

    case 'CLEAR_SELECTED_USER':
      return {
        ...state,
        selectedUser: null,
        saveError: null,
      };

    default:
      return state;
  }
}
