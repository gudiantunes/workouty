export const WEEK_DAYS = [
  'sunday',
  'monday',
  'thursday',
  'wednesday',
  'tuesday',
  'friday',
  'saturday',
];

export function isFormValid(refs = []) {
  let v = true;
  for (const ref of refs) {
    if (!ref.current.value) {
      v = false;
    }
  }
  return v;
}

export function moveArrayItemUp(array = [], itemIndex = 0) {
  const nArray = [...array];
  const itemA = array[itemIndex];
  const itemB = array[itemIndex - 1];

  if (itemIndex - 1 >= 0) {
    nArray[itemIndex] = itemB;
    nArray[itemIndex - 1] = itemA;
  }
  return nArray;
}

export function moveArrayItemDown(array = [], itemIndex = 0) {
  const nArray = [...array];
  const itemA = array[itemIndex];
  const itemB = array[itemIndex + 1];

  if (itemIndex + 1 < array.length) {
    nArray[itemIndex] = itemB;
    nArray[itemIndex + 1] = itemA;
  }
  return nArray;
}
