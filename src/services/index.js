import serviceCreator from "../utils/serviceCreator";

// api config here
const apiList = [{ name: "getList", url: "/list", method: "get" }];

export default serviceCreator(apiList);
