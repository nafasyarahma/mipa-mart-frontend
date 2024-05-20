import { useState } from "react";

const useDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  return { dropdownVisible, toggleDropdown}
}

export default useDropdown