// accept string "23/10/2015"
export const convertStringToDate = (str: string) => {
  if (!str.trim()) return new Date();
  const newStr = str.replace(/(\d+[/])(\d+[/])/, '$2$1');
  return new Date(newStr);
};
