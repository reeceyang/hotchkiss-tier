import React, { useState } from "react";
import Column from "../components/Column";
import { DragDropContext } from "react-beautiful-dnd";

const Index = () => {
  const initialTiers = {
    S: ["6.0001", "CMS.614"], // course numbers as IDs
    A: [],
    B: [],
    C: [],
    D: [],
  };
  const tierColors = {
    // thanks https://colorswall.com/palette/3297/
    S: "#ff7f7e",
    A: "#ffbf7f",
    B: "#ffdf80",
    C: "#feff7f",
    D: "#beff7f",
  };
  const [tiers, setTiers] = useState(initialTiers);
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let newItemOrder = tiers[destination.droppableId];
    newItemOrder.splice(source.index, 1);
    newItemOrder.splice(destination.index, 0, draggableId);
    setTiers({
      ...tiers,
      [destination.droppableId]: newItemOrder,
    });
  };
  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Search classes..."
          // value={query}
          // onChange={onSearch}
        />
      </header>
      <section>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(tiers).map((tierName) => {
            return (
              <Column key={tierName} title={tierName} items={tiers[tierName]} />
            );
          })}
        </DragDropContext>
      </section>
    </div>
  );
};

export default Index;
