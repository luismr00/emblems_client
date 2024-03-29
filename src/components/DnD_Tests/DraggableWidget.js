import React, { useState } from 'react';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useDraggable, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy, rectSortingStrategy, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const DraggableWidget = ({ id, title, key, onDelete, testFunction }) => {
    
    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({id});
  
    const handleDelete = () => {
      onDelete(id);
    }
  
    const style = {
      // cursor: isDragging ? 'grabbing' : 'grab',
      transition,
      transform: CSS.Transform.toString(transform),
      width: '75px',
      height: '75px',
      backgroundColor: 'lightblue',
      margin: '5px',
      touchAction: "none"
      
    };
  
    return (
      <div >
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {/* <div> */}
          {title}
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
}

export default DraggableWidget;