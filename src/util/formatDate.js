export const formatDate= (dateString) => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = `${months[date.getMonth()]} ${date
    .getDate()
    .toString()
    .padStart(2, "0")}, ${date.getFullYear()}`;

  return formattedDate;
};
