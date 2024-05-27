import { API_URL } from "../constant";
import ActivityLogger from "./activityLogger";
const queryString = (params)=>Object.keys(params).map(key => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');

export function api({
  data,
  query = {},
  method = "GET",
  endpoint = "",
  baseurl = false,
  headers,
}) {
  // console.log("data", query);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (localStorage.getItem("token") && !headers?.apikey) {
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
  }

  for (const key in headers) {
    myHeaders.append(key, headers[key]);
  }
  for (let key in data) {
    if (data[key] === undefined || data[key] === null || data[key] === "") {
      delete data[key];
    }
  }
  const rawBody = JSON.stringify(data);

  var requestOptions = {
    method,
    headers: myHeaders,
    body: rawBody,
  };
  // ActivityLogger({ apiPath: endpoint, body: data, type: method, query })

  return fetch(
    `${baseurl || API_URL}${endpoint}?${queryString(query)}`,
    requestOptions
  ).then((response) => response.json());
}

function serialize(obj) {
  const str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export function fileUpload(file, path) {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("image", file);

    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        resolve(this.responseText);
      }
    });

    xhr.open("POST", API_URL + path);
    if (localStorage.getItem("token")) {
      xhr.setRequestHeader(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );
    }
    xhr.send(data);
  });
}
