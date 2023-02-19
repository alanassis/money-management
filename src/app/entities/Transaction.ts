import { randomUUID } from 'crypto';
import { Optional } from '@helpers/Optional';
import { Category } from './Category';

export interface TransactionProps {
  name: string;
  category: Category;
  amount: number;
  performedAt: Date;
  createdAt: Date;
}

export class Transaction {
  private _id: string;
  private props: TransactionProps;

  constructor(props: Optional<TransactionProps, 'createdAt'>, id?: string) {
    this._id = id || randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name) {
    this.props.name = name;
  }

  public get name() {
    return this.props.name;
  }

  public set category(category) {
    this.props.category = category;
  }

  public get category() {
    return this.props.category;
  }

  public set amount(amount) {
    this.props.amount = amount;
  }

  public get amount() {
    return this.props.amount;
  }

  public set performedAt(performedAt) {
    this.props.performedAt = performedAt;
  }

  public get performedAt() {
    return this.props.performedAt;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
