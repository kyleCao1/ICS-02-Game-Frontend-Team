/*
This code defines a function that handles a successful login attempt. It takes in a message parameter, logs the message to the console, and calls the initGame function from the game module to start the game.
*/

import initGame from '../game/initGame.js';
import { getGlobal } from '../globals.js';
import menu from '../pages/menu.js';

export default function loginSucceed(message) {
  console.log("Received message:", message);

  // Open the Menu
  menu();
  
  // Call the initGame function to start playing the game
  //initGame();
}
