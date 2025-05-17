import { useRef, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  headerLabel: string;
  onCloseRequested: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, headerLabel, onCloseRequested, children }: ModalProps) {
  if (!isOpen) return null;

  const dialogRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.target === e.currentTarget) {
      onCloseRequested();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed bg-black opacity-50 inset-0 flex items-center justify-center z-50"
    >
      <div
        ref={dialogRef}
        className="bg-white rounded shadow-md w-full max-w-md p-4"
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">{headerLabel}</h2>
          <button
            onClick={onCloseRequested}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
