import React, { useEffect, useState } from 'react'
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
import Select, {components} from 'react-select';
import { colors } from '@mui/material';
import { getCookie } from '../../helpers/auth';

const RegisterNext = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preferredName, setPreferred] = useState('');
  const [location, setLocation] = useState('');
  const [continent, setContinent] = useState('');
  const [continents, setContinents] = useState([]);
  const [region, setRegion] = useState('');
  const [regions, setRegions] = useState([]);
  const [selectorRegionValue, setSelectorRegionValue] = useState(null);
  const [stateProvince, setStateProvince] = useState('');
  const [stateProvinces, setStateProvinces] = useState([]);
  const [selectorSPValue, setSelectorSPValue] = useState(null);
  const [city, setCity] = useState('');
  const [DOB, setDOB] = useState(null);
  const [pronouns, setPronouns] = useState('');
  const [errors, setErrors] = useState({});
  const [selectorSubmitted, setSelectorSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [namePrivacy, setNamePrivacy] = useState(false);
  const [dobPrivacy, setDOBPrivacy] = useState(false);
  const [pronounPrivacy, setPronounPrivacy] = useState(false);
  const [locationPrivacy1, setLocationPrivacy1] = useState(false);
  const [locationPrivacy2, setLocationPrivacy2] = useState(false);
  const [locationPrivacy3, setLocationPrivacy3] = useState(false);

  const token = getCookie('token');

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

  const invalidRegions = ["Northeast NA", "Southeast NA", "Northwest NA", "Southwest NA", "South NA", "Midwest NA", "United States", "Canada", ''];

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
            backgroundColor: 'white',
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

  const registerUser = async () => {
    // // Send user data to the server with a fetch request
    // console.log('User registered');
    // console.log(firstName, lastName, preferredName, pronouns);
    // console.log(DOB.format('YYYY-MM-DD'));
    // //print out preferred name, city
    // console.log(location, city);
    // //print out location privacy options
    // console.log(locationPrivacy1, locationPrivacy2, locationPrivacy3);
    // //print out name, dob, pronoun privacy options
    // console.log(namePrivacy, dobPrivacy, pronounPrivacy);
    // //get the privacy data
    // console.log(getPrivacyData());
    const body = {
      first: firstName,
      last: lastName,
      preferred: preferredName,
      lid: location,
      city: city,
      pronouns: pronouns,
      birthday: DOB.format('YYYY-MM-DD'),
      privacy: getPrivacyData()
    };

    console.log(body);

    const response = await fetch('https://testing.emblems.gg/user/UserDetails.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    if(data.status === 'success') {
      console.log('User registered successfully');
      console.log(data.message);
    } else {
      console.log('User registration failed. Check dev tools for more info.');
      console.log(data);
    }
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

  useEffect(() => {
    getLocationOptions('continents');
  }, []);

  useEffect(() => {
    setRegion('');
    setSelectorRegionValue(null);
    setStateProvince('');
    setSelectorSPValue(null);
    setCity('');
    // setLocation(continent);
    console.log(continent, location);
    if(continent !== '') {
      getLocationOptions('regions', continent);
    }
  }, [continent]);

  useEffect(() => {
    setStateProvince('');
    setSelectorSPValue(null);
    setCity('');
    // setLocation(region);
    console.log(region, location);
    // if(region !== '' && (region === ("Northeast NA" || "Southeast NA" || "Northwest NA" || "Southwest NA" || "South NA" || "Midwest NA" || "United States" || "Canada"))) {
    if(region !== '') {
      getLocationOptions('stateProvinces', region);
    }
  }, [region]);

  const optionsConverter = (options) => {
    const optionsArray = [];
    //for loop through the options object and return an array of objects with value and label properties 
    for (const key in options) {
      console.log(key);
      if(key === null) 
        optionsArray.push({ isSeparator: true });
      else
        optionsArray.push({ value: options[key], label: key });
    }
    return optionsArray;
  }

  const getPrivacyData = () => {
    const privacy = []; //array to hold the privacy options name, location, pronouns, and dob in that order. If the privacy value is false, then push 0, else push 1
    
    if(namePrivacy === true)
      privacy.push(1);
    else 
      privacy.push(0);

    if (locationPrivacy3 === true) {
      privacy.push(3 + 1);
    } else if (locationPrivacy2 === true) {
      privacy.push(2 + 1);
    }
    else if (locationPrivacy1 === true) {
      privacy.push(1 + 1);
    } else {
      privacy.push(0);
    }

    if(pronounPrivacy === true)
      privacy.push(1);
    else 
      privacy.push(0);

    if(dobPrivacy === true)
      privacy.push(1);
    else 
      privacy.push(0);

    return privacy;
  }

  const setSelectorVal = (selector, value) => {
    console.log(selector, value);
    console.log(location);
    console.log(stateProvince);
    console.log(namePrivacy);
    if(selector === 'region') {
      setSelectorRegionValue(regions.find(r => r.value === value));
    } else if (selector === 'stateProvince') {
      setSelectorSPValue(stateProvinces.find(sp => sp.value === value));
    }
  }

  // Define the custom option component
const CustomOption = (props) => {
  if (props.data.isSeparator) {
      return (
          <div style={{ margin: '8px 0', borderBottom: '5px solid #000000' }}></div>
      );
  }

  return <components.Option {...props} />;
};

  const locationPrivacyHandler = (id) => {
    //if id is 1 then set locationPrivacy1 to true and set locationPrivacy2 and locationPrivacy3 to false
    if(id === '1' && !locationPrivacy1) {
      setLocationPrivacy1(true);
      setLocationPrivacy2(false);
      setLocationPrivacy3(false);
    } 
    // else if (id === '1' && locationPrivacy1)  {
    //   setLocationPrivacy1(false);
    // }
    //if id is 2 then set locationPrivacy1 and locationPrivacy2 to true and set locationPrivacy3 to false
    else if(id === '2' && !locationPrivacy2) {
      setLocationPrivacy1(true);
      setLocationPrivacy2(true);
      setLocationPrivacy3(false);
    } 
    // else if (id === '2' && locationPrivacy2) {
    //   setLocationPrivacy1(false);
    //   setLocationPrivacy2(false);
    // }
    //if id is 3 then set locationPrivacy1, locationPrivacy2, and locationPrivacy3 to true
    else if(id === '3' && !locationPrivacy3) {
      setLocationPrivacy1(true);
      setLocationPrivacy2(true);
      setLocationPrivacy3(true);
    } 
    // else if (id === '3' && locationPrivacy3){
    //   setLocationPrivacy1(false);
    //   setLocationPrivacy2(false);
    //   setLocationPrivacy3(false);
    // }
    else {
      setLocationPrivacy1(false);
      setLocationPrivacy2(false);
      setLocationPrivacy3(false);
    }

  }

  const getLocationOptions = async (location, locationParam) => {
    const response = await fetch(`https://testing.emblems.gg/tables/Region.php?${locationParam ? 'parent=' + locationParam : ''}`, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${token}`
      },
    });

    const data = await response.json();
    if(data.status === 'success') {
      console.log('Location options fetched successfully');
      console.log(data.message);
      const options = optionsConverter(data.message);
      if(location === 'continents') {
        setContinents(options);
      } else if(location === 'regions') {
        setRegions(optionsConverter(data.message[0]));
      } else if (location === 'stateProvinces') {
        setStateProvinces(optionsConverter(data.message[0]));
      }
    } else {
      console.log('Unable to fetch location options. Check dev tools for more info.');
      console.log(data);
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

          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Preferred Name (optional)</Form.Label>
            <Form.Control 
              required
              type="text" 
              placeholder="Enter preferred name" 
              value={preferredName}
              onChange={(e) => setPreferred(e.target.value)}
              // isInvalid={errors.lastName}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            {/* <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback> */}
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                label="Keep name private public profile" 
                checked={namePrivacy}
                onChange={(e) => setNamePrivacy(e.target.checked)}
              />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="validationCustom03"> 
            <Form.Label>Location</Form.Label>

            Comment - To add your custom css on the form fields, add bsPrefix='nameofclass' to the form component as if it is a class
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
            <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>

          </Form.Group> */}

          <Form.Label>Location</Form.Label>
          <p>Select the checkboxes where you'd like parts of your location to remain private</p>
          <Select 
            className='mb-2'
            options={continents}
            components={{ Option: CustomOption }}
            styles={selectorStyles}
            onChange={(option) => {setContinent(option.label); setLocation('')}}
            // value={continent && Array.isArray(continents) ? continents.find(c => c.value === continent) : undefined}
            placeholder='Select continent'
          />
          

          {/* <Form.Label>Country</Form.Label>   */}
          {/* {if continent is NOT empty then render the bottom select } */}
          {continent !== '' ? 
            <div className='d-flex'>
              <Select 
                className='mb-2 flex-grow-1' 
                options={regions} 
                components={{ Option: CustomOption }}
                styles={selectorStyles} 
                onChange={(option) => {setRegion(option.label); setSelectorVal('region', option.value); setLocation(option.value) }} 
                value={selectorRegionValue}
                // value={region && Array.isArray(regions) ? regions.find(c => c.value === region) : undefined}
                placeholder='Select region'
              /> 
              
              <input
                id='3'
                type="checkbox"
                checked={locationPrivacy3}
                disabled={region === ''}
                onChange={(e) => locationPrivacyHandler(e.target.id)}
                // style={{ display: 'none' }} // Hide the actual checkbox input
                style={{
                  marginLeft: '5px', // Add some space between the Select and the checkbox
                  // marginRight: '10px', // Add some space between the checkbox and the next element
                  cursor: 'pointer',
                  width: '38px', // Adjust as needed
                  height: '38px', // Adjust to match the height of your Select component
                  // transform: 'scale(2)', // Enlarge the checkbox; adjust scale as needed
                  // verticalAlign: 'middle', // Align vertically
                }}
              />
            </div>: null
          }

          {/* <Select 
            className='mb-2'
            options={locationOptions}
            styles={selectorStyles}
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            placeholder='Select country'
          /> */}

          {/* <Form.Label>Region</Form.Label> */}

          {(region !== '' && (invalidRegions.includes(region))) ? 
            <div className='d-flex'>
              <Select 
                className='mb-2 flex-grow-1'
                options={stateProvinces}
                components={{ Option: CustomOption }}
                styles={selectorStyles}
                onChange={(option) => {setStateProvince(option.label); setSelectorVal('stateProvince', option.value); setLocation(option.value)}}
                value={selectorSPValue}
                // value={stateProvince && Array.isArray(stateProvinces) ? stateProvinces.find(c => c.value === stateProvince) : undefined}
                placeholder='Select state/province'
              /> 

              <input
                id='2'
                type="checkbox"
                checked={locationPrivacy2}
                disabled={stateProvince === ''}
                onChange={(e) => locationPrivacyHandler(e.target.id)}
                // style={{ display: 'none' }} // Hide the actual checkbox input
                style={{
                  marginLeft: '5px', // Add some space between the Select and the checkbox
                  // marginRight: '10px', // Add some space between the checkbox and the next element
                  cursor: 'pointer',
                  width: '38px', // Adjust as needed
                  height: '38px', // Adjust to match the height of your Select component
                  // transform: 'scale(2)', // Enlarge the checkbox; adjust scale as needed
                  // verticalAlign: 'middle', // Align vertically
                }}
              />
            </div>: null
          }

          {/* <input className='w-100' type='text' placeholder='Type city location' ></input> */}
          {((stateProvince !== '') || (!invalidRegions.includes(region))) ? 
            <div className='d-flex'>
              <Form.Group className="mb-3 flex-grow-1" controlId="validationCustom01">
                {/* <Form.Label>City</Form.Label> */}
                <Form.Control 
                  required
                  type="text" 
                  placeholder="Enter city name (optional)" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  // isInvalid={errors.firstName}
                />
                {/* Add validation to city */}
                {/* <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback> */}
              </Form.Group>

              <input
                id='1'
                type="checkbox"
                checked={locationPrivacy1}
                disabled={city === ''}
                onChange={(e) => locationPrivacyHandler(e.target.id)}
                // style={{ display: 'none' }} // Hide the actual checkbox input
                style={{
                  marginLeft: '5px', // Add some space between the Select and the checkbox
                  // marginRight: '10px', // Add some space between the checkbox and the next element
                  cursor: 'pointer',
                  width: '38px', // Adjust as needed
                  height: '38px', // Adjust to match the height of your Select component
                  // transform: 'scale(2)', // Enlarge the checkbox; adjust scale as needed
                  // verticalAlign: 'middle', // Align vertically
                }}
              /> 
            </div>
          : null
          }

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
              <Form.Check 
                type="checkbox" 
                label="Keep DOB private from public profile" 
                checked={dobPrivacy}
                onChange={(e) => setDOBPrivacy(e.target.checked)}
              />
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
              <Form.Check 
                type="checkbox" 
                label="Keep pronouns private from public profile" 
                checked={pronounPrivacy}
                onChange={(e) => setPronounPrivacy(e.target.checked)}
              />
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