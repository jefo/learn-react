export interface CardProps {
  title: string;
  content: string;
  image: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
