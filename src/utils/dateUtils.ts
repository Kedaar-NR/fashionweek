
import { isAfter, isBefore, addDays, addWeeks, addMonths } from 'date-fns';

/**
 * Determines the CSS class for a drop date based on proximity to current date
 * @param dateStr The date string to evaluate
 * @returns CSS class string for styling the date
 */
export const getDropDateStyle = (dateStr: string) => {
  const dropDate = new Date(dateStr);
  const today = new Date();
  const oneWeekFromNow = addDays(today, 7);
  const twoWeeksFromNow = addWeeks(today, 2);
  const oneMonthFromNow = addMonths(today, 1);

  if (isBefore(dropDate, today)) {
    return "text-muted-foreground line-through"; // Past dates
  } else if (isBefore(dropDate, oneWeekFromNow)) {
    return "text-white bg-red-500 font-bold"; // Bold white text on red background for dates within a week
  } else if (isBefore(dropDate, twoWeeksFromNow)) {
    return "text-white bg-orange-500 font-medium"; // White text on orange background for dates within two weeks
  } else if (isBefore(dropDate, oneMonthFromNow)) {
    return "text-white bg-pink-500 font-medium"; // White text on pink background for dates within a month
  } else {
    return "text-white bg-green-600 font-medium"; // White text on green background for dates over a month away
  }
};
