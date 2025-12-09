import { formatDistance, parseISO } from "date-fns";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function formatWithCommas(number) {
  return number.toLocaleString("en-US");
}

export function formatDate(dateInput) {
  const date = new Date(dateInput);

  // Safety check – return empty string if invalid
  if (isNaN(date)) return "";

  return date.toLocaleDateString("en-US", {
    month: "short", // "Jan", "Feb", ..., "Dec"
    day: "2-digit", // "01" – "31"
    year: "numeric", // "2025"
  });
}

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};
