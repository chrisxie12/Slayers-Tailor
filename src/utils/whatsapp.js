export function buildWhatsAppLink(number, selection) {
  const cleanNumber = (number || '').replace(/\D/g, '');
  if (!cleanNumber) {
    return '#';
  }

  const message = [
    'Hello Slayers Tailor, I want to book a fitting.',
    `Fabric: ${selection.fabric}`,
    `Lining: ${selection.lining}`,
    `Buttons: ${selection.buttons}`,
    `Pattern: ${selection.pattern}`,
  ].join('\n');

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
