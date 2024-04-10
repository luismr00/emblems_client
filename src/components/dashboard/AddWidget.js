import React, { useState } from 'react'
import Select from 'react-select'

const mock_widget_data = [
    {value: 'Top Emblems' , label: 'Top Emblems',},
    {value: 'Rising Players' , label: 'Rising Players'},
    {value: 'Upcoming Events' , label: 'Upcoming Events'},
    {value: 'Recent Events' , label: 'Recent Events'},
    {value: 'Recent Upsets' , label: 'Recent Upsets'},
    {value: 'Tracked Players' , label: 'Tracked Players'},
    {value: 'My Emblem Wallet' , label: 'My Emblem Wallet'},
    {value: 'My Recent Events' , label: 'My Recent Events'},
    {value: 'My Recent Matches' , label: 'My Recent Matches'},
    {value: 'My Best Wins' , label: 'My Best Wins'},
];

const selectorStyles = {
    option: (styles, { isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isSelected ? "#E68000" : isFocused ? "#FFB65A" : undefined
        };
    },
    control: (baseStyles, isFocused, isSelected) => { 
        return {
            ...baseStyles,
            borderColor: '#CCCCCC',
            '&:hover': {
                borderColor: '#FFB65A' // Change hover color based on focus state
            },
            boxShadow: null,
        };
    },
    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: undefined
    }),
  };


const AddWidget = ({setIsAddingWidget, widgetSelected, setWidgetSelected}) => {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '505px'}}>
        {/* <h4>{widgetSelected}</h4> */}
        <Select className='w-50 mt-2 mb-2' options={mock_widget_data} styles={selectorStyles} onChange={(e) => setWidgetSelected(e.label)} />
        <button type='button' className='btn btn-dark w-50 mt-2 mb-2' onClick={() => {setIsAddingWidget(false); setWidgetSelected('')}}>Cancel</button>
        <button type='button' className='btn btn-success w-50 mt-2 mb-2' disabled={widgetSelected.length === 0 ? true : false} >Save</button>
    </div>
  )
}

export default AddWidget