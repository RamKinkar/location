import React from 'react';
import {Header, Button, Icon, Image} from 'semantic-ui-react'
import AddLocationModal from './AddLocationModal'
import LocationListPage from './LocationList'
import './location.css'
const LocationInfo = ()=> {
    const [open, setOpen] = React.useState(false)
    const [listData, setListData] = React.useState(JSON.parse(localStorage.getItem('locations')))
    let listPage;
    const handleSubmit = (values) =>{
        const locationList = []
        if(JSON.parse(localStorage.getItem('locations')) && JSON.parse(localStorage.getItem('locations')).length) {
            let updateLocationList = JSON.parse(localStorage.getItem('locations'))
            updateLocationList.push(values)
            localStorage.setItem('locations',JSON.stringify(updateLocationList))
            setListData(JSON.parse(localStorage.getItem('locations'))) 
        }else {
            locationList.push(values)
            localStorage.setItem('locations',JSON.stringify(locationList))
            setListData(JSON.parse(localStorage.getItem('locations')))
        }
        setOpen(false)
    }
    const removeLocation = (index) => {
        console.log('index value from child',index)
        const updateLocationList = JSON.parse(localStorage.getItem('locations'))
        updateLocationList.splice(index,1)
        console.log('index value from child',updateLocationList)
        localStorage.setItem('locations',JSON.stringify(updateLocationList))
        setListData(JSON.parse(localStorage.getItem('locations'))) 

    }
    if( listData && listData.length){
        listPage= <LocationListPage listData={listData} removeLocation={removeLocation}/>
    }else {
        listPage = <Image src={require("./images/location.jpg")} className="image-location"/>
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
