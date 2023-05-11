import {List, Segment} from "semantic-ui-react";

export default function getAppDetail({appDetail}) {
    return (
        <Segment>
            <List><h1>Application Details</h1>
                <List.Item><h3>Position Title: {appDetail.title}</h3></List.Item>
                <List.Item><h3>Company: {appDetail.company}</h3></List.Item>
                <List.Item><h3>Link: {appDetail.jobLink}</h3></List.Item>
            </List>
        </Segment>
    )
}