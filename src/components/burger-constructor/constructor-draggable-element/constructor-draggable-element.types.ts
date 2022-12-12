export interface IDraggableElement {
  name: string;
  price: number;
  image: string;
  id: string;
  type: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}
