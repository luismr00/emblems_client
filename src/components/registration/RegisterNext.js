import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

const RegisterNext = () => {
  
  const [startDate, setStartDate] = useState(new Date());

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
                borderColor: '#FFB65A', // Change hover color based on focus state
                boxShadow: '0px 0px 3px 2px #FFB65A',
            },
            backgroundColor: null
        };
    },
    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: undefined
    }),
  };

  return (
    <div>
        <div className='container-lg'>
        <h3 className='mt-4' style={{textAlign: 'center'}}>Almost done!</h3>
        <p style={{textAlign: 'center'}}>Make sure to add any edits if any to the following input fields.</p>
        <Form className='bg-dark text-white p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
            {/* <Form.Label>Location</Form.Label>
            <Form.Label>DOB</Form.Label>
            <Form.Label>Pronouns</Form.Label> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show on public profile" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            {/* <Form.Control type="text" placeholder="Select location" /> */}

            {/* To add your custom css on the form fields, add bsPrefix='nameofclass' to the form component as if it is a class*/}
            <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail">
              <option disabled selected hidden> Select location </option>
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
              <option>Country 4</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show on public profile" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>DOB</Form.Label>
            {/* <Form.Control type="text" placeholder="Enter date of birth" /> */}
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show on public profile" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pronouns</Form.Label>
            <Select className='bg-body rounded' styles={selectorStyles}/>
            {/* <Form.Select className="mb-3" id="selectForm" controlId="formBasicEmail">
              <option disabled selected hidden> Select Pronouns </option>
              <option>He/Him</option>
              <option>She/Her</option>
              <option>They/Them</option>
            </Form.Select> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show on public profile" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default RegisterNext