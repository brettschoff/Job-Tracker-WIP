import {List} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function getAppDetail({appDetail}) {
    return (
            <List horizontal>
                <List.Item><h3>{appDetail.title} at {appDetail.company}</h3></List.Item>
                <List.Item><Link to={appDetail.jobLink}>Link</Link></List.Item>
            </List>
    )
}