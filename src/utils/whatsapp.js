import { whatsAppMessage } from '../content';

// Builds the wa.me link. All copy lives in content.js — this only
// assembles the URL.
export function buildWhatsAppLink(number, selection) {
  const cleanNumber = (number || '').replace(/\D/g, '');
  if (!cleanNumber) {
    return '#';
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsAppMessage(selection))}`;
}
