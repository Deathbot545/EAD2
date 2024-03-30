const monthNameGenerator = (counter) => {
  const monthNames = [
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

  if (counter > monthNames.length) {
    return [];
  }
  return monthNames.slice(0, counter);
};

const dateGenerator = (counter) => {
  return Array.from({ length: counter }, (_, k) => k + 1);
};

export { monthNameGenerator, dateGenerator };
