import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Widget from '../components/dashboard/Widget';
import CustomWidget from '../components/dashboard/CustomWidget';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable';


const mock_data = [
  {
    id: 1,
    name: 'Rising Players',
    data: [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
            info: ["My Emblems", 3]
        },
    ]
  },
  {
    id: 2,
    name: 'Tracked Players',
    data: [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
            info: ["My Emblems", 3]
        },
    ]
  },
  {
    id: 3,
    name: 'My Recent Events',
    data: [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
            info: ["My Emblems", 3]
        },
    ]
  },
  {
    id: 4,
    name: 'Top Emblems',
    data: [
        {
            player: "Player 1",
            info: ["Score", 1234]
        },
        {
            player: "Player 2",
            info: ["Rank", 69]
        },
        {
            player: "Player 3",
            info: ["Emblems Value", 42]
        },
        {
            player: "Player 4",
            info: ["My Emblems", 3]
        },
    ]
  },
 
  
];

const Dashboard = () => {

  const [widgets, setWidgets] = useState(mock_data);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  }

  const handleDelete = (id) => {
    setWidgets(widgets.filter(item => item.id !== id));
  }

  const getItemPos = id => {
    return widgets.findIndex(item => item.id === id);
  }

  const handleDragEnd = (event) => {
    const {active, over} = event;

    if(active.id === over.id) return;

    setWidgets(items => {
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

  const someFunction = () => {
    console.log('hello');
  }

  return (
    <div>
        <Navigation />
        <div className='container'>
            <h2 className='text-center mt-4 mb-4'>Dashboard</h2>
            {isEditMode ? (
                <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    <div className='d-flex flex-wrap'>
                        <SortableContext items={widgets} strategy={horizontalListSortingStrategy}>
                            {widgets.map((widget) => {
                                return (
                                    <Widget isEditMode={isEditMode} widgetData={widget.data} title={widget.name} id={widget.id} key={widget.id} onDelete={handleDelete} />
                                );
                            })}
                        </SortableContext>
                        <CustomWidget isEditMode={isEditMode} handleEditClick={handleEditClick}/>
                    </div>
                </DndContext>
            ) : (
                <div className='d-flex flex-wrap'>
                        {widgets.map((widget) => {
                            return (
                                <Widget isEditMode={isEditMode} widgetData={widget.data} title={widget.name} id={widget.id} key={widget.id} onDelete={handleDelete} />
                            );
                        })}
                        <CustomWidget isEditMode={isEditMode} handleEditClick={handleEditClick}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default Dashboard