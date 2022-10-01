import { v4 as uuid } from 'uuid';

export interface IDeliverymanProps {
  id?: string;
  username: string;
  password: string;
}

class Deliveryman {
  private props: IDeliverymanProps;

  get id() {
    return this.props.id;
  }
  get username() {
    return this.props.username;
  }

  get password() {
    return this.props.password;
  }

  constructor(props: IDeliverymanProps) {
    this.props = props;

    if (!this.props.id) {
      this.props.id = uuid();
    }
  }
}

export { Deliveryman };
