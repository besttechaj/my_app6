import { createContext } from 'react';

//! step1: creating context
export const dummyContext = createContext();

//! step2: providing context
export const DummyContextProvider = dummyContext.Provider;
