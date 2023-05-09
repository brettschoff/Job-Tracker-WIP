import PageHeader from "../../components/Header/Header";
import Table from "../../components/Table/Table"
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";

import * as applicationsApi from '../../utils/applicationsApi'

export default function DisplayPage({handleLogout}){
    const [applications, setApplications] = useState([])
    const [editApplications, setEditApplications] = useState([{
        status:''
    }])

    async function getApplications(){
        const response = await applicationsApi.getAll()
        console.log(response)
        console.log(response.data)
        setApplications(response.data.applications)
    }

    async function onChange(e, data, applicationId) {
        const { name, value } = data || e.target;
        setEditApplications({
          ...editApplications,
          [applicationId]: {
            [name]: value,
          },
        });
        handleAdd(applicationId);
      }
      
      async function handleAdd(applicationId) {
        // Make an API call to update the application with the given applicationId
      }
      

    async function handleAdd(){}


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
