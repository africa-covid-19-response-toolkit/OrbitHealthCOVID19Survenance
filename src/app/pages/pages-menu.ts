import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 
  {
    title: 'Report',
    icon: 'edit-2-outline',
    children: [
   
      {
        title: 'Incidents',
        link: '/pages/forms/Claim',
      },
     
    ],
  },
   

  {
    title: 'Visualize',
    icon: 'map-outline',
    children: [
    
      {
        title: '  Map',
        link: '/pages/maps/leaflet',
      }
    ],
  },
   
];
