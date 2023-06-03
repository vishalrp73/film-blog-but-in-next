import { Title } from './types';

const https = require('https');
const QueryString = require('querystring');
const API_DOMAIN = 'apis.justwatch.com';

type RequestData = {
  protocol: 'https:';
  hostname: string;
  path: string;
  method: 'GET';
  headers: any;
};

export const request = (
  method: 'GET',
  endpoint: string,
  params?: any,
): Promise<Title> => {
  return new Promise((resolve, reject) => {
    params = Object.assign({}, params);
    // build request data
    const reqData: RequestData = {
      protocol: 'https:',
      hostname: API_DOMAIN,
      path: '/content' + endpoint,
      method: method,
      headers: {},
    };
    let body = null;
    // add query string if necessary
    if (method === 'GET') {
      if (Object.keys(params > 0)) {
        reqData.path = reqData.path + '?' + QueryString.stringify(params);
      }
    } else {
      body = JSON.stringify(params);
      reqData.headers['Content-Type'] = 'application/json';
    }

    // send request
    const req = https.request(reqData, (res: any) => {
      // build response
      let buffers: Buffer[] = [];
      res.on('data', (chunk: any) => buffers.push(chunk));
      res.on('end', () => {
        // check response
        let output = null;
        try {
          output = Buffer.concat(buffers);
          output = output.toString();
          output = JSON.parse(output);
        } catch (error) {
          if (res.statusCode !== 200) {
            reject(
              new Error(
                `request failed with status code: ${res.statusCode}: ${res.statusMessage}`,
              ),
            );
          } else {
            reject(error);
          }
          return;
        }

        if (output.error) {
          reject(new Error(output.error));
        } else {
          resolve(output);
        }
      });
    });

    // error handling
    req.on('error', (error: Error) => reject(error));
    // send
    if (method !== 'GET' && body) req.write(body);

    req.end();
  });
};
