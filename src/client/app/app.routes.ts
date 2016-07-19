import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes }  from './+home/index';
import { MirekRoutes } from './+mirek/index';
import { GuiRoutes }   from './+gui/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MirekRoutes,
  ...GuiRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
