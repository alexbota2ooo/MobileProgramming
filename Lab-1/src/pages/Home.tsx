
import { useContext, useState } from 'react';
import { Product} from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonFabButton,
  IonFab,
  IonIcon,
  IonLoading,
  IonLabel
} from '@ionic/react';
import './Home.css';
import { add } from 'ionicons/icons';
import { ItemContext } from './ItemProvider';
import { RouteComponentProps } from 'react-router';
import { getLogger } from '../core';
import Item from './Item';
const log = getLogger('Home');
const Home: React.FC<RouteComponentProps> = ({history}) => {

  const {items, fetching, fetchingError} = useContext(ItemContext);
  /*const [products, setProducts] = useState<Product[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getProducts();
    setProducts(msgs);
  });*/
  log('render home');
  log(items);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading isOpen={fetching} message="Se adauga produsele"/>
        
        {items && (<IonList>
          {items.map(({ id, name, quantity, expirationDate}) => 
          <Item key={id} id={id} name={name} quantity={quantity} expirationDate={expirationDate} onEdit={id => history.push(`/item/${id}`)} />)}
        </IonList>)}
        {fetchingError && (
          <div>{fetchingError.message || 'Failed to fetch items'}</div>
        )}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => history.push('/item')}> 
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
