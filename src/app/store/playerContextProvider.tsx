'use client';
import { useState, useCallback } from 'react';
import { PlayerContext, PlayerContextProps } from '@/app/store/playerContext';

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
