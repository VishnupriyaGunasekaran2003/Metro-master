import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Ticket } from "../../../app/models/ticket";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface Props {
    ticket: Ticket
}
export default function TicketListItem({ticket}: Props) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/tickets/${ticket.id}`} >
                                {ticket.startStation}
                            </Item.Header>
                            <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" />{format(ticket.dateTime!, 'dd MMM yyyy h:mm aa')}
                    <Icon name="marker" />{ticket.numberOfPassengers}
                </span>
            </Segment>
            <Segment secondary>Attendies goes here</Segment>
            <Segment clearing>
                <span>{ticket.numberOfPassengers}</span>
                <Button 
                    as={Link} 
                    to={`/tickets/${ticket.id}`}
                    color="teal"
                    floated="right"
                    content='view'
                />
            </Segment>
        </Segment.Group>
    )
}