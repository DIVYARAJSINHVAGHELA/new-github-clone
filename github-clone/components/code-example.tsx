export function CodeExample() {
  return (
    <div className="bg-[#0d1117] border border-gray-700 rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
      <div className="bg-[#161b22] px-4 py-2 flex items-center border-b border-gray-700">
        <div className="text-xs text-gray-400 mr-2">GITHUB COPILOT CHAT</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-sm">
        <div className="bg-[#0d1117] p-4 border-r border-gray-700 overflow-auto h-[400px]">
          <pre className="text-green-400 mb-2">
            <code>
              {`// game.js
function Player(name, level) {
  this.name = name;
  this.level = level;
}

Player.prototype.getStats = function() {
  return {
    name: this.name,
    level: this.level
  };
}`}
            </code>
          </pre>
          <div className="text-white mt-4">
            <p className="mb-2">Explanation:</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              I'm creating a Player constructor function that takes a name and level parameter. The getStats method
              returns an object with the player's name and level. For testing the Player constructor, you can create
              instances and call methods on them.
            </p>
          </div>
          <div className="mt-4 border border-gray-700 rounded p-2 bg-[#161b22]">
            <p className="text-xs text-gray-400">Ask a question or type / for commands</p>
          </div>
        </div>
        <div className="bg-[#161b22] p-4 overflow-auto h-[400px]">
          <div className="flex items-center mb-2">
            <span className="text-xs text-gray-400 mr-2">game.ts</span>
            <span className="text-xs px-1 bg-gray-700 text-gray-300 rounded">TS</span>
          </div>
          <pre className="text-blue-400">
            <code>
              {`class Player {
  name: string;
  level: number;
  
  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
  
  getStats(): { name: string; level: number } {
    return {
      name: this.name,
      level: this.level
    };
  }
}

// Example usage
const player1 = new Player('Player 1', 10);
const player2 = new Player('Player 2', 5);

console.log(player1.getStats());
console.log(player2.getStats());`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
