import { observer } from 'mobx-react-lite';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import { Ticket } from '../../../app/models/ticket';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const ticketImageStyle = {
    filter: 'brightness(30%)'
};
const ticketImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
interface Props {
    ticket: Ticket
}
export default observer (function TicketDetailedHeader({ticket}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${ticket.destination}.jpg`} fluid style={ticketImageStyle}/>
                <Segment style={ticketImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={ticket.startStation}
                                    style={{color: 'white'}}
                                />
                                <p>{format(ticket.dateTime!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong>Bob</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Activity</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${ticket.id}`} color='orange' floated='right'>
                    Manage Event
                </Button>
            </Segment>
        </Segment.Group>
    )
})