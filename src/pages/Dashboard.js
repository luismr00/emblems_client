import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Widget from '../components/dashboard/Widget';
import CustomWidget from '../components/dashboard/CustomWidget';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { DatePicker } from '@mui/x-date-pickers';


const mock_data = [
  {
    id: 1,
    name: 'Rising Players',
    data: [
        {
            player: "Player 1",
            info: [
              ["Game", "SSBM"],
              ["Score", 172],
              ["My Emblems", 8],
              ["Emblems Value", 76],
              ["Rank", 69]
            ]
        },
        {
            player: "Player 2",
            info: [
              ["Game", "SSBU"],
              ["Score", 2],
              ["My Emblems", 5],
              ["Emblems Value", 34],
              ["Rank", 502],
            ]
        },
        {
            player: "Player 3",
            info: [
              ["Game", "Strife"],
              ["Score", 45],
              ["My Emblems", 3],
              ["Emblems Value", 42],
              ["Rank", 349],
            ]
        },
        {
            player: "Player 4",
            info: [
              ["Game", "NASB"],
              ["Score", 5678],
              ["My Emblems", 87],
              ["Emblem Value", 190],
              ["Rank", 50],
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
            ["Game", "SSBM"],
            ["Score", 172],
            ["My Emblems", 8],
            ["Emblems Value", 76],
            ["Rank", 69]
          ]
      },
      {
          player: "Player 2",
          info: [
            ["Game", "SSBU"],
            ["Score", 2],
            ["My Emblems", 5],
            ["Emblems Value", 34],
            ["Rank", 502],
          ]
      },
      {
          player: "Player 3",
          info: [
            ["Game", "Strife"],
            ["Score", 45],
            ["My Emblems", 3],
            ["Emblems Value", 42],
            ["Rank", 349],
          ]
      },
      {
          player: "Player 4",
          info: [
            ["Game", "NASB"],
            ["Score", 5678],
            ["My Emblems", 87],
            ["Emblem Value", 190],
            ["Rank", 50],
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
            ["Game", "SSBM"],
            ["Score", 172],
            ["My Emblems", 8],
            ["Emblems Value", 76],
            ["Rank", 69]
          ]
      },
      {
          player: "Player 2",
          info: [
            ["Game", "SSBU"],
            ["Score", 2],
            ["My Emblems", 5],
            ["Emblems Value", 34],
            ["Rank", 502],
          ]
      },
      {
          player: "Player 3",
          info: [
            ["Game", "Strife"],
            ["Score", 45],
            ["My Emblems", 3],
            ["Emblems Value", 42],
            ["Rank", 349],
          ]
      },
      {
          player: "Player 4",
          info: [
            ["Game", "NASB"],
            ["Score", 5678],
            ["My Emblems", 87],
            ["Emblem Value", 190],
            ["Rank", 50],
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
            ["Game", "SSBM"],
            ["Score", 172],
            ["My Emblems", 8],
            ["Emblems Value", 76],
            ["Rank", 69]
          ]
      },
      {
          player: "Player 2",
          info: [
            ["Game", "SSBU"],
            ["Score", 2],
            ["My Emblems", 5],
            ["Emblems Value", 34],
            ["Rank", 502],
          ]
      },
      {
          player: "Player 3",
          info: [
            ["Game", "Strife"],
            ["Score", 45],
            ["My Emblems", 3],
            ["Emblems Value", 42],
            ["Rank", 349],
          ]
      },
      {
          player: "Player 4",
          info: [
            ["Game", "NASB"],
            ["Score", 5678],
            ["My Emblems", 87],
            ["Emblem Value", 190],
            ["Rank", 50],
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
  const [timers, setTimers] = useState(true);

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
        {/* <DatePicker className='bg-white' style={{borderColor: 'red'}} /> */}
        <div className='container'>
            <h2 className='text-center mt-4 mb-4'>Dashboard</h2>
            {isEditMode ? (
                <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    <div className='d-flex flex-wrap'>
                        <SortableContext items={widgets} strategy={horizontalListSortingStrategy}>
                            {widgets.map((widget) => {
                                return (
                                    <Widget isEditMode={isEditMode} widgetData={widget.data} title={widget.name} id={widget.id} key={widget.id} onDelete={handleDelete} isAddingWidget={isAddingWidget} setTimers={setTimers}/>
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
                                <Widget isEditMode={isEditMode} widgetData={widget.data} title={widget.name} id={widget.id} key={widget.id} onDelete={handleDelete} isAddingWidget={isAddingWidget} timers={timers} setTimers={setTimers} />
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