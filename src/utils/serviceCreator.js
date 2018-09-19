import request from "./request";

export default function serviceCreator(apiList) {
  const servicesMap = {};
  apiList.forEach(resource => {
    servicesMap[resource.name] = async function(data) {
      return request(resource.url, { method: resource.method, data });
    };
  });
  return servicesMap;
}
