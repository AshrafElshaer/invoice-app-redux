export const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-us", {
      day:"numeric",
      year: "numeric",
      month: "short",
    });