// comment added successfully
const serviceName = "orderService";
const orders = [];
function createOrder(id, items) {
  const order = { id, items, status: "pending", createdAt: new Date() };
  orders.push(order);
  return order;
}
const getOrder = id => orders.find(o => o.id === id);
const listOrders = () => [...orders];
module.exports = { createOrder, getOrder, listOrders };
