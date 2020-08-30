import React from 'react';
import {Header, Button, Icon, Image} from 'semantic-ui-react'
import AddLocationModal from './AddLocationModal'
import LocationListPage from './LocationList'
import './location.css'
const LocationInfo = ()=> {
    const [open, setOpen] = React.useState(false)
    const listData = JSON.parse(localStorage.getItem('locations'));
    let listPage;
    const handleSubmit = (values) =>{
        const locationList = []
        if(JSON.parse(localStorage.getItem('locations')) && JSON.parse(localStorage.getItem('locations')).length) {
            let updateLocationList = JSON.parse(localStorage.getItem('locations'))
            updateLocationList.push(values)
            localStorage.setItem('locations',JSON.stringify(updateLocationList)) 
        }else {
            locationList.push(values)
            localStorage.setItem('locations',JSON.stringify(locationList))
        }
        // onClose={onClose}
    }
    console.log('values>>>>>',localStorage.getItem('locations'))

    if( listData && listData.length){
        listPage= <LocationListPage listData={listData}/>
    }else {
        listPage = <Image src={require("./images/location.jpg")}/>
    }
    return (
    <div className="wrapper">
        <div className="loaction-header">
            <Header as='h4' className="loaction">Locations</Header>
            <Button icon labelPosition='left' 
      onClick={() => setOpen(true)}>
                <Icon name='plus' />
                Add Location
            </Button>
        </div>
        <div>
            {listPage}
        </div>
        <AddLocationModal open={open} onClose={() => setOpen(false)} handleSubmit={handleSubmit}/>
    </div>
    );
}

export default LocationInfo;
