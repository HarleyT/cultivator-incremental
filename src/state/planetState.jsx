import { createContext } from 'react';
import Planet from './locationState';

export const PlanetContext = createContext<Planet | undefined>(undefined);