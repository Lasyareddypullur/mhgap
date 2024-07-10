import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,IonButton } from '@ionic/react';
import './index2.css'; // Import your CSS file
import { useHistory } from 'react-router-dom';
import moduleIcon from '../assets/module-icon.jpeg';
import masterIcon from '../assets/master-chart-icon.jpeg';
import essentialIcon from '../assets/essential-care-icon.jpeg';
import furtherIcon from '../assets/further-info-icon.jpeg';
import whoICOn from '../assets/who-logo.jpeg';
const Index2: React.FC = () => {
  const history = useHistory();
  
  const handleSwitchVersion = () => {
    history.push('/VersionPrompt');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">mhGAP Intervention Guide
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className="button-container">
          <IonButton expand="full" color="secondary" onClick={handleSwitchVersion}>
            Switch Version
          </IonButton>
        </div>
        <div className="container">
          <IonCard routerLink="/ModulesPage" className="card">
            <img src={moduleIcon} alt="Modules Icon"/>
            <IonCardHeader>
              <IonCardTitle>MODULES</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="card">
            <img src={masterIcon} alt="Master Chart Icon" />
            <IonCardHeader>
              <IonCardTitle>MASTER CHART</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="card">
            <img src={essentialIcon} alt="Essential Care Icon" />
            <IonCardHeader>
              <IonCardTitle>ESSENTIAL CARE & PRACTICE</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="card">
            <img src={furtherIcon} alt="Further Information Icon" />
            <IonCardHeader>
              <IonCardTitle>FURTHER INFORMATION</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>
      </IonContent>
      <footer className="footer">
        <img src={whoICOn} alt="WHO Logo" />
      </footer>
    </IonPage>
  );
};

export default Index2;