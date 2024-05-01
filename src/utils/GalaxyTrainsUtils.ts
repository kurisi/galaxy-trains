export function isDateTodayOrLater(date: Date): Boolean {
  const today = new Date();
  return date.getTime() === today.getTime() || date.getTime() > today.getTime();
}

export function isEndDateAfterStartDate(
  startDate: Date,
  endDate: Date
): Boolean {
  return endDate.getTime() > startDate.getTime();
}

export function validate(
  startDate: Date,
  endDate: Date,
  ticketType: String
): Boolean {
  if (ticketType === "Single") {
    return (
      startDate !== null &&
      isDateTodayOrLater(startDate)
    );
  } else {
    return (
      startDate !== null &&
      endDate !== null &&
      isDateTodayOrLater(startDate) &&
      isEndDateAfterStartDate(startDate, endDate)
    );
  }
}

export function format(date: Date): String {
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
