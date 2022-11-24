export const percentage = (amount: number, disc: number) => {
  return (amount / 100) * disc;
};

export const addStartPad = (num: number) => {
  return num?.toString().padStart(2, '0');
};
