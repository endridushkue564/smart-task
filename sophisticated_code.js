/* sophisticated_code.js */

// This code implements an interactive text-based adventure game called "Mystical Quest".

// Define the main character object
const mainCharacter = {
  name: "Ethan", // Character's name
  level: 1, // Character's level
  health: 100, // Character's health
  attack: 10, // Character's attack power
  defense: 5, // Character's defense power
  inventory: [] // Array to store character's inventory items
};

// Define the game world objects
const rooms = [
  {
    name: "Forest",
    description: "You are standing in a dark forest. There is a path leading to the east.",
    items: ["key", "torch"],
    enemies: ["goblin", "skeleton"],
    exits: {
      east: 1
    }
  },
  {
    name: "Cave",
    description: "You entered a spooky cave. There are multiple tunnels, choose one carefully.",
    items: ["potion", "sword"],
    enemies: ["zombie", "troll"],
    exits: {
      west: 0,
      east: 2
    }
  },
  {
    name: "Castle",
    description: "You reached an ancient castle. It looks abandoned.",
    items: ["shield", "scroll"],
    enemies: ["vampire", "werewolf"],
    exits: {
      west: 1
    }
  }
];

// Define game functions
function displayRoomInfo(roomIndex) {
  const room = rooms[roomIndex];
  
  console.log(`--- ${room.name} ---`);
  console.log(room.description);
  
  if (room.items.length > 0) {
    console.log("Items in this room:");
    room.items.forEach(item => console.log(`- ${item}`));
  }
  
  if (room.enemies.length > 0) {
    console.log("Enemies in this room:");
    room.enemies.forEach(enemy => console.log(`- ${enemy}`));
  }
}

function move(direction) {
  const currentRoomIndex = getPlayerRoomIndex();
  const currentRoom = rooms[currentRoomIndex];
  
  if (currentRoom.exits.hasOwnProperty(direction)) {
    const nextRoomIndex = currentRoom.exits[direction];
    
    displayRoomInfo(nextRoomIndex);
  } else {
    console.log("You cannot move in that direction.");
  }
}

function getPlayerRoomIndex() {
  // TODO: Implement the logic to get the current room index based on the player's position
}

// Start the game
console.log(`Welcome, ${mainCharacter.name}!`);
displayRoomInfo(0); // Display initial room information

// Main game loop
while (true) {
  const command = prompt("What would you like to do?");

  // Process user commands
  switch (command) {
    case "move east":
      move("east");
      break;
    case "move west":
      move("west");
      break;
    case "move north":
      move("north");
      break;
    case "move south":
      move("south");
      break;
    case "inventory":
      console.log("Your inventory:");
      mainCharacter.inventory.forEach(item => console.log(`- ${item}`));
      break;
    case "quit":
      console.log("Thank you for playing! Goodbye.");
      return;
    default:
      console.log("Invalid command.");
  }
}