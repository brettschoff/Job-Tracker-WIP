import { useState } from "react";
import { Button, Form, Grid, Card } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import * as applicationsApi from "../../utils/applicationsApi";

import PageHeader from "../../components/Header/Header";

export default function CreateApplication({ handleLogout }) {
  const navigate = useNavigate();

  const options = [
    { key: "a", text: "Applied", value: "Applied" },
    { key: "i", text: "Interview", value: "Interview" },
    { key: "o", text: "Offer", value: "Offer" },
    { key: "r", text: "Rejected", value: "Rejected" },
  ];

  const [application, setApplication] = useState({
    title: "",
    company: "",
    status: "",
    dateApplied: "",
    contactEmail: "",
    jobLink: "",
  });

  function handleChange(e, data) {
    const { name, value } = data || e.target;
    setApplication({
      ...application,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await applicationsApi.create(application);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Grid centered style={{ height: "100vh" }} >
      <Grid.Row style={{ height: 80 }}>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <h2>New Application</h2>
      <Grid.Row style={{ height: 900 }}>
        <Grid.Column style={{ maxWidth: 900 }}>
          <Card fluid raised>
            <Card.Content>
              <Form onSubmit={handleSubmit} style={{ maxWidth: 900 }}>
                <Form.Field>
                  <input
                    name="title"
                    value={application.title}
                    placeholder="Job Title"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    name="company"
                    value={application.company}
                    placeholder="Company Name"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Select
                  fluid
                  name="status"
                  options={options}
                  placeholder="Status"
                  onChange={handleChange}
                />
                <Form.Field>
                  <input
                    type="date"
                    name="dateApplied"
                    value={application.dateApplied}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    name="contactEmail"
                    value={application.contactEmail}
                    onChange={handleChange}
                    placeholder="Contact Email"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    name="jobLink"
                    value={application.jobLink}
                    placeholder="Link to the Job"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Button fluid type="submit" color="blue">
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
