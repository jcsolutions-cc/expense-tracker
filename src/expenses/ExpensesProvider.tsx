

import { createContext, useContext, useState, ReactNode } from 'react';
import { Expense, NewExpense } from '../types';
import { generateId } from '../utils/format';

type ExpensesContextValue = {
  expenses: Array<Expense>;
  addExpense: (input: NewExpense) => void;
};

const ExpensesContext = createContext<ExpensesContextValue | null>(null);

export function ExpenseProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);

  const addExpense = (input: NewExpense) => {
    const date = new Date().toISOString();

    const expense: Expense = {
      ...input,
      id: generateId(),
      createAt: date,
      updateAt: date,
    };

    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  const ctx = useContext(ExpensesContext);

  if (!ctx) {
    throw new Error('useExpenses must be used inside ExpenseProvider');
  }

  return ctx;
}
