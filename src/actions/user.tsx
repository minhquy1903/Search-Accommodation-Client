const login = (payload: any) => {
  return {
    type: 'LOGIN',
    payload: payload,
  };
};

export { login };
