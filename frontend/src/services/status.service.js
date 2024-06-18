import httpService from "./http.service";
import { STATUS } from "../config/server.config";

async function getStatus() {
  return httpService.get(STATUS);
}

const statusService = {
  getStatus,
};

export default statusService;
