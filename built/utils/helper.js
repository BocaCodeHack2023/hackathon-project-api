"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signatureHmac256 = exports.downloadRemoteFile = exports.inspect = exports.wait = void 0;
const util = require("util");
const https = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
const crypto = require("crypto");
const logger_1 = require("./logger");
const moduleName = "lib/helper";
// it creates a promise to stop the program for the given ms
function wait(logger, waitMilliseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        const methodName = "wait";
        logger.info({ moduleName, methodName, waitMilliseconds }, `Waiting...`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, waitMilliseconds);
        });
    });
}
exports.wait = wait;
function inspect(obj, depth = 9) {
    return `${util.inspect(obj, true, depth, false)}`;
}
exports.inspect = inspect;
function downloadRemoteFile(logger, url, localPath) {
    const methodName = "downloadRemoteFile";
    logger.debug({ moduleName, methodName }, "Start!");
    return new Promise((resolve) => {
        const request = https
            .get(url, (response) => {
            logger.debug({ moduleName, methodName }, url, inspect(response.statusCode));
            const remoteFileExist = response.statusCode === 200 ? true : false;
            if (remoteFileExist) {
                const file = fs.createWriteStream(localPath);
                response.pipe(file);
                // after download completed close filestream
                file.on("finish", () => {
                    file.close();
                    logger.info({ moduleName, methodName }, localPath, " Download Completed!");
                    resolve(true);
                });
            }
            else {
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
exports.downloadRemoteFile = downloadRemoteFile;
const signatureHmac256 = (key, data) => {
    //creating hmac object
    let hmac = crypto.createHmac("sha256", key);
    const result = hmac.update(data);
    const encode = result.digest("hex");
    return encode;
};
exports.signatureHmac256 = signatureHmac256;
if (require.main === module) {
    const logger = (0, logger_1.getLogger)(moduleName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNkI7QUFFN0IsK0JBQStCLENBQUMsK0JBQStCO0FBQy9ELHlCQUF5QjtBQUV6QixpQ0FBaUM7QUFFakMscUNBQXFDO0FBRXJDLE1BQU0sVUFBVSxHQUFXLFlBQVksQ0FBQztBQUV4Qyw0REFBNEQ7QUFDNUQsU0FBc0IsSUFBSSxDQUN4QixNQUFjLEVBQ2QsZ0JBQXdCOztRQUV4QixNQUFNLFVBQVUsR0FBVyxNQUFNLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUFBO0FBWEQsb0JBV0M7QUFFRCxTQUFnQixPQUFPLENBQUMsR0FBUSxFQUFFLFFBQWdCLENBQUM7SUFDakQsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNwRCxDQUFDO0FBRkQsMEJBRUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FDaEMsTUFBYyxFQUNkLEdBQVcsRUFDWCxTQUFpQjtJQUVqQixNQUFNLFVBQVUsR0FBVyxvQkFBb0IsQ0FBQztJQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRW5ELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QixNQUFNLE9BQU8sR0FBUSxLQUFLO2FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNyQixNQUFNLENBQUMsS0FBSyxDQUNWLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUMxQixHQUFHLEVBQ0gsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FDN0IsQ0FBQztZQUNGLE1BQU0sZUFBZSxHQUNuQixRQUFRLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFN0MsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxHQUFRLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFcEIsNENBQTRDO2dCQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixNQUFNLENBQUMsSUFBSSxDQUNULEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUMxQixTQUFTLEVBQ1Qsc0JBQXNCLENBQ3ZCLENBQUM7b0JBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQjtRQUNILENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyQixpQkFBaUI7WUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBM0NELGdEQTJDQztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDNUQsc0JBQXNCO0lBQ3RCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFQVyxRQUFBLGdCQUFnQixvQkFPM0I7QUFFRixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUEsa0JBQVMsRUFBQyxVQUFVLENBQUMsQ0FBQztDQUV0QyJ9