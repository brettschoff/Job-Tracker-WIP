import PageHeader from "../../components/Header/Header";
import Table from "../../components/Table/Table"

import { useState, useEffect } from "react";

import * as applicationsApi from '../../utils/applicationsApi'

export default function DisplayPage({handleLogout}){
    const [applications, setApplications] = useState([])

    async function getApplications(){
        const response = await applicationsApi.getAll()
        console.log(response)
        console.log(response.data)
        setApplications(response.data.applications)
    }

    useEffect(() => {
        getApplications();
    }, [])

    return (
        <div>
            <PageHeader handleLogout={handleLogout} />
            <Table applications={applications}/>
        </div>
    )
}
