export const budgetFormatter = (currency?: string, hideCurrency?: boolean) => {
  return hideCurrency
    ? new Intl.NumberFormat()
    : new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency ? currency : 'EUR',
      });
};
