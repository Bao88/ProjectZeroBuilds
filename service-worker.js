"use strict";var precacheConfig=[["/ProjectZeroBuild/index.html","d3dc72a5331df726fdca5a0da340cfc0"],["/ProjectZeroBuild/static/css/main.9c667d73.css","6121fa672b0d1ccf7e56a2271489db64"],["/ProjectZeroBuild/static/js/main.c0ab36de.js","91af9edfe280bfbd5a6a25c7c586daa4"],["/ProjectZeroBuild/static/media/BuildAWikipediaViewer.d381b512.png","d381b512226262821449c89355b0cb98"],["/ProjectZeroBuild/static/media/BuildaPomodoroClock.c62eb63e.png","c62eb63ee6f62adee221f0f8c70c718a"],["/ProjectZeroBuild/static/media/Certificate.b29ff8c7.png","b29ff8c7714a0393e8820ccd4161a4c7"],["/ProjectZeroBuild/static/media/MapDataAcrosstheGlobe.c8668487.png","c8668487c71530f1de01dfcce65a56b7"],["/ProjectZeroBuild/static/media/VisualizeDataWithaBarChart.6e480328.png","6e480328788883e2ea86a552b7a73949"],["/ProjectZeroBuild/static/media/VisualizeDataWithaHeatMap.cfc29c55.png","cfc29c55981fa8625de4bfe8cbcccfb6"],["/ProjectZeroBuild/static/media/VisualizeDataWithaScatterplotGraph.6119dc7e.png","6119dc7ed27ee0014615ad4a8e9b4cd8"],["/ProjectZeroBuild/static/media/buildASimonGame.2f4afb0a.png","2f4afb0a2453408f5d581c3597c72ea3"],["/ProjectZeroBuild/static/media/buildacamperleaderboard.bf5b5c53.png","bf5b5c53cb4049da689c4937e470f17c"],["/ProjectZeroBuild/static/media/buildagameoflife.b37867ea.png","b37867ea26ef6749140d7c7598b4856d"],["/ProjectZeroBuild/static/media/buildamarkdownpreviewer.e10a7277.png","e10a727774471f5e5497e1b4dfd2cd71"],["/ProjectZeroBuild/static/media/buildarecipebox.d11cc9c4.png","d11cc9c4e6ec59d2aa8173ae57e05fe8"],["/ProjectZeroBuild/static/media/buildaroguelikedungeoncrawler.d8b51932.png","d8b519324aa69c69dbfba09faea908c5"],["/ProjectZeroBuild/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/ProjectZeroBuild/static/media/tictactoe.e3b9345e.png","e3b9345eb04f10559d3f3afda9f7429d"],["/ProjectZeroBuild/static/media/twitchTVAPI.e43e6eef.png","e43e6eef610949c28c178a3abc42bde3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var c="/ProjectZeroBuild/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});