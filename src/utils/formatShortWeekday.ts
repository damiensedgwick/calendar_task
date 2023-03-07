export const formatShortWeekday = (locale: string, date: Date) => {
  return date.toLocaleDateString(locale, { weekday: "short" })[0];
};
