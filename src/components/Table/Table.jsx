import { Table } from 'semantic-ui-react'
import TableBody from '../TableBody/TableBody'


export default function applicationTable({applications, onChange}){
    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Date Applied</Table.HeaderCell>
                    <Table.HeaderCell>Contact Email</Table.HeaderCell>
                    <Table.HeaderCell>Follow up</Table.HeaderCell>
                    <Table.HeaderCell>Job Link</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {applications.map((application) => {
                    return <TableBody handleChange={onChange} application={application} key={application._id}/>
                })}
            </Table.Body>
        </Table>
    )
}