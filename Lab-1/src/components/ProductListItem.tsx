import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Product } from '../data/messages';
import './MessageListItem.css';

interface ProductListItemProps {
  message: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          Product name: {message.name}
          <span className="date">
            <p>Expiration date:</p><IonNote>{message.expirationDate}</IonNote>
          </span>
        </h2>
        <h3>Quantity:{message.quantity}</h3>
        
      </IonLabel>
    </IonItem>
  );
};

export default ProductListItem; 
