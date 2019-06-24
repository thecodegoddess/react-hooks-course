import { useState, useEffect, useDebugValue } from 'react';

function useTitleInput(initialValue) {
  const [
    value,
    setValue,
  ] = useState(initialValue);

  useEffect(() => {
    document.title = `My title is now ${value}`;
  });

  useDebugValue(value.length > 0 ? value : '__EMPTY');

  return [
    value,
    setValue,
  ];
}

export { useTitleInput };
