const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const generateId = (length = 6) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    i < 2
      ? (result += characters.charAt(
          Math.floor(Math.random() * 27)
        ))
      : (result += characters.charAt(
        Math.floor(Math.random() * (37 - 27 + 1) + 27)
        ));
  }

  return result;
};
