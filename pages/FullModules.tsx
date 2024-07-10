import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline, homeOutline } from 'ionicons/icons';
import './ModulesPage.css'; // You can create this CSS file to handle your styles

const FullModules: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/index');
  };

  const goHome = () => {
    history.push('/index');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButton fill="clear" slot="start" onClick={goBack}>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
          <IonTitle className="ion-text-center">mhGAP Intervention Guide</IonTitle>
          <IonButton fill="clear" slot="end" onClick={goHome}>
            <IonIcon icon={homeOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonCard className="module" style={{ backgroundColor: '#C71585' }}>
            <IonCardContent>DEPRESSION</IonCardContent>
          </IonCard>
          <IonCard className="module" style={{ backgroundColor: '#4169E1' }}>
            <IonCardContent>PSYCHOSES</IonCardContent>
          </IonCard>
          <IonCard className="module" style={{ backgroundColor: '#00BFFF' }}>
            <IonCardContent>EPILEPSY</IonCardContent>
          </IonCard>
          <IonCard className="module" style={{ backgroundColor: '#32CD32' }} onClick={() => history.push('/ChildAdolescentPage')}>
            <IonCardContent>CHILD & ADOLESCENT MENTAL & BEHAVIOURAL DISORDERS</IonCardContent>
          </IonCard>
          <IonCard className="module" style={{ backgroundColor: '#9ACD32' }}>
            <IonCardContent>DEMENTIA</IonCardContent>
          </IonCard>
          <IonCard className="module" style={{ backgroundColor: '#FFA500' }} onClick={() => history.push('/DisordersDueToSubstanceUsePage')}>
            <IonCardContent>DISORDERS DUE TO SUBSTANCE USE</IonCardContent>
          </IonCard>
          <IonCard className="module" style={{ backgroundColor: '#FF4500' }}>
            <IonCardContent>SELF-HARM/SUICIDE</IonCardContent>
          </IonCard>
          <IonCard className="module" style={{ backgroundColor: '#8E44AD' }}>
            <IonCardContent>OTHER SIGNIFICANT MENTAL HEALTH COMPLAINTS</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FullModules;


