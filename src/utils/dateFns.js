import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isBefore from 'date-fns/isBefore';
import addDays from 'date-fns/addDays';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import differenceInDays from 'date-fns/differenceInDays';

const readableDate = (date) => {
  let newDate = date;
  if (typeof date === 'string') {
    newDate = new Date(date);
  }

  const seconds = differenceInSeconds(new Date(), newDate);
  const minutes = Math.abs(Math.floor(seconds / 60));
  if (minutes <= 1) {
    return '1m';
  }

  if (minutes < 59) {
    return `${minutes}m`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours <= 23) {
    return `${hours}h`;
  }

  return format(newDate, 'MMM d');
};

export { format, isSameDay, isBefore, addDays, differenceInDays, readableDate };
