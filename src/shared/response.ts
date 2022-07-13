export const success = (value?: any) => {
  return {
    value,
    isSuccess: () => true,
    isError: () => false,
  };
};

export const error = (value?: any) => {
  return {
    value,
    isSuccess: () => false,
    isError: () => true,
  };
};
