import React from 'react'
import styled from 'styled-components'

import { Heading1, List, Stack, Code, Button } from '../components'
import Avatar from './client-avatar'

const Link = styled.a`
  color: #0a84ae;
  text-decoration: none;
`

const clients = [
  {
    id: 'autogenerated-id-goes-here',
    name: 'Clients One',
    type: 'NO TYPE'
  },
  {
    id: 'beep-beep-boop-boop',
    name: 'Clients Two',
    type: 'SINGLE PAGE APPLICATION'
  }
]

class ClientList extends React.Component {
  render() {
    return (
      <div>
        <Heading1>Clients</Heading1>
        <div>Setup a mobile, web or IoT application to use Auth0 for Authentication.</div>
        <br />
        <br />
        <List>
          {clients.map(client => (
            <Stack key={client.id} widths={[7, 25, 38, 30]}>
              <Avatar />
              <div>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
                <br />
                <div>{client.type}</div>
              </div>
              <Stack compressed>
                <span>Client Id: </span>
                <Code>{client.id}</Code>
              </Stack>
              <Stack compressed>
                <Button icon="users" />
                <Button icon="connections" />
                <Button icon="analytics" />
                <Button icon="emails" />
              </Stack>
            </Stack>
          ))}
        </List>
      </div>
    )
  }
}

export default ClientList
