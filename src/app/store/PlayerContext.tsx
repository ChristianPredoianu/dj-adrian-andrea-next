'use client';
import React, { createContext, useState, useCallback, useEffect } from 'react';

interface PlayerContextProps {
  activePlayerId: number | null;
  setActivePlayerId: (id: number | null) => void;
}

export const PlayerContext = createContext<PlayerContextProps>({
  activePlayerId: null,
  setActivePlayerId: () => {},
});

interface PlayerContextProviderProps {
  children: React.ReactNode;
}

export const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({
  children,
}) => {
  const [activePlayerId, setActivePlayerId] = useState<number | null>(null);

  const handleSetActivePlayerId = useCallback((id: number | null) => {
    setActivePlayerId(id);
  }, []);

  const contextValue: PlayerContextProps = {
    activePlayerId,
    setActivePlayerId: handleSetActivePlayerId,
  };

  return <PlayerContext.Provider value={contextValue}>{children}</PlayerContext.Provider>;
};
