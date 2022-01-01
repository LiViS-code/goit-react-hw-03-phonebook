export const theme = Object.freeze({
  colors: {
    primaryColor: "#080872",
    reverseColor: "#ffffff",
    accentColor: "#F7CC07",

    disabledColor: "#666666",
    outlineColor: "#F7CC07",
    backgroundColor: "#F7F5F9",
    backgroundColorForm: "#E3DEE9",
    borderDisabledColor: "#999999",
    backgroundDisabledColor: "#cccccc",
    boxShadow: `4px 4px 8px 0px rgba(34, 60, 80, 0.2)`,
  },
  transition: {
    timing: "250ms",
    timingFunction: `cubic-bezier(0.075, 0.82, 0.165, 1)`,
  },

  spacing: (value) => `${4 * value}px`,
});
