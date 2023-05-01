let env = "development";
let server;
switch (env) {
  case "development":
    server = "http://localhost:4000";
    break;
  default:
    server = "http://localhost:4000";
    break;
}

export const ENV = env;
export const API_URL = server;
export const BASE_URL = server;
export const GLOBAL_VERSION = "1.0.0";
export const PLATFORM = "WEB";

export default API_URL;
