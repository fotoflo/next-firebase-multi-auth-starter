import styles from "./DebugPrint.module.css";

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const urlRegex = new RegExp(
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
);
export const looseUrlRegex = new RegExp(
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);
export const httpRegex = new RegExp(
  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/
);

export function sleep(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}

// removes whitespace and adds http or http:// to the url
export const getValidUrl = (url = "") => {
  let newUrl = window.decodeURIComponent(url);
  newUrl = newUrl.trim().replace(/\s/g, "");

  if (/^(:\/\/)/.test(newUrl)) {
    return `http${newUrl}`;
  }
  if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
    return `http://${newUrl}`;
  }

  return newUrl;
};

export const getHumanReadableDate = (date) => {
  const myDate = date ?? new Date();
  return myDate.toTimeString().split(" ")[0];
};

//https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
export const consoleObj = (json) => {
  if (typeof json != "string") {
    json = JSON.stringify(json, undefined, "\t");
  }

  var arr = [],
    _string = "color:green",
    _number = "color:darkorange",
    _boolean = "color:blue",
    _null = "color:magenta",
    _key = "color:red";

  // eslint-disable-next-line
  json = json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var style = _number;
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          style = _key;
        } else {
          style = _string;
        }
      } else if (/true|false/.test(match)) {
        style = _boolean;
      } else if (/null/.test(match)) {
        style = _null;
      }
      arr.push(style);
      arr.push("");
      return "%c" + match + "%c";
    }
  );

  arr.unshift(json);

  console.log.apply(console, arr);
};
