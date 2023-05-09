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
    const [loading,setLoading] = useState(false)
    const [applicationId, setApplicationId] = useState()


    async function getApplications(){
        const response = await applicationsApi.getAll()
        console.log(response)
        console.log(response.data)
        setApplications(response.data.applications)
    }


    async function onChange(e, data, applicationId) {
        setLoading(true)
        setApplicationId(applicationId)
        const { name, value } = data || e.target;
        const editedApplication = {
            id: applicationId,
            [name]: value
        }
        setEditApplications(editedApplication);
      }
      
      async function handleAdd(id) {
        // Make an API call to update the application with the given applicationId
        await applicationsApi.update(editApplications, id)
        setLoading(false)
        navigate('/')
      }
      
    useEffect(() => {
        if(loading){
            handleAdd(applicationId)
        }
        setLoading(false)

    }, [editApplications])

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
