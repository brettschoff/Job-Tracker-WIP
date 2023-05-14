import { Link } from "react-router-dom";
import { Header, Segment, Sticky, Icon } from "semantic-ui-react";
import AppDetail from "../AppDetail/AppDetail";

export default function PageHeader({ handleLogout, isNotePage, appDetail }) {
    if (isNotePage) {
    return (
      <Segment clearing style={{padding: 0, backgroundColor: '#2F332F'}}>
        <Header as="h2" floated="left" >
            <AppDetail appDetail={appDetail}/>
        </Header>   
        <Header as="h2" floated="right" style={{paddingTop: 20}}>
          <Link to="/" style={{ paddingRight: 20 }}>
            <Icon name="home"></Icon>
          </Link>
          <Link to="/new-application" style={{ paddingRight: 20 }}>
            New Application
          </Link>
          <Link to="" onClick={handleLogout}>
            Logout
          </Link>
        </Header>
      </Segment>
  )};
  return (
    <Sticky>
      <Segment clearing style={{backgroundColor: '#2F332F'}}>
        <Header as="h2" floated="right" >
          <Link to="/" style={{ paddingRight: 20 }}>
            <Icon name="home"></Icon>
          </Link>
          <Link to="/new-application" style={{ paddingRight: 20 }}>
            New Application
          </Link>
          <Link to="" onClick={handleLogout}>
            Logout
          </Link>
        </Header>
      </Segment>
    </Sticky>
  );
}

