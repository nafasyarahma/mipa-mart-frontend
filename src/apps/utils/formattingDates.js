import { format, } from "date-fns"

const formatingDates = (date) => {
  const newDate = new Date(date);
  const formattedDate = format(newDate, 'dd-MM-yyyy HH:mm:ss');

  return formattedDate;
}

export default formatingDates;