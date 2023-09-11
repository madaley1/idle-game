export const getValue = () => {
  const valueData = localStorage.getItem('idle_valueData');
  if(!valueData || valueData === null) return new Error('data is null, please refresh the page');
  return valueData;
}

