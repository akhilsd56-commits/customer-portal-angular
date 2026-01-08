import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/customer-list/customer-list')
                .then(m => m.CustomerListComponent)
    }
];
