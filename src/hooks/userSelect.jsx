import { useState } from 'react';

const useSelect = (initialValue) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return { selectedValue, handleChange };
}

export default useSelect