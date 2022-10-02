// Simple upload 500 addresses to whitelist using whitelist_addresses.csv.
// Accepts cosmos, stars addresses.
// If you run into an error with `member_limit`, run `yarn whitelist --increase-member-limit`

import { toJuno } from '../src/utils';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

async function convert() {
  interface Holder {
    token_id: string;
    address: string;
  }
  const __dirname = process.cwd();
  const csvFilePath = path.resolve(__dirname, './snapshot2.csv');
  const outFilePath = path.resolve(__dirname, './snapshot2_out.csv');

  const headers = ['token_id','address'];
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  const addrs: Array<string> = [];

  await parse(
    fileContent,
    {
      delimiter: ',',
      columns: headers,
    },
    async (error, fileContents: Holder[]) => {
      if (error) {
        throw error;
      }
      fs.writeFile(outFilePath, "", err => {});
      fileContents.map((row) => {
        let content = row.token_id + "," + toJuno(row.address) + "\n";
        fs.writeFile(outFilePath, content, { flag: 'a+' }, err => {});
        console.log(content)
        // addrs.push(row.address)
      });

      // const validatedAddrs: Array<string> = [];
      // addrs.forEach((addr) => {
      //   const converted = toStars(addr);
      //   if(converted != "")
      //   validatedAddrs.push(converted);
      // });
    }
  );
}

convert();
