import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Index from './pages/index'; // Assuming this is where your Index component is located
import ModulesPage from './pages/ModulesPage';
import ChildAdolescentPage from './pages/ChildAdolescentPage';
import DisordersDueToSubstanceUsePage from './pages/DisordersDueToSubstanceUsePage';
import DescriptionC from './pages/DescriptionC';
import AssessmentC from './pages/AssessmentC';
import ManagementC from './pages/ManagementC';
import CDAFollowUp from './pages/CDAFollowUp';
import DescriptionDDSU from './pages/DescriptionDDSU';
import CDAProtocolsPage1 from './pages/CDAProtocolsPage1';
import CDAProtocol1Page1 from './pages/CDAProtocol1Page1';
import CDAProtocol1Page2 from './pages/CDAProtocol1Page2';
import CDAProtocol1Page3 from './pages/CDAProtocol1Page3';
import CDAProtocol1Page5 from './pages/CDAProtocol1Page5';
import CDAProtocol1Page6 from './pages/CDAProtocol1Page6';
import CDAProtocol1Page7 from './pages/CDAProtocol1Page7';
import CDAProtocol1Page8 from './pages/CDAProtocol1Page8';
import CDAProtocolsPage2 from './pages/CDAProtocolsPage2';
import CDAProtocolsPage3 from './pages/CDAProtocolsPage3';
import CDAProtocolsPage4 from './pages/CDAProtocolsPage4';
import CDAProtocolsPage5 from './pages/CDAProtocolsPage5';
import CDAProtocolsPage6 from './pages/CDAProtocolsPage6';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/index">
          <Index />
        </Route>
        <Route exact path="/ModulesPage">
          <ModulesPage />
        </Route>
        <Route exact path="/ChildAdolescentPage">
          <ChildAdolescentPage />
        </Route>
        <Route exact path="/DisordersDueToSubstanceUsePage">
          <DisordersDueToSubstanceUsePage />
        </Route>
        <Route exact path="/DescriptionC">
          <DescriptionC />
          </Route>
        <Route exact path="/AssessmentC">
          <AssessmentC />
          </Route>
        <Route exact path="/ManagementC">
          <ManagementC />
        </Route>
        <Route exact path="/CDAFollowUp">
          <CDAFollowUp />
        </Route>
        <Route exact path="/DescriptionDDSU">
          <DescriptionDDSU />
        </Route>
        <Route exact path="/CDAProtocolsPage1">
          <CDAProtocolsPage1/>
        </Route>
        <Route exact path="/CDAProtocol1Page1">
          <CDAProtocol1Page1/>
        </Route>
        <Route exact path="/CDAProtocol1Page2">
          <CDAProtocol1Page2/>
        </Route>
        <Route exact path="/CDAProtocol1Page3">
          <CDAProtocol1Page3/>
        </Route>
        <Route exact path="/CDAProtocol1Page5">
          <CDAProtocol1Page5/>
        </Route>
        <Route exact path="/CDAProtocol1Page6">
          <CDAProtocol1Page6/>
        </Route>
        <Route exact path="/CDAProtocol1Page7">
          <CDAProtocol1Page7/>
        </Route>
        <Route exact path="/CDAProtocol1Page8">
          <CDAProtocol1Page8/>
        </Route>
        <Route exact path="/CDAProtocolsPage2">
          <CDAProtocolsPage2/>
        </Route>
        <Route exact path="/CDAProtocolsPage3">
          <CDAProtocolsPage3/>
        </Route>
        <Route exact path="/CDAProtocolsPage4">
          <CDAProtocolsPage4/>
        </Route>
        <Route exact path="/CDAProtocolsPage5">
          <CDAProtocolsPage5/>
        </Route>
        <Route exact path="/CDAProtocolsPage6">
          <CDAProtocolsPage6/>
        </Route>
        <Redirect exact from="/" to="/index" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
