import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes }  from './+home/index';
import { MirekRoutes } from './+mirek/index';
import { GuiRoutes }   from './+gui/index';
import { SimonRoutes } from "./+simon/simon.routes";

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MirekRoutes,
  ...GuiRoutes,
  ...SimonRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
