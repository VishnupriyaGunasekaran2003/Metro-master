export interface Ticket {
    id: string;
    startStation: string;
    destination: string;
    numberOfPassengers: number;
    dateTime: Date | null;
  }