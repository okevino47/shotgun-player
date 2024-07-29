'use client';

import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type ModalContent = {
  title: string;
  message?: string;
  component: ReactElement;
  icon?: ReactElement;
};

type ModalContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  content: null | ModalContent;
  setContent: Dispatch<SetStateAction<ModalContent | null>>;
};

const modalContext = createContext<ModalContextType>({
  open: false,
  setOpen: () => {},
  content: null,
  setContent: () => {},
});

export const ModalProvider = ({ children }: { children: ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ModalContent | null>(null);

  return (
    <modalContext.Provider value={{ open, setOpen, content, setContent }}>
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => useContext(modalContext);
