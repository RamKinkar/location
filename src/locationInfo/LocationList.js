import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const LocationList = (props) => {
//   const listData = props}   
console.log('listData>>>>>>>>>>>>',props)
return(
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Location Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>phone No.</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    { props.listData.map(field=>{
        return(
        <Table.Row><Table.Cell>{field.location}</Table.Cell>
            <Table.Cell>{field.addressLineOne}</Table.Cell>
            <Table.Cell>{field.phoneNo}</Table.Cell>
            <Table.Cell> <Icon name='edit' /><Icon name='delete' /></Table.Cell>
        </Table.Row>
        )
    })}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
}

export default LocationList
