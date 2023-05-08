import { Table, Icon, Checkbox } from 'semantic-ui-react'

export default function ApplicationTable({application}){
    return (
        <>
            <Table.Row>
                <Table.Cell>{application.title}</Table.Cell>
                <Table.Cell>{application.company}</Table.Cell>
                <Table.Cell>{application.status}</Table.Cell>
                <Table.Cell>{application.dateApplied}</Table.Cell>
                <Table.Cell>{application.contactEmail}</Table.Cell>
                {application.followUp ? <Table.Cell><Icon name='Check'/></Table.Cell> : <Table.Cell><Checkbox/></Table.Cell>}
                <Table.Cell>{application.jobLink}</Table.Cell>
            </Table.Row>
        </>
    )
}