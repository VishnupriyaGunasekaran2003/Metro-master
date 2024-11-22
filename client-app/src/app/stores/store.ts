import { createContext, useContext } from "react";
import TicketStore from "./ticketStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

interface Store {
    ticketStore: TicketStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
}
export const store: Store = {
    ticketStore: new TicketStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore()
}
export const StoreContext = createContext(store);
export function useStore() {
    return useContext(StoreContext);
}