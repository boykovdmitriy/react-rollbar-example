import queryString from 'query-string';

export function toObject(search?: string): { [key: string]: any } {
  if (!search) return {};
  return queryString.parse(search);
}
