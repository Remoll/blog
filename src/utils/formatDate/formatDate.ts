import { parseISO, format, isValid } from "date-fns";
import translations from "@/locates/pl/translations.json";

function formatDate(isoString: string): string {
  const date = parseISO(isoString);
  if (!isValid(date)) {
    return translations["errorWrongDateFormat"];
  }
  return format(date, "dd.MM.yyyy");
}

export default formatDate;
