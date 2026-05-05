"use client";

import { useEffect, useRef } from "react";

export default function PhaserGameWrapper() {
  const gameRef = useRef<any>(null);

  useEffect(() => {
    async function initPhaser() {
      const Phaser = await import("phaser");
      const { config } = await import("@/game/main");

      if (!gameRef.current) {
        gameRef.current = new Phaser.Game(config);
      }
    }
    
    initPhaser();

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="phaser-container" className="w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden border border-neon-blue/30 glow-box-blue" />;
}
