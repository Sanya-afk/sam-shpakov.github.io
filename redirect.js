let redirect404=()=>{var e=window.location;e.replace(e.protocol+"//"+e.hostname+(e.port?":"+e.port:"")+e.pathname.split("/").slice(0,1).join("/")+"/?p=/"+e.pathname.slice(1).split("/").slice(0).join("/").replace(/&/g,"~and~")+(e.search?"&q="+e.search.slice(1).replace(/&/g,"~and~"):"")+e.hash)},recieveRedirect=()=>{!function(e){if(e.search){var a={};e.search.slice(1).split("&").forEach((function(e){var i=e.split("=");a[i[0]]=i.slice(1).join("=").replace(/~and~/g,"&")})),void 0!==a.p&&window.history.replaceState(null,null,e.pathname.slice(0,-1)+(a.p||"")+(a.q?"?"+a.q:"")+e.hash)}}(window.location)};