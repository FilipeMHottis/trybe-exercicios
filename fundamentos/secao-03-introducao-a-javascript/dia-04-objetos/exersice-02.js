let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
};
  
function customerInfo(order) {
    let nameCliente = order.name;
    let numberCell = order.phoneNumber;
    let address = 'R. ' + order.address.street + ' N°: ' + order.address.number + ' Ap. ' + order.address.apartment;
    let nameDelivery = order.order.delivery.deliveryPerson;

    return "Olá, " + nameDelivery + ", entrega para: " + nameCliente + ", Telefone: " + numberCell + ' ' + address
}
  
console.log(customerInfo(order));
  
function orderModifier(order) {
    order.name = 'Luiz Silva';
    order.payment = 50;

    return 'Olá, ' + order.name + ', o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$' + order.payment + ',00.'
}
  
console.log(orderModifier(order));