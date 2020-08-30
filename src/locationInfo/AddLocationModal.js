import React from 'react'
import { Button, Header, Icon, Modal, Grid, Form, Label, GridRow, Select } from 'semantic-ui-react'
import { Formik, Field } from 'formik';

const stateOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
]

const AddLocationModal = ({open,onClose, handleSubmit})=> {

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={onClose}
    >
      <Header content='Add LOcations' />
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
         /* and other goodies */
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
            {/* <input
            className="fieldInput"
             type="text"
             name="state"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.locationName}
           /> */}
           <Field as="select" name="state">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
           <Select placeholder='Select your country' name="state" options={stateOptions} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={4}>
            <Label>Zip</Label>
            <input
            className="fieldInput"
             type="text"
             name="zip" minlength="5" maxlength="10"
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
