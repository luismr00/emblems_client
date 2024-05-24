import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import DatePicker from "react-datepicker";
import { DatePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { colors } from '@mui/material';

const RegisterNext = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [DOB, setDOB] = useState(null);
  const [pronouns, setPronouns] = useState('');
  const [errors, setErrors] = useState({});
  const [selectorSubmitted, setSelectorSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const pronounOptions = [
    { value: 'He/Him', label: 'He/Him' },
    { value: 'She/Her', label: 'She/Her' },
    { value: 'They/Them', label: 'They/Them' }
  ];

  const locationOptions = [
    { value: 'Country 1', label: 'Country 1' },
    { value: 'Country 2', label: 'Country 2' },
    { value: 'Country 3', label: 'Country 3' },
    { value: 'Country 4', label: 'Country 4' }
  ];

  const selectorStyles = {
    option: (styles, { isFocused, isSelected }) => {
        return {
            ...styles,
            color: isSelected ? 'white' : isFocused ? 'white' : 'black',
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

  const validateFirstName = () => {
    const nameRegex = /^[a-zA-Zàáâäæãåāçćčèéêëēėęîïíīįìłñńôöòóõøōœßśšûüùúūÿžźż'-]+( [a-zA-Zàáâäæãåāçćčèéêëēėęîïíīįìłñńôöòóõøōœßśšûüùúūÿžźż'-]+)*$/;
    console.log("testing name regex");
    if (firstName.trim() === '') {
      return 'First name is required';
    }
    if (!nameRegex.test(firstName)) {
      return 'First name is invalid. Make sure that your first name only contains a combination of letters, hyphens, apostrophes, and one single space at a time.';
    }
    return '';
  }

  const validateLastName = () => {
    const nameRegex = /^[a-zA-Zàáâäæãåāçćčèéêëēėęîïíīįìłñńôöòóõøōœßśšûüùúūÿžźż'-]+( [a-zA-Zàáâäæãåāçćčèéêëēėęîïíīįìłñńôöòóõøōœßśšûüùúūÿžźż'-]+)*$/;
    if (lastName.trim() === '') {
      return 'Last name is required';
    }
    if (!nameRegex.test(lastName)) {
      return 'Last name is invalid. Make sure that your last name only contains a combination of letters, hyphens, apostrophes, or spaces.';
    }
    return '';
  }

  const validateLocation = () => {
    if (!location) {
      return 'Location is required';
    }
    return '';
  }

  const validateDOB = () => {
    if (!DOB) {
      return 'Date of birth is required';
    }
    return '';
  }  

  const validatePronouns = () => {
    if (!pronouns) {
      return 'Pronouns is required';
    }
    return '';
  }

  const validateFields = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    let newErrors = {};
    let formIsValid = true;

    const firstNameError = validateFirstName();
    if (firstNameError) {
      newErrors.firstName = firstNameError;
      formIsValid = false;
    }

    const lastNameError = validateLastName();
    if (lastNameError) {
      newErrors.lastName = lastNameError;
      formIsValid = false;
    }

    const locationError = validateLocation();
    if (locationError) {
      newErrors.location = locationError;
      formIsValid = false;
    }

    const DOBError = validateDOB();
    if (DOBError) {
      newErrors.DOB = DOBError;
      formIsValid = false;
    }

    const pronounsError = validatePronouns();
    if (pronounsError) {
      newErrors.pronouns = pronounsError;
      formIsValid = false;
    }

    setErrors(newErrors);
    setValidated(true);

    if (formIsValid && form.checkValidity() === true) {
      // Form is valid and ready to be submitted
      console.log('Form submitted');
      return true;
    } else {
      event.stopPropagation();
      return false;
    }
  }

  const registerUser = () => {
    // Send user data to the server with a fetch request
    console.log('User registered');
    console.log(firstName, lastName, location, pronouns);
    console.log(DOB.format('YYYY-MM-DD'));
  }


  const handleSubmit = (event) => {
    setSelectorSubmitted(true);
    if (validateFields(event)) {
      registerUser();
    } else {
      console.log('Form has errors');
      console.log(firstName, lastName, location, DOB, pronouns);
    }
  }

  return (
    <div>
        <div className='container-lg'>
        <h3 className='mt-4' style={{textAlign: 'center'}}>Almost done!</h3>
        <p style={{textAlign: 'center'}}>Make sure to add any edits if any to the following input fields.</p>
        {/* Figure out whether you want to keep the noValidate and validated properties below or not */}
        <Form className='bg-dark text-white p-3' noValidate validated={validated} onSubmit={handleSubmit}>
          
          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              required
              type="text" 
              placeholder="Enter first name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              isInvalid={errors.firstName}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              required
              type="text" 
              placeholder="Enter last name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              isInvalid={errors.lastName}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show on public profile" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Location</Form.Label>
            {/* <Form.Control type="text" placeholder="Select location" /> */}

            {/* To add your custom css on the form fields, add bsPrefix='nameofclass' to the form component as if it is a class*/}
            <Form.Select 
              required 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              isInvalid={errors.location}
            >
              <option value="">Select location</option>
              <option value="Country 1">Country 1</option>
              <option value="Country 2">Country 2</option>
              <option value="Country 3">Country 3</option>
              <option value="Country 4">Country 4</option>
            </Form.Select>
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
            {/* <Select className='bg-body rounded' styles={selectorStyles} options={locationOptions}/> */}

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show on public profile" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom04">
            <Form.Label>DOB</Form.Label>
            {/* <Form.Control type="text" placeholder="Enter date of birth" /> */}
            {/* <DatePicker selected={DOB} onChange={(date) => setDOB(date)} /> */}
            {/* <DatePicker 
              slotProps={{ textField: { size: 'small' } }} 
              className={`w-100 bg-body rounded`}
              style={!DOB ? { borderColor: 'red' } : {}}
              value={DOB}
              onChange={(date) => setDOB(date)}
            />
            {DOB ? null : <Form.Text className="text-danger">Please select a date.</Form.Text>} */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{ 
                  textField: { size: 'small'}
                }} 
                sx={{
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: !selectorSubmitted || DOB ? '1px solid black' : '1px solid red' },
                  // '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { border: '2px solid cyan' },  // at hover state
                  // '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '3px solid green' }, // at focused state
                }}
                className={`w-100 bg-body rounded`}
                value={DOB}
                onChange={(date) => setDOB(date)}
                // renderInput={(params) => <TextField {...params} error={!DOB} helperText={!DOB ? 'Please select a date.' : ''} />}
                disableFuture
              />
            </LocalizationProvider>
            {errors.DOBError ? null : <Form.Text className="text-danger">{errors.DOB}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show on public profile" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label>Pronouns</Form.Label>
            {/* Style the react bootstrap selector with the one commented below. Uncomment to see how it looks. */}
            {/* <Select className='bg-body rounded' styles={selectorStyles} options={pronounOptions}/> */}
            <Form.Select 
              required 
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
              isInvalid={errors.pronouns}
            >
              <option value="">Select Pronouns</option>
              <option value="He/Him">He/Him</option>
              <option value="She/Her">She/Her</option>
              <option value="They/Them">They/Them</option>
            </Form.Select>
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            <Form.Control.Feedback type="invalid">{errors.pronouns}</Form.Control.Feedback>
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