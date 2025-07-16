import {
  format,
  formatDistanceToNow as dateFnsformatDistanceToNow,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd-MM-yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFnsformatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

const rawDate = `2025-07-15T06:31:23.411Z`;
console.log(rawDate);
console.log(formatDateTime(rawDate));
console.log(formatDistanceToNow(rawDate));
