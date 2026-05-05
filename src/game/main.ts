import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  private score: number = 0;
  private scoreText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    const { width, height } = this.scale;
    
    this.add.text(width / 2, height / 2 - 50, "ACP Mini-Game", {
      fontSize: "32px",
      color: "#00f3ff",
      fontFamily: "monospace"
    }).setOrigin(0.5);
    
    this.add.text(width / 2, height / 2, "Click anywhere to earn points!", {
      fontSize: "18px",
      color: "#ffffff",
      fontFamily: "sans-serif"
    }).setOrigin(0.5);

    this.scoreText = this.add.text(20, 20, "Score: 0", {
      fontSize: "24px",
      color: "#bc13fe",
      fontFamily: "monospace"
    });

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.score += 10;
      this.scoreText.setText(`Score: ${this.score}`);

      // Create a visual burst
      const circle = this.add.circle(pointer.x, pointer.y, 10, 0x00f3ff);
      this.tweens.add({
        targets: circle,
        scale: 8,
        alpha: 0,
        duration: 600,
        ease: 'Cubic.easeOut',
        onComplete: () => circle.destroy()
      });
      
      // Animate score text
      this.tweens.add({
        targets: this.scoreText,
        scale: 1.2,
        yoyo: true,
        duration: 100,
      });
    });
  }
}

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: "phaser-container",
    width: "100%",
    height: "100%",
  },
  backgroundColor: "#020617",
  scene: [MainScene],
};
