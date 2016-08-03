import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes }  from './+home/index';
import { MirekRoutes } from './+mirek/index';
import { GuiRoutes }   from './+gui/index';
import { SimonRoutes } from './+simon/simon.routes';
import { DragNDropRoutes } from './+dragndrop/dragndrop.routes';
import { ModalRoutes }   from './+modal/index';
import { FamilieRoutes }   from './+familie/index';
import { TodoRoutes } from './+todo/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MirekRoutes,
  ...GuiRoutes,
  ...SimonRoutes,
  ...DragNDropRoutes,
  ...ModalRoutes,
  ...FamilieRoutes,
  ...TodoRoutes
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
