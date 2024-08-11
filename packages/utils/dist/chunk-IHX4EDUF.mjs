import r from"punycode/";function o(n){if(typeof n!="string")return"";try{return r.toUnicode(n)}catch{return n}}function u(n){return typeof n!="string"?"":r.toASCII(n)}export{o as a,u as b};
