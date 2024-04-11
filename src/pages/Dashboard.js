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
            info: [
              ["Score", 172],
              ["Game", "SSBM"],
              ["My Emblems", 8],
              ["Emblems Value", 76],
              ["Rank", 69]
            ]
        },
        {
            player: "Player 2",
            info: [
              ["Game", "SSBU"],
              ["My Emblems", 5],
              ["Rank", 502],
              ["Score", 2],
              ["Emblems Value", 34]
            ]
        },
        {
            player: "Player 3",
            info: [
              ["Emblems Value", 42],
              ["Rank", 349],
              ["Game", "Strife"],
              ["My Emblems", 3],
              ["Score", 45]
            ]
        },
        {
            player: "Player 4",
            info: [
              ["Game", "NASB"],
              ["Rank", 50],
              ["Score", 5678],
              ["My Emblems", 87],
              ["Emblem Value", 190]
            ]
        },
    ]
  },
  {
    id: 2,
    name: 'Top Emblems',
    data: [
      {
          player: "Player 1",
          info: [
            ["Score", 172],
            ["Game", "SSBM"],
            ["My Emblems", 8],
            ["Emblems Value", 76],
            ["Rank", 69]
          ]
      },
      {
          player: "Player 2",
          info: [
            ["Game", "SSBU"],
            ["My Emblems", 5],
            ["Rank", 502],
            ["Score", 2],
            ["Emblems Value", 34]
          ]
      },
      {
          player: "Player 3",
          info: [
            ["Emblems Value", 42],
            ["Rank", 349],
            ["Game", "Strife"],
            ["My Emblems", 3],
            ["Score", 45]
          ]
      },
      {
          player: "Player 4",
          info: [
            ["Game", "NASB"],
            ["Rank", 50],
            ["Score", 5678],
            ["My Emblems", 87],
            ["Emblem Value", 190]
          ]
      },
  ]
  },
  {
    id: 3,
    name: 'Upcoming Events',
    data: [
      {
          player: "Player 1",
          info: [
            ["Score", 172],
            ["Game", "SSBM"],
            ["My Emblems", 8],
            ["Emblems Value", 76],
            ["Rank", 69]
          ]
      },
      {
          player: "Player 2",
          info: [
            ["Game", "SSBU"],
            ["My Emblems", 5],
            ["Rank", 502],
            ["Score", 2],
            ["Emblems Value", 34]
          ]
      },
      {
          player: "Player 3",
          info: [
            ["Emblems Value", 42],
            ["Rank", 349],
            ["Game", "Strife"],
            ["My Emblems", 3],
            ["Score", 45]
          ]
      },
      {
          player: "Player 4",
          info: [
            ["Game", "NASB"],
            ["Rank", 50],
            ["Score", 5678],
            ["My Emblems", 87],
            ["Emblem Value", 190]
          ]
      },
  ]
  },
  {
    id: 4,
    name: 'Recent Upsets',
    data: [
      {
          player: "Player 1",
          info: [
            ["Score", 172],
            ["Game", "SSBM"],
            ["My Emblems", 8],
            ["Emblems Value", 76],
            ["Rank", 69]
          ]
      },
      {
          player: "Player 2",
          info: [
            ["Game", "SSBU"],
            ["My Emblems", 5],
            ["Rank", 502],
            ["Score", 2],
            ["Emblems Value", 34]
          ]
      },
      {
          player: "Player 3",
          info: [
            ["Emblems Value", 42],
            ["Rank", 349],
            ["Game", "Strife"],
            ["My Emblems", 3],
            ["Score", 45]
          ]
      },
      {
          player: "Player 4",
          info: [
            ["Game", "NASB"],
            ["Rank", 50],
            ["Score", 5678],
            ["My Emblems", 87],
            ["Emblem Value", 190]
          ]
      },
  ]
  },
 
  
];

const Dashboard = () => {

  const [widgets, setWidgets] = useState(mock_data);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAddingWidget, setIsAddingWidget] = useState(false);
  const [widgetSelected, setWidgetSelected] = useState('');

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  }

  const handleCancelSortable = () => {
    setWidgets(mock_data);
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
                        <CustomWidget isEditMode={isEditMode} handleEditClick={handleEditClick} handleCancelSortable={handleCancelSortable}/>
                    </div>
                </DndContext>
            ) : (
                <div className='d-flex flex-wrap'>
                        {widgets.map((widget) => {
                            return (
                                <Widget isEditMode={isEditMode} widgetData={widget.data} title={widget.name} id={widget.id} key={widget.id} onDelete={handleDelete} />
                            );
                        })}
                        <CustomWidget isEditMode={isEditMode} handleEditClick={handleEditClick} handleCancelSortable={handleCancelSortable} isAddingWidget={isAddingWidget} setIsAddingWidget={setIsAddingWidget} widgetSelected={widgetSelected} setWidgetSelected={setWidgetSelected}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default Dashboard