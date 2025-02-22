import { parseISO, format } from "date-fns";

function formatDate(isoString: string): string {
  const date = parseISO(isoString);
  return format(date, "dd.MM.yyyy");
}

export default formatDate;
