const types = {
  LOGIN: "auth/login",
  IS_LOADING_CHANGED: "auth/isLoadingChanged"
};

const isLoadingChanged = (isLoading) => ({
  type: types.IS_LOADING_CHANGED,
  payload: isLoading
});

const login = (name, mail, city) => ({
  type: types.LOGIN,
  payload: { name, mail, city }
});

const fetchAuth = () => (dispatch) => {
  dispatch(isLoadingChanged(true));
  dispatch(login());
  dispatch(isLoadingChanged(false));
};

const initialState = {
  name: null,
  mail: null,
  city: null,
  isLoading: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      const { name, mail, city } = payload;
      if (name && mail && city) return { ...state, name, mail, city };
      return state;
    case types.IS_LOADING_CHANGED:
      const isLoading = payload;
      return { ...state, isLoading };
    default:
      return state;
  }
};

const isLoadingSelector = (state) => state.auth.isLoading;
const isAuthSelector = (state) =>
  Boolean(state.auth.name && state.auth.mail && state.auth.city);

export const authThunks = {
  fetchAuth
};

export { reducer as authReducer };

export const authSelectors = {
  isLoadingSelector,
  isAuthSelector
};
