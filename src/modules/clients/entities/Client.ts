import { v4 as uuid } from 'uuid';

export interface IClientProps {
  id?: string;
  username: string;
  password: string;
}

class Client {
  private props: IClientProps;

  get id() {
    return this.props.id;
  }
  get username() {
    return this.props.username;
  }

  get password() {
    return this.props.password;
  }

  constructor(props: IClientProps) {
    this.props = props;

    if (!this.props.id) {
      this.props.id = uuid();
    }
  }
}

export { Client };
