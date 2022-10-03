import { v4 as uuid } from 'uuid';

export interface IDeliverymanProps {
  id?: string;
  username: string;
  password: string;
}

class Deliveryman {
  id?: string;
  username: string;
  password?: string;

  constructor() {
    this.username = '';
    this.password = '';

    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Deliveryman };
