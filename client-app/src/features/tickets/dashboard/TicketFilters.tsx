import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";
export default function TicketFilters() {
    return (
        <>
            <Menu vertical size='large' style={{width: '100%', marginTop: 25 }} >
                <Header icon='filter' attached color="teal" content='Filters' />
                <Menu.Item content='All Tickets' />
                <Menu.Item content="Upcoming" />
                <Menu.Item content="Expired" />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}