import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', 'e25'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', 'a9c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '589'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '763'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', 'a9c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', '4cc'),
    exact: true
  },
  {
    path: '/network-security/',
    component: ComponentCreator('/network-security/', '41d'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/', 'b69'),
    exact: true
  },
  {
    path: '/swfw/',
    component: ComponentCreator('/swfw/', 'f60'),
    exact: true
  },
  {
    path: '/terraform/',
    component: ComponentCreator('/terraform/', 'd89'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2a1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c5f'),
    routes: [
      {
        path: '/expedition/docs/',
        component: ComponentCreator('/expedition/docs/', 'd9e'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/creating_credentials/',
        component: ComponentCreator('/expedition/docs/creating_credentials/', '79e'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_apiint/',
        component: ComponentCreator('/expedition/docs/expedition_apiint/', 'd19'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_contact/',
        component: ComponentCreator('/expedition/docs/expedition_contact/', '3a7'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_export/',
        component: ComponentCreator('/expedition/docs/expedition_export/', '58f'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_qs/',
        component: ComponentCreator('/expedition/docs/expedition_qs/', 'b03'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_tutorial1/',
        component: ComponentCreator('/expedition/docs/expedition_tutorial1/', 'dee'),
        exact: true
      },
      {
        path: '/expedition/docs/expedition_workflow_bulkchange/',
        component: ComponentCreator('/expedition/docs/expedition_workflow_bulkchange/', 'b2e'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_workflow_filters/',
        component: ComponentCreator('/expedition/docs/expedition_workflow_filters/', 'f42'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_workflow_migration/',
        component: ComponentCreator('/expedition/docs/expedition_workflow_migration/', 'f8e'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_workflow_removeunused/',
        component: ComponentCreator('/expedition/docs/expedition_workflow_removeunused/', '583'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/expedition_workflow_searchrule/',
        component: ComponentCreator('/expedition/docs/expedition_workflow_searchrule/', '686'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/managing_expedition_agent/',
        component: ComponentCreator('/expedition/docs/managing_expedition_agent/', '492'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/managing_jobs/',
        component: ComponentCreator('/expedition/docs/managing_jobs/', 'b1e'),
        exact: true,
        sidebar: "expedition"
      },
      {
        path: '/expedition/docs/workflow/',
        component: ComponentCreator('/expedition/docs/workflow/', '852'),
        exact: true
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
