function orderTickets(ticketsInfo, sortingCriteria) {
    let tickets = [];
    for (let i = 0; i < ticketsInfo.length; i++) {
        let [destination, price, status] = ticketsInfo[i].split('|');
        let ticket = {
            destination,
            price: Number(price),
            status
        };
        tickets.push(ticket);
    }

    return tickets.sort((a, b) => a[sortingCriteria] > b[sortingCriteria]);
}

console.log(orderTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

console.log(orderTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));

console.log(orderTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));