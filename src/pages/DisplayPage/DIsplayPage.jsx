import PageHeader from "../../components/Header/Header";
import Table from "../../components/Table/Table"

import { useState, useEffect } from "react";

import * as applicationsApi from '../../utils/applicationsApi'

export default function DisplayPage(){
    const [applications, setApplications] = useState([])

    async function getApplications(){
        const response = await applicationsApi.getAll()
        console.log(response)
    }

    useEffect(() => {
        getApplications();
    }, [])
    
    return (
        <div>
            <PageHeader />
            <Table applications={applications}/>
        </div>
    )
}
