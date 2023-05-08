import { Table, Icon, Checkbox, Dropdown } from 'semantic-ui-react'

export default function ApplicationTable({application, handleChange}){
    const options = [
        {key:'a', text:'Applied', value:'Applied'},
        {key:'i', text:'Interview', value:'Interview'},
        {key:'o', text:'Offer', value:'Offer'},
        {key:'r', text:'Rejected', value:'Rejected'}
    ]
    return (
        <>
            <Table.Row>
                <Table.Cell>{application.title}</Table.Cell>
                <Table.Cell>{application.company}</Table.Cell>
                <Table.Cell><Dropdown name="status" onChange={handleChange} placeholder={application.status} options={options}/></Table.Cell>
                <Table.Cell>{application.dateApplied}</Table.Cell>
                <Table.Cell>{application.contactEmail}</Table.Cell>
                {application.followUp ? <Table.Cell><Icon name='Check'/></Table.Cell> : <Table.Cell><Checkbox/></Table.Cell>}
                <Table.Cell>{application.jobLink}</Table.Cell>
            </Table.Row>
        </>
    )
}