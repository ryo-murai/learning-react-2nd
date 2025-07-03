
export const threeSecondsToGnar = new Promise((resolves) =>
  setTimeout(() => resolves({ gnar: "gnar" }), 3000)
);