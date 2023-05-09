import PageHeader from "../../components/Header/Header";
import Table from "../../components/Table/Table"
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import * as applicationsApi from '../../utils/applicationsApi'

export default function DisplayPage({handleLogout}){

    const navigate = useNavigate()

    const [applications, setApplications] = useState([])
    const [editApplications, setEditApplications] = useState()


    async function getApplications(){
        const response = await applicationsApi.getAll()
        console.log(response)
        console.log(response.data)
        setApplications(response.data.applications)
    }


    async function onChange(e, data, applicationId, checked) {
        const { name, value } = data || e.target;
        setEditApplications({
            id: applicationId,
            [name]: value
        });
        handleAdd(applicationId);
      }
      
      async function handleAdd(id) {
        // Make an API call to update the application with the given applicationId
        await applicationsApi.update(editApplications, id)
        navigate('/')
      }
      


    useEffect(() => {
        getApplications();
    }, [])

    return (
        <div>
            <PageHeader handleLogout={handleLogout} />
            <Button />
            <Table applications={applications} onChange={onChange}/>
        </div>
    )
}
