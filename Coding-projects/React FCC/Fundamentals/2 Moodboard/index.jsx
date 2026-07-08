{/* this is a child component */}
export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div
      className="mood-board-item"
      style={{
        backgroundColor: color,
      }}
    >
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};


{/* this is a parent component*/}
export function MoodBoard() {
  const board = [
    {
      id: 1,
      color: "red",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "something cool",
    },
    {
      id: 2,
      color: "orange",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "something cool",
    },
    {
      id: 3,
      color: "yellow",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "something cool",
    },
    {
      id: 4,
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "something cool",
    },
    {
      id: 5,
      color: "purple",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "something cool",
    },
    {
      id: 6,
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "something cool",
    },
  ];
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {board.map((items) => (
          <MoodBoardItem
            key={items.id}
            color={items.color}
            image={items.image}
            description={items.description}
          />
        ))}
      </div>
    </div>
  );
}

{/* key is used for React to identify items for effective rendering specific indexes within array like structures */}
