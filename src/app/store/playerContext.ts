'use client';

import React, { createContext } from 'react';

export interface PlayerContextProps {
  activePlayerId: number | null;
  setActivePlayerId: (id: number | null) => void;
}

export const PlayerContext = createContext<PlayerContextProps>({
  activePlayerId: null,
  setActivePlayerId: () => {},
});
