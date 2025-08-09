// TypeScript declaration for BudPayPop on window
interface BudPayPopOptions {
  key: string;
  email: string;
  amount: number;
  currency: string;
  first_name?: string;
  onClose?: () => void;
  callback?: (response: any) => void;
}

interface Window {
  BudPayPop?: (options: BudPayPopOptions) => void;
}
