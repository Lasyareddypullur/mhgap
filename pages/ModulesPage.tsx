import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './ModulesPage.css'; // Import your CSS file

const ModulesPage: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack(); // Use history.goBack() to navigate back
  };

  const navigateToHome = () => {
    history.push('/index'); // Use history.push('/home') to navigate to home page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <span className="back-icon" onClick={goBack}>←</span>
          <IonTitle className="ion-text-center">mhGAP Intervention Guide</IonTitle>
          <div className="home" onClick={navigateToHome}>&#8962;</div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonCard className="module" routerLink="/ChildAdolescentPage">
            CHILD & ADOLESCENT MENTAL & BEHAVIOURAL DISORDERS
          </IonCard>
          <IonCard className="module">
            DISORDERS DUE TO SUBSTANCE USE
          </IonCard>
          {/* Add more IonCard components for other modules */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ModulesPage;
