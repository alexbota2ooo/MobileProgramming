import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { Product } from '../data/messages';

interface ItemPropsExt extends Product {
  onEdit: (id?: number) => void;
}

const Item: React.FC<ItemPropsExt> = ({ id, name, quantity, expirationDate, onEdit }) => {
  return (
    <IonItem onClick={() => onEdit(id)}>
      <IonLabel>{name}</IonLabel>
      <IonLabel>{quantity}</IonLabel>
      <IonLabel>{expirationDate}</IonLabel>
    </IonItem>
  );
};

export default Item;
