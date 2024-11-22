import { observer } from 'mobx-react-lite';
import {Segment, Grid, Icon} from 'semantic-ui-react'
import { Ticket } from '../../../app/models/ticket';
import { format } from 'date-fns';

interface Props {
    ticket: Ticket
}
export default observer(function TicketDetailedInfo({ticket}: Props) {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{ticket.startStation}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='teal'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
            <span>
            {format(ticket.dateTime!,'dd MMM yyyy h:mm aa')}
            </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='teal'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{ticket.numberOfPassengers}, {format(ticket.dateTime!,'dd MMM yyyy h:mm aa')}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
})