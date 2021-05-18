export const formatDegress = (degress: number) => {
  const newDegress = Math.round(degress);
  if (degress < 0) {
    return `-${newDegress}`;
  } else return `+${newDegress}`;
};
