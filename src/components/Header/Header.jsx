import { Link } from 'react-router-dom'
import { Header, Segment, Sticky, Icon } from 'semantic-ui-react'

export default function PageHeader({handleLogout}){

    return (
        <Sticky>
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
        </Sticky>
  );
}