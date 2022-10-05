import { v4 as uuid } from 'uuid';

interface IDeliveryProps {
  id: string;
  id_client: string;
  id_deliveryman: string;
  item_name: string;
  create_at?: Date;
  end_at: Date;
}

class Delivery {
  id?: string;
  id_client: string;
  id_deliveryman: string;
  item_name: string;
  create_at?: Date;
  end_at: Date;

  constructor({
    id,
    id_client,
    id_deliveryman,
    item_name,
    end_at,
  }: IDeliveryProps) {
    this.id = id;
    this.id_client = id_client;
    this.id_deliveryman = id_deliveryman;
    this.item_name = item_name;
    this.end_at = end_at;

    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Delivery };
