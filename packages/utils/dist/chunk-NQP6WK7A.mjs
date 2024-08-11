var n=(m,i)=>m.map((e,t)=>({item:e,index:t})).sort((e,t)=>i(e.item,t.item)||e.index-t.index).map(({item:e})=>e);export{n as a};
