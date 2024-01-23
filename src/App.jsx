import { useState } from "react";
import AddItem from "./components/AddItem";
import PackingList from "./components/PakingList";


const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);

  const [packed, setPacked] = useState(1);

  // onAddItem
  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: items.length,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem) {
    if (nextItem.packed) {
      setPacked(packed + 1);
    } else {
      setPacked(packed - 1);
    }
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    const deletedItem = items.find((item) => item.id === itemId);
    if (deletedItem.packed) {
      setPacked(packed - 1);
    }
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {items.length} packed!
      </b>
    </>
  );
}
