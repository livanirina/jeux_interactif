
//config du jeu
const config = {
  type: Phaser.AUTO, // Phaser choisit automatiquement WebGL ou Canvas selon le navigateur
  width: 800,        // largeur de la fenêtre de jeu
  height: 600,       // hauteur de la fenêtre de jeu
  physics: {
    default: 'arcade', // système physique de type "Arcade" (simple et rapide)
    arcade: {
      gravity: { y: 300 }, // gravité vers le bas
      debug: false          // activer/désactiver l’affichage des contours de collision
    }
  },
    scene: { preload, create, update } // fonctions principales du cycle de vie du jeu
};

//creation du jeu 
const game = new Phaser.Game(config);

//les variables
let player;
let cursors;
let platforms;
