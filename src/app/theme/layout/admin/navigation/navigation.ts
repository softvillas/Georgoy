import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home'
      },
     
    ]	
    
  },
  // admin setUp 
  {
    id: 'ui-element',
    title: 'Admin',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: '',
        title: 'Admin SetUp',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Create Role',
            type: 'item',
            url: '/admin-setup/create-role'
          },
          {
            id: 'button',
            title: 'Create Role Access',
            type: 'item',
            url: '#'
          },
          {
            id: 'badges',
            title: 'Create Modules',
            type: 'item',
            url: '#'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Create User',
            type: 'item',
            url: '/admin-setup/user-list'
          },
          {
            id: 'cards',
            title: 'Partner View',
            type: 'item',
            url: '/admin-setup/partner-view'
          },
          {
            id: 'collapse',
            title: 'Partner Create',
            type: 'item',
            url: '/admin-setup/partner-create'
          },
          {
            id: 'carousel',
            title: 'ForgetPassword',
            type: 'item',
            url: '#'
          },
          {
            id: 'grid-system',
            title: 'Policy Transfer',
            type: 'item',
            url: '#'
          }
         
        ]
      },
      
    ]
  },
  // insurence
  {
    id: 'ui-element',
    title: 'Insurence',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: '',
        title: 'Insurence',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Dashboard',
            type: 'item',
            url: '#'
          },
          {
            id: 'button',
            title: 'Surrender Form',
            type: 'item',
            url: '#'
          },
          {
            id: 'badges',
            title: 'Personal Accident',
            type: 'item',
            url: '#'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'VAT Emailer',
            type: 'item',
            url: '#'
          },
          {
            id: 'cards',
            title: 'PenaltyCheck',
            type: 'item',
            url: '#'
          },
          {
            id: 'collapse',
            title: 'CashModuleView',
            type: 'item',
            url: '#'
          },
          {
            id: 'carousel',
            title: 'Partner Card Number Upload',
            type: 'item',
            url: '#'
          },
          
         
        ]
      },
      
    ]
  },
  //reporta

  {
    id: 'ui-element',
    title: 'Report',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: '',
        title: 'Report',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Admin Report',
            type: 'item',
            url: '#'
          },
          {
            id: 'button',
            title: 'VAT Invoice',
            type: 'item',
            url: '#'
          },
          {
            id: 'badges',
            title: 'VATInvoicesPOS',
            type: 'item',
            url: '#'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'EIM Report',
            type: 'item',
            url: '#'
          },
        ]
      },
      
    ]
  },

  //qutations
  
  {
    id: 'table',
    title: 'Quotations',
    type: 'group',
    icon: 'feather icon-list',
    children: [
      {
        id: 'bootstrap',
        title: 'Quotation',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [
          {
            id: 'QuotationsH+',
            title: 'Quotations H+',
            type: 'item',
            url: '/quotation/quotation-list',
            
          },
          {
            id: 'button',
            title: 'Quotations Basic',
            type: 'item',
            url: '#'
          },
          {
            id: 'badges',
            title: 'PA Quotations',
            type: 'item',
            url: '#'
          },
          
        ]
      },
      
    ]
  },
// Policies
  {
    id: 'pages',
    title: 'Policies',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Policies',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Policies H+',
            type: 'item',
            url: '/policies/policies-list',
            //target: true,
            //breadcrumbs: false
          },
          {
            id: 'signup',
            title: 'Policies Basic',
            type: 'item',
            url: '#',
            //target: true,
            //breadcrumbs: false
          },
          {
            id: 'signup',
            title: 'Invalid Records',
            type: 'item',
            url: '#',
            //target: true,
            //breadcrumbs: false
          },
          {
            id: 'signup',
            title: 'Release Voucher',
            type: 'item',
            url: '#',
            //target: true,
            //breadcrumbs: false
          },
          {
            id: 'signup',
            title: 'Policies PA',
            type: 'item',
            url: '#',
            //target: true,
            //breadcrumbs: false
          }
          
        ]
      },
     
    ]
  },









  // {
  //   id: 'navigation',
  //   title: 'Navigation',
  //   type: 'group',
  //   icon: 'feather icon-monitor',
  //   children: [
  //     {
  //       id: 'dashboard',
  //       title: 'Dashboard',
  //       type: 'item',
  //       url: '/dashboard/analytics',
  //       icon: 'feather icon-home'
  //     },
  //     // {
  //     //   id: 'page-layouts',
  //     //   title: 'Horizontal Layouts',
  //     //   type: 'item',
  //     //   url: '/layout/horizontal',
  //     //   target: true,
  //     //   icon: 'feather icon-layout'
  //     // }
  //   ]
  // },
  // {
  //   id: 'ui-element',
  //   title: 'UI ELEMENT & FORMS',
  //   type: 'group',
  //   icon: 'feather icon-layers',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Basic',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'alert',
  //           title: 'Alert',
  //           type: 'item',
  //           url: '/basic/alert'
  //         },
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumbs & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'cards',
  //           title: 'Cards',
  //           type: 'item',
  //           url: '/basic/cards'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'carousel',
  //           title: 'Carousel',
  //           type: 'item',
  //           url: '/basic/carousel'
  //         },
  //         {
  //           id: 'grid-system',
  //           title: 'Grid System',
  //           type: 'item',
  //           url: '/basic/grid-system'
  //         },
  //         {
  //           id: 'progress',
  //           title: 'Progress',
  //           type: 'item',
  //           url: '/basic/progress'
  //         },
  //         {
  //           id: 'modal',
  //           title: 'Modal',
  //           type: 'item',
  //           url: '/basic/modal'
  //         },
  //         {
  //           id: 'spinner',
  //           title: 'Spinner',
  //           type: 'item',
  //           url: '/basic/spinner'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         },
  //         {
  //           id: 'tooltip-popovers',
  //           title: 'Tooltip & Popovers',
  //           type: 'item',
  //           url: '/basic/tooltip-popovers'
  //         },
  //         {
  //           id: 'other',
  //           title: 'Other',
  //           type: 'item',
  //           url: '/basic/other'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'forms-element',
  //       title: 'Form Elements',
  //       type: 'item',
  //       url: '/forms/basic',
  //       icon: 'feather icon-file-text'
  //     }
  //   ]
  // },
  // {
  //   id: 'table',
  //   title: 'Table & Charts',
  //   type: 'group',
  //   icon: 'feather icon-list',
  //   children: [
  //     {
  //       id: 'bootstrap',
  //       title: 'Bootstrap Table',
  //       type: 'item',
  //       url: '/tbl-bootstrap/bt-basic',
  //       icon: 'feather icon-server'
  //     },
  //     {
  //       id: 'apex',
  //       title: 'Apex Chart',
  //       type: 'item',
  //       url: '/charts/apex',
  //       icon: 'feather icon-pie-chart'
  //     }
  //   ]
  // },
  // {
  //   id: 'pages',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'feather icon-file-text',
  //   children: [
  //     {
  //       id: 'auth',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'feather icon-lock',
  //       children: [
  //         {
  //           id: 'signup',
  //           title: 'Sign up',
  //           type: 'item',
  //           url: '/auth/signup',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'signin',
  //           title: 'Sign in',
  //           type: 'item',
  //           url: '/auth/signin',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'reset-password',
  //           title: 'Reset Password',
  //           type: 'item',
  //           url: '/auth/reset-password',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'change-password',
  //           title: 'Change Password',
  //           type: 'item',
  //           url: '/auth/change-password',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 'maintenance',
  //       title: 'Maintenance',
  //       type: 'collapse',
  //       icon: 'feather icon-sliders',
  //       children: [
  //         {
  //           id: 'error',
  //           title: 'Error',
  //           type: 'item',
  //           url: '/maintenance/error',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'coming-soon',
  //           title: 'Maintenance',
  //           type: 'item',
  //           url: '/maintenance/coming-soon',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'feather icon-align-left',
  //   children: [
  //     {
  //       id: 'menu-level',
  //       title: 'Menu Levels',
  //       type: 'collapse',
  //       icon: 'feather icon-menu',
  //       children: [
  //         {
  //           id: 'menu-level-2.1',
  //           title: 'Menu Level 2.1',
  //           type: 'item',
  //           url: 'javascript:',
  //           external: true
  //         },
  //         {
  //           id: 'menu-level-2.2',
  //           title: 'Menu Level 2.2',
  //           type: 'collapse',
  //           children: [
  //             {
  //               id: 'menu-level-2.2.1',
  //               title: 'Menu Level 2.2.1',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             },
  //             {
  //               id: 'menu-level-2.2.2',
  //               title: 'Menu Level 2.2.2',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       id: 'disabled-menu',
  //       title: 'Disabled Menu',
  //       type: 'item',
  //       url: 'javascript:',
  //       classes: 'nav-item disabled',
  //       icon: 'feather icon-power',
  //       external: true
  //     },
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
