import React, { useEffect, useState } from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import WidgetRow from './WidgetRow';
import Filters from './Filters';

const Widget = ({ id, title, widgetData, onDelete, isEditMode, isAddingWidget, timers, setTimers }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const [editFilters, setEditFilters] = useState(false);
    
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        touchAction: "none"
    };

    const handleDelete = () => {
        onDelete(id); // Call the onDelete function with the ID of the widget to be deleted
    };

    useEffect(() => {
        // If the user is in edit mode or adding a widget, stop the timers
        // If you feel like you don't need the isAddingWidget condition later on, you can remove it because it shouldn't affect the timers when a new widget is added since every timer will restart either way when the new widget api is fetched
        if(isEditMode || isAddingWidget){
            setTimers(false);
        } else {
            setTimers(true);
        }
    }, [isEditMode, isAddingWidget])


    return (
        <div className='rounded-2 shadow mb-4 w-30 ms-3 me-3'>
            <div ref={setNodeRef} {...attributes} style={style} >
                <div className={isEditMode ? 'position-relative' : 'position-relative d-none'}>
                    <div className='bg-danger rounded-circle d-flex justify-content-center position-absolute' style={{ width: '25px', right: -10, top: -10, cursor: 'pointer' }} onClick={handleDelete}>
                        <p className='text-white'>-</p>
                    </div>
                </div>
                <div style={{height: "505px"}} {...listeners}>
                    <div className='bg-primary rounded-top d-flex justify-content-center align-items-center' style={isEditMode? {cursor: 'pointer', height: '75px'} : {cursor: 'auto', height: '75px'}}>
                        <h3 className='text-center text-white'>{title}</h3>
                    </div>
                    <div className='bg-info d-flex justify-content-center align-items-center' style={{ height: '55px', cursor: 'pointer' }} onClick={() => setEditFilters(true)}>
                        <p className='text-center text-white'>Filters</p>
                    </div>
                    <div className='position-relative' style={isEditMode? {cursor: 'pointer'} : {cursor: 'auto'}}>
                        <div>
                            <div>
                                {widgetData.map((data, index) => {
                                    return (
                                        <div className={'d-flex ' + (index % 2 === 0 ? 'bg-white' : 'bg-dark-subtle')} style={{ height: '75px' }}>
                                            <img src='https://images.start.gg/images/user/11492/image-3dd9789eb28e9bef8b6f8b572dd23389.jpeg?ehk=yWoe%2B5bbozHkCky6qBhZxdf8SPxOjJkqVd4FM9xcjts%3D&ehkOptimized=1vKUZGZtc7wtkl4zLyUzd9JhAoO1sJ5RzQSvqHc61EA%3D' style={{ maxWidth: '85px', height: '75px' }} />
                                            <div className='flex-grow-1 d-flex flex-column justify-content-between p-2'>
                                                <h4>{data.player}</h4>
                                                <WidgetRow data={data.info} timers={timers} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='d-flex bg-white justify-content-center align-items-center rounded-bottom' style={{ height: '75px' }}>
                                <button type='button' className='btn btn-info' style={{ height: '45px' }}>View More</button>
                            </div>
                        </div>
                        <div className={`d-flex w-100 bg-info flex-column rounded-bottom position-absolute top-0  ${editFilters ? 'd-block' : 'd-none'}`} style={{ height: '375px', cursor: 'auto' }}>
                            <hr style={{
                                color: '#FFFFFF',
                                backgroundColor: '#FFFFFF',
                                height: 1,
                                borderColor : '#FFFFFF'
                            }}/>
                            <Filters id={id} setEditFilters={setEditFilters}/>
                        </div>
                    </div>
                      
                </div>
            </div>
        </div>
    );
};

export default Widget;
