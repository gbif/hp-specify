var networkKey = '8e30b684-6a54-4aba-aa73-66201c2c736e';

var institutions = [
  "49fb6451-91b7-4af2-8cd3-354539a77589",
  "ab8b25c4-f95e-437b-82df-5aed3c9031ec",
  "0237598a-853a-492c-af74-a723fe251799",
  "2a508411-2acd-45df-8a8b-00094ac65f87",
  "d2a27206-87ab-47ea-b5fc-d2e57054b688",
  "70fbf720-63a3-4e3c-b844-ee96091880e0",
  "d129a8d1-2339-4a47-aa19-a8e0a078082a",
  "fdee1b94-e933-4a6e-9a85-05cc39a085a6",
  "c7d5c4da-9590-49c2-b87c-f0e7932611a6",
  "e329699d-6a66-4a0b-bd6a-8089f2eb2aa1",
  "52ed0034-fd58-4f17-95e5-d565fc9f068e",
  "07bba8b3-fc1d-4983-b9de-39c13d9d1232",
  "09633165-0280-421e-a3a8-e717231226be",
  "f78194a5-f44b-44ae-9916-101355f2c501",
  "2bfdf57f-35bd-450a-b830-a5189c2d836d",
  "1a81a175-787f-4e26-9139-1b4203b76d8d",
  "c8e1cb04-01ef-4804-a716-11ef204cf41b",
  "f93c8044-ccc4-4ed2-b8b2-03df238b7be1",
  "e0e97311-06c7-4695-a77c-b8567a980164",
  "d207ceed-42b6-4765-84e0-2b5e958a5c3e",
  "b1d30df1-1344-400d-a6f9-49be01dedfa2",
  "bae8ed52-3c2c-4504-ab2e-96baf6b46fc3",
  "b55854d8-3168-4157-8710-c3212de6a5af",
  "59f46093-8fae-47f3-a9ef-e5fd1d38e4fe",
  "82d4f982-8b41-4c79-97d7-4dd957245507",
  "b268a90f-cb19-4b9e-8938-c0c8dd2f131c",
  "0912afff-cc8f-479c-9f61-307d72580876",
  "d75d511f-4b87-4f13-bfcc-c446763cd9db",
  "91fbe1b3-a355-4433-bb61-fb8dc4dbc341",
  "472b6282-eaeb-43f0-b860-7845a66985a5",
  "b1fe1153-6a43-4c07-b1cf-c53b1ebbbfab",
  "9fd45b25-a90d-49e1-b7f6-d0320efe27f6",
  "f7186539-fa8a-4b6e-b6f8-be6d5a3e1311",
  "e4829e9c-d657-4ac0-b26e-d659ad09d4cb"
];

var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    linkColor: themeStyle.colors.links,
    fontSize: '16px'
  }
});


var siteConfig = {
  version: 2,
  routes: {
    alwaysUseHrefs: false, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    enabledRoutes: ['occurrenceSearch', 'collectionKey', 'institutionKey', 'institutionSearch', 'collectionSearch'],
    occurrenceSearch: {
      route: '/specimen/search'
    }
  },
  occurrence: {
    excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    defaultTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
    availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE'],
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 0
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
      "type": "equals",
      "key": "networkKey",
      "value": networkKey
    },
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'CLUSTERS', 'DASHBOARD'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  collection: {
    rootFilter: {
      displayOnNHCPortal: true,
      institutionKey: institutions
    }
  },
  institution: {
    rootFilter: {
      displayOnNHCPortal: true,
      institutionKey: institutions
    },
    mapSettings: {
      enabled: true,
      lat: 0,
      lng: 0,
      zoom: 1
    },
  },
  apiKeys: {
    maptiler: "wFxbBf3Tv2e75QQfYOOW",
    mapbox: "pk.eyJ1IjoiZ2JpZiIsImEiOiJja3VmZm50Z3kxcm1vMnBtdnBmeGd5cm9hIn0.M2z2n9QP9fRHZUCw9vbgOA"
  },
  availableCatalogues: ['OCCURRENCE', 'COLLECTION', 'INSTITUTION'],
  maps: {
    // locale: 'ja',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
  messages: {
    "catalogues.occurrences": "Specimens"
  }
};