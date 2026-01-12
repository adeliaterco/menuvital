import React from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PrintButtonProps {
  className?: string;
}

const PrintButton = ({ className }: PrintButtonProps) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button onClick={handlePrint} className={`print-button no-print ${className}`}>
      <Printer className="w-4 h-4" />
      Imprimir
    </Button>
  );
};

export default PrintButton;
