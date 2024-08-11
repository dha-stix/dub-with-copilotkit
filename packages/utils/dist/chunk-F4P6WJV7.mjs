async function c(r){let t=new TextEncoder().encode(r),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}export{c as a};
