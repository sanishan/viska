(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{3:function(n,t){function e(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}t.install=function(n){if(n||(n={}),e()){var t=navigator.serviceWorker.register("/sw.js",{}),a=function(n){var t,e,a=n.installing||n.waiting;a&&!a.onstatechange&&(n.active?(o(),e=o):(c(),e=c),n.waiting&&(t=!0),a.onstatechange=e);function o(){switch(a.state){case"redundant":i("onUpdateFailed"),a.onstatechange=null;break;case"installing":0;break;case"installed":t||i("onUpdateReady");break;case"activated":i("onUpdated"),a.onstatechange=null}}function c(){switch(a.state){case"redundant":a.onstatechange=null;break;case"installing":case"installed":break;case"activated":i("onInstalled"),a.onstatechange=null}}},i=function(t){"function"==typeof n[t]&&n[t]({source:"ServiceWorker"})};t.then((function(n){n&&(a(n),n.onupdatefound=function(){a(n)})})).catch((function(n){return i("onError"),Promise.reject(n)}))}else;},t.applyUpdate=function(n,t){e()&&navigator.serviceWorker.getRegistration().then((function(e){e&&e.waiting?(e.waiting.postMessage({action:"skipWaiting"}),n&&n()):t&&t()}))},t.update=function(){e()&&navigator.serviceWorker.getRegistration().then((function(n){if(n)return n.update()}))}}}]);