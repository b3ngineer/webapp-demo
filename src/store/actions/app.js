const actions = {
  ERROR: "ERROR",
  WARNING: "WARNING",
  triggerError: error => ({
    type: actions.ERROR,
    error
  }),
  triggerWarning: warning => ({
    type: actions.WARNING,
    warning
  })
};
export default actions;
