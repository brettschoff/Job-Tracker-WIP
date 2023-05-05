import { Link } from 'react-router-dom'
import { Header, Segment, Image, Icon } from 'semantic-ui-react'

export default function PageHeader(){
    return (
        <Segment clearing>
            <Header as="h2" floated="right">
                <Link to="/">
                    <Icon name="home"></Icon>
                </Link>
                <Link to="" onClick={handleLogout}>
                    Logout
                </Link>
            </Header>
        </Segment>
  );
}