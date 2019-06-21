import { useState, useEffect } from 'react';

function useTitleInput(initialValue) {
  const [
    value,
    setValue,
  ] = useState(initialValue);

  useEffect(() => {
    document.title = `My title is now ${value}`;
  });

  return [
    value,
    setValue,
  ];
}

export { useTitleInput };
