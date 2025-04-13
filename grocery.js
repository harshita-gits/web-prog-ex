function calculateTotal() {
    const priceTomato = 20;
    const priceEggs = 50;
  
    const qtyTomato = parseInt(document.getElementById("qtyTomato").value) || 0;
    const qtyEggs = parseInt(document.getElementById("qtyEggs").value) || 0;
  
    const totalTomato = qtyTomato * priceTomato;
    const totalEggs = qtyEggs * priceEggs;
  
    document.getElementById("totalTomato").innerText = totalTomato;
    document.getElementById("totalEggs").innerText = totalEggs;
  
    let total = totalTomato + totalEggs;
  
    const coupon = document.getElementById("couponCode").value.trim();
    if (coupon === "001") {
      total *= 0.9;
    }
  
    document.getElementById("totalCost").innerText = total.toFixed(2);
  }
  
  function placeOrder(event) {
    event.preventDefault();
  
    const address = document.getElementById("address").value.trim();
    const coupon = document.getElementById("couponCode").value.trim();
    const totalAmount = document.getElementById("totalCost").innerText;
  
    if (!address) {
      alert("Please enter your address.");
      return;
    }
  
    document.getElementById("confirmAddress").innerText = "Address: " + address;
    document.getElementById("confirmTotal").innerText = "Total Amount: ₹" + totalAmount;
    document.getElementById("confirmation").style.display = "block";
  }
  
  calculateTotal();
  
  document.getElementById("couponCode").addEventListener("input", calculateTotal);
  