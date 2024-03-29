import React, { useState } from 'react';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useDraggable, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy, rectSortingStrategy, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DraggableWidget from './DraggableWidget';

const TestWidgetsDnD = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [items, setItems] = useState([
    { id: 'widget1', key: 'widget1', title: 'Widget 1' },
    { id: 'widget2', key: 'widget2', title: 'Widget 2' },
    { id: 'widget3', key: 'widget3', title: 'Widget 3' },
    { id: 'widget4', key: 'widget4', title: 'Widget 4' },
    { id: 'widget5', key: 'widget5', title: 'Widget 5' },
    { id: 'widget6', key: 'widget6', title: 'Widget 6' },
  ]);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
    console.log("the current items array is:");
    console.log(items);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const testFunction = () => {
    console.log("test function works");
  }

  const getItemPos = id => {
    return items.findIndex(item => item.id === id);
  }

  const handleDragEnd = (event) => {
    const {active, over} = event;

    if(active.id === over.id) return;

    setItems(items => {
      const originalPos = getItemPos(active.id);
      const newPos = getItemPos(over.id);

      return arrayMove(items, originalPos, newPos);
    })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div>
      <button onClick={handleEditClick}>{isEditMode ? 'Done Editing' : 'Edit'}</button>
      {!isEditMode ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {items.map(item => (
            <DraggableWidget key={item.key} id={item.id} title={item.title} onDelete={testFunction} />
          ))}
        </div>
      ) : (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <SortableContext
            items={items}
            strategy={horizontalListSortingStrategy}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {items.map(item => (
                <DraggableWidget key={item.key} id={item.id} title={item.title} onDelete={handleDelete} testFunction={testFunction} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        )
      }
        
    </div>
  );
}

export default TestWidgetsDnD;