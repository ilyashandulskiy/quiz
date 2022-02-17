import { createContext } from 'react';
import { InewContext } from '../types';

// @ts-ignore
const newContext = createContext<InewContext>({});

export default newContext;
