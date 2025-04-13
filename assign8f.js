function calculateTotal() {
    const adultPrice = 10;
    const childPrice = 5;

    let adultTickets = parseInt(document.getElementById("adults").value) || 0;
    let childTickets = parseInt(document.getElementById("children").value) || 0;

    let totalAmount = (adultTickets * adultPrice) + (childTickets * childPrice);

    document.getElementById("totalAmount").value = `₹${totalAmount}`;
}

