
export const formatCurrency = (amount: number, language: string): string => {
  const isThai = language === 'th';
  const currency = isThai ? 'THB' : 'USD';
  
  // In Thai, the currency symbol '฿' is typically placed before the number without a space.
  // Intl.NumberFormat for 'th-TH' might place it differently, so we handle it manually for consistency.
  if (isThai) {
      return `฿${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  }

  // For USD, Intl.NumberFormat works perfectly.
  const options = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const locale = 'en-US';
  return new Intl.NumberFormat(locale, options).format(amount);
};
