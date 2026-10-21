


export type Expense = {
  id: string;
  amount: number;
  category: CategoryId;
  note?: string;
  date: string; // ISO string
  createAt: string; // ISO string
  updateAt: string; //Future
};

export type CategoryId =
  | 'food' | 'transport' | 'home' | 'fun' | 'health' | 'other';

export type Category = {
  id: CategoryId;
  emoji: string;
  color: string;
};
