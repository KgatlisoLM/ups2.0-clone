type Customer = {
    email: string;
    name: string;
};

type CustomerList = {
  name: Id;
  value: Customer
};

type TrackingItem = {
    customer_id:  Id;
    customer: Customer;
    items: Items[]
};

type Item = {
    item_id: Id;
    name: string;
    price: number;
    quantity: number
};

type OrderResponse = {
    value: Order;
};

type CustomerResponse = {
    name: Id;
    value: Customer
};

type Order = {
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItem;
    Lat: number;
    Lng: number;
    Address: string;
    City: string;
};


