import { Table, Icon, Checkbox, Dropdown } from 'semantic-ui-react'

export default function ApplicationTable({application, onChange}){
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
                <Table.Cell><Dropdown name="status" onChange={(e, data) => onChange(e, data, application._id)} placeholder={application.status} options={options}/></Table.Cell>
                <Table.Cell>{application.dateApplied}</Table.Cell>
                <Table.Cell>{application.contactEmail}</Table.Cell>
                <Table.Cell>
                    {application.followUp ? <Icon name='check'/>
                    : <input type='checkbox' name='followUp' onChange={(e, data) => onChange(e, data, application._id)}/>}
                </Table.Cell>
                <Table.Cell>{application.jobLink}</Table.Cell>
            </Table.Row>
        </>
    )
}