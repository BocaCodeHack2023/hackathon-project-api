import * as util from "util";
import Logger from "bunyan";
import * as https from "https"; // or 'https' for https:// URLs
import * as fs from "fs";
import path from "path";
import * as crypto from "crypto";

import { getLogger } from "./logger";

const moduleName: string = "lib/helper";

// it creates a promise to stop the program for the given ms
export async function wait(
  logger: Logger,
  waitMilliseconds: number
): Promise<any> {
  const methodName: string = "wait";
  logger.info({ moduleName, methodName, waitMilliseconds }, `Waiting...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, waitMilliseconds);
  });
}

export function inspect(obj: any, depth: number = 9): string {
  return `${util.inspect(obj, true, depth, false)}`;
}

export function downloadRemoteFile(
  logger: Logger,
  url: string,
  localPath: string
): Promise<boolean> {
  const methodName: string = "downloadRemoteFile";
  logger.debug({ moduleName, methodName }, "Start!");

  return new Promise((resolve) => {
    const request: any = https
      .get(url, (response) => {
        logger.debug(
          { moduleName, methodName },
          url,
          inspect(response.statusCode)
        );
        const remoteFileExist: boolean =
          response.statusCode === 200 ? true : false;

        if (remoteFileExist) {
          const file: any = fs.createWriteStream(localPath);
          response.pipe(file);

          // after download completed close filestream
          file.on("finish", () => {
            file.close();
            logger.info(
              { moduleName, methodName },
              localPath,
              " Download Completed!"
            );
            resolve(true);
          });
        } else {
          resolve(false);
        }
      })
      .on("error", (error) => {
        // hanndle errors
        logger.error({ moduleName, methodName }, url, error);
        resolve(false);
      });
  });
}

export const signatureHmac256 = (key: string, data: string) => {
  //creating hmac object
  let hmac = crypto.createHmac("sha256", key);
  const result = hmac.update(data);
  const encode = result.digest("hex");

  return encode;
};

if (require.main === module) {
  const logger = getLogger(moduleName);

}
