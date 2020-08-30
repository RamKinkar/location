import React from 'react'
import { Button, Header, Icon, Modal, Grid, Form, Label, GridRow, Select, Dropdown } from 'semantic-ui-react'
import { Formik, Field } from 'formik';

const stateOptions = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
]

const AddLocationModal = ({open,onClose, handleSubmit})=> {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Header content='Add Locations' />
      <Modal.Content>
      <Formik
             name="appointmentPool"
             initialValues={{ location: '', addressLineOne: '', suiteNo: '', addressLineTwo:'', city:'', state: '', zip: '', phoneNo: '', timeZone: '', facultyTime: '', appointmentPool: '' }}
        onSubmit= {(values)=>{handleSubmit(values)}} 
      >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
            <Label>Location Name</Label>
            <input 
            className="fieldInput"
             type="text"
             name="location"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName} required
           />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={6}>
            <Label>Address Line1</Label>
            <input
            className="fieldInput"
             type="text"
             name="addressLineOne"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
            <Grid.Column computer={6}>
            <Label>Suit No</Label>
            <input
            className="fieldInput"
             type="number"
             name="suiteNo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={4}>
            <Label>Address Line2</Label>
            <input
            className="fieldInput"
             type="text"
             name="addressLineTwo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
            <Grid.Column computer={4}>
            <Label>City</Label>
            <input
            className="fieldInput"
             type="text"
             name="city"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
           </Grid.Column>
           <Grid.Column>
            <Label>State</Label>
           <Field style={{padding: "10px", margin:"10px"}} as="select" name="state">
           <option value="">Select State</option>
           { stateOptions.map(field=>{
              return(
              <option value={field}>{field}</option>
              )
          })}
           </Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={4}>
            <Label>Zip</Label>
            <input
            className="fieldInput"
             type="text"
             name="zip" minLength="5" maxLength="10"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
            <Grid.Column computer={4}>
            <Label>PhoneNO</Label>
            <input
            className="fieldInput"
             type="number"
             name="phoneNo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
            <Grid.Column computer={4}>
            <Label>TimeZone</Label>
            <input
            className="fieldInput"
             type="text"
             name="timeZone"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={6}>
            <Label>Faculty Time</Label>
            <input
            className="fieldInput"
             type="text"
             name="facultyTime"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
            <Grid.Column computer={6}>
            <Label>Appointment Pool</Label>
            <input
            className="fieldInput"
             type="text"
             name="appointmentPool"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button closeIcon onClose={onClose} onClick={onClose}>Cancel</Button>
            <Button type="submit" onClose={onClose}>Save</Button>
          </Grid.Row>
        </Grid>
        </form>)}
        </Formik>
      </Modal.Content>
      <Modal.Actions>
      </Modal.Actions>
    </Modal>
  )
}

export default AddLocationModal
