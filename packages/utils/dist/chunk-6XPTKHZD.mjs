async function o(e,s){let r=await fetch(e,s);if(!r.ok){let n=await r.text(),t=new Error(n);throw t.status=r.status,t}return r.json()}export{o as a};
