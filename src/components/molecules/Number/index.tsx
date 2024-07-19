export default function CurrencyFormat(value: number | undefined): string {
  if (value === undefined) {
    return '';
  }

  const formatted = new Intl.NumberFormat('de-DE').format(value);
  return formatted;
}
