export interface Creator {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [
      {
        id: number;
        firstName: string;
        middleName: string;
        lastName: string;
        suffix: string;
        fullName: string;
        modified: number;
        resourceURI: string;
        urls: [
          {
            type: string;
            url: string
          }
          ];
        thumbnail: {
          path: string;
          extension: string
        };
        series: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string
            }
            ]
        };
        stories: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
              type: string
            }
            ]
        };
        comics: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string
            }
            ]
        };
        events: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string
            }
            ]
        }
      }
      ]
  };
  etag: string;
}
