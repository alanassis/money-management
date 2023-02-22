export function PTBRStringToDate(dateString: string): Date {
  return new Date(`${dateString.split('/').reverse().join('-')} 00:00:00`);
}
