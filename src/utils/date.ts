import { parseISO, format } from "date-fns";
import { createElement } from "react";

interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps): JSX.Element {
  const date = parseISO(dateString);
  return createElement(
    "time",
    { dateTime: dateString },
    format(date, "dd.MM.yyyy")
  );
}
