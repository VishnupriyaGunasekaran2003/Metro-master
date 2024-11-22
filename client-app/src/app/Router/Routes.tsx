import TicketDashboard from "../../features/tickets/dashboard/TicketDashboard";
import TicketForm from "../../features/tickets/form/TicketForm";
import TicketDetails from "../../features/tickets/details/TicketDetails";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/users/LoginForm";
import App from "../layout/app";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'tickets', element: <TicketDashboard />},
            {path: 'tickets/:id', element: <TicketDetails />},
            {path: 'createTicket', element: <TicketForm key='create' />},
            {path: 'manage/:id', element: <TicketForm key='manage' />},
            {path: 'login', element: <LoginForm />},
            {path: 'errors', element: <TestErrors />},
            {path: 'not-found', element: <NotFound />},
            {path: 'server-error', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found' />},
        ]
    }
]
export const router = createBrowserRouter(routes);