export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

export const todayDate = [year, month, day].join("-");

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + Number(days));
  return result.toISOString().slice(0, 10);
};
