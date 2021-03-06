import { useState } from 'react';

const useModal = () => {
  const [show, setShow] = useState<boolean>(false);

  function toggle() {
    setShow(!show);
  }

  return {
    show,
    toggle,
  };
};

export default useModal;
