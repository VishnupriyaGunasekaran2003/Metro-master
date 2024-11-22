import { useEffect, useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Ticket } from "../../../app/models/ticket";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {v4 as uuid} from 'uuid';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default observer(function TicketForm() {
    const {ticketStore} = useStore();
    const { createTicket, updateTicket, loading,
        loadTicket, loadingInitial} = ticketStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [ticket, setTicket] = useState<Ticket>({
        id: '',
        startStation: '',
        destination: '',
        numberOfPassengers: 0,
        dateTime: null
    });

    const validationSchema = Yup.object({
        startStation: Yup.string().required('The Start station is required'),
        destination: Yup.string().required('The Destination is required'),
        numberOfPassengers: Yup.number().required(),
        dateTime: Yup.string().required('Date is required').nullable(),
    })

    useEffect(() => {
        if(id) loadTicket(id).then(ticket => setTicket(ticket!))
    },[id,loadTicket])

    function handleFormSubmit(ticket: Ticket) {
        if(!ticket.id) {
            ticket.id = uuid();
            createTicket(ticket).then(() => navigate(`/tickets/${ticket.id}`));
        } else {
            updateTicket(ticket).then(() => navigate(`/tickets/${ticket.id}`));
        }
    }

    if(loadingInitial) return <LoadingComponent content="Loading Ticket..." />

    return (
        <Segment clearing>
            <Header content='Ticket Details' sub color="teal" />
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={ticket} 
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name="startStation" placeholder="Start Station" />
                        <MyTextInput name="destination" placeholder="Destination" />
                        <MyTextInput name="numberOfPassengers" placeholder="Number of Passengers" />
                        {/* <MyTextArea rows={3} placeholder='Description' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Category' name='category' /> */}
                        <MyDateInput 
                            placeholderText='Date' 
                            name='dateTime' 
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm aa'
                        />
                        <Header content='Location Details' sub color="teal" />
                        {/* <MyTextInput placeholder='City' name='city' />
                        <MyTextInput placeholder='Venue' name='venue' /> */}
                        <Button 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} floated="right" 
                            positive type="submit" content="Submit" />
                        <Button as={Link} to='/activities' floated="right" type="button" content="Cancel" />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
})