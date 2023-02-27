import React, { useCallback, useState } from 'react'

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const handleState = () => {
    setState(!state)
  }
  return [state, handleState];
}
export default useToggle;
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
