import {List} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function getAppDetail({appDetail}) {
    return (
            <List horizontal size="massive" verticalAlign='middle'>
                <List.Item><h2>{appDetail.title} at {appDetail.company}</h2></List.Item>
                <List.Item><Link to={appDetail.jobLink} style={{color: '3776b9'}}>Link</Link></List.Item>
            </List>
    )
}