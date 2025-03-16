
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
    return "bg-gradient-to-r from-[#ea384c] to-[#F97316] text-white px-2 py-1 rounded font-bold"; // Within week
  } else if (isBefore(dropDate, twoWeeksFromNow)) {
    return "bg-gradient-to-r from-[#F97316] to-[#FCD34D] text-white px-2 py-1 rounded font-medium"; // Within two weeks
  } else if (isBefore(dropDate, oneMonthFromNow)) {
    return "bg-gradient-to-r from-[#FCD34D] to-[#FBBF24] text-white px-2 py-1 rounded"; // Within month
  } else {
    return "text-green-600 font-medium"; // Future dates (over a month)
  }
};
