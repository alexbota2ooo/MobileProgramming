import React, { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { getLogger } from '../core';
import { ItemContext } from './ItemProvider';
import { RouteComponentProps } from 'react-router';
import { Product } from '../data/messages';

const log = getLogger('ItemEdit');

interface ItemEditProps extends RouteComponentProps<{
  id?: string;
}> {}

const ItemEdit: React.FC<ItemEditProps> = ({ history, match }) => {
  const { items, saving, savingError, saveItem } = useContext(ItemContext);
  const [quantity, setQuantity] = useState(0);
  const [expirationDate, setDate] = useState('');
  const [name, setName] = useState('Default name');
  const [item, setItem] = useState<Product>();
  useEffect(() => {
    log('useEffect');
    const routeId = match.params.id || '';
    log (routeId);
    const item = items?.find(it => it.id == parseInt(routeId));
    setItem(item);
    if (item) {
      setQuantity(item.quantity);
      setDate(item.expirationDate);
      setName(item.name);
    }
  }, [match.params.id, items]);
  const handleSave = () => {
    const editedItem = item ? { ...item,name, quantity, expirationDate } : {name, quantity, expirationDate };
    saveItem && saveItem(editedItem).then(() => history.goBack());
  };
  log('render');
  log(items);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleSave}>
              Save
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel>Expiration date : {expirationDate}</IonLabel>
        <IonInput value={name} onIonChange={e => setName(e.detail.value || '')} />
        
        <IonInput value={quantity} onIonChange={e => setQuantity(Number(e.detail.value) || 0)} />
        <IonLoading isOpen={saving} />
        {savingError && (
          <div>{savingError.message || 'Failed to save item'}</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ItemEdit;
