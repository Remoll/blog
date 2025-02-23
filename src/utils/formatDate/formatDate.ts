import { parseISO, format, isValid } from "date-fns";

function formatDate(isoString: string): string {
  const date = parseISO(isoString);
  if (!isValid(date)) {
    return "Błędny format daty";
  }
  return format(date, "dd.MM.yyyy");
}

export default formatDate;
