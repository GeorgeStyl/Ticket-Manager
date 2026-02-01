/*
* Maps frontend state to backend-ready JSON
*/
export const createBookingDTO = (date, seats) => {
    return {
        bookingDate: date.format('YYYY-MM-DD'), // Formats Dayjs object to string
        seatIds: seats,                         // Array of strings ['S1', 'S2']
        totalSeats: seats.length,
        timestamp: new Date().toISOString()
    };
};