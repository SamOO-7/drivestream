!function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=4)}([function(e,t,i){const a=i(1).Parser,s=i(2),r=new a;s.addDefaults(r),t.addDefaults=s.addDefaults,t.addHandler=((e,t,i)=>r.addHandler(e,t,i)),t.parse=(e=>r.parse(e)),t.Parser=a},function(e,t){t.Parser=class{constructor(){this.handlers=[]}addHandler(e,t,i){if(void 0===t&&"function"==typeof e)(t=e).handlerName="unknown";else if("string"==typeof e&&t instanceof RegExp)t=function(e,t,i){let a;function s({title:s,result:r}){if(r[e]&&i.skipIfAlreadyFound)return null;const n=s.match(t),[d,l]=n||[];return d?(r[e]=i.value||a(l||d),n.index):null}return a=i.type?"lowercase"===i.type.toLowerCase()?e=>e.toLowerCase():"bool"===i.type.toLowerCase().substr(0,4)?()=>!0:"int"===i.type.toLowerCase().substr(0,3)?e=>parseInt(e,10):e=>e:e=>e,s.handlerName=e,s}(e,t,i=function(e){const t=!0,i="string";return(e=e||{}).skipIfAlreadyFound=e.skipIfAlreadyFound||t,e.type=e.type||i,e}(i));else{if("function"!=typeof t)throw new Error(`Handler for ${e} should be a RegExp or a function. Got: ${typeof t}`);t.handlerName=e}this.handlers.push(t)}parse(e){const t={};let i=e.length;for(const a of this.handlers){const s=a({title:e,result:t});s&&s<i&&(i=s)}return t.title=function(e){let t=e;return-1===t.indexOf(" ")&&-1!==t.indexOf(".")&&(t=t.replace(/\./g," ")),t=(t=t.replace(/_/g," ")).replace(/([(_]|- )$/,"").trim()}(e.substr(0,i)),t}}},function(e,t){t.addDefaults=(e=>{e.addHandler("year",/(?!^)[([]?((?:19[0-9]|20[012])[0-9])[)\]]?/,{type:"integer"}),e.addHandler("resolution",/([0-9]{3,4}[pi])/i,{type:"lowercase"}),e.addHandler("resolution",/(4k)/i,{type:"lowercase"}),e.addHandler("extended",/EXTENDED/,{type:"boolean"}),e.addHandler("convert",/CONVERT/,{type:"boolean"}),e.addHandler("hardcoded",/HC|HARDCODED/,{type:"boolean"}),e.addHandler("proper",/(?:REAL.)?PROPER/,{type:"boolean"}),e.addHandler("repack",/REPACK|RERIP/,{type:"boolean"}),e.addHandler("retail",/\bRetail\b/i,{type:"boolean"}),e.addHandler("remastered",/\bRemaster(?:ed)?\b/i,{type:"boolean"}),e.addHandler("unrated",/\bunrated|uncensored\b/i,{type:"boolean"}),e.addHandler("region",/R[0-9]/),e.addHandler("container",/\b(MKV|AVI|MP4)\b/i,{type:"lowercase"}),e.addHandler("source",/\b(?:HD-?)?CAM\b/,{type:"lowercase"}),e.addHandler("source",/\b(?:HD-?)?T(?:ELE)?S(?:YNC)?\b/i,{value:"telesync"}),e.addHandler("source",/\bHD-?Rip\b/i,{type:"lowercase"}),e.addHandler("source",/\bBRRip\b/i,{type:"lowercase"}),e.addHandler("source",/\bBDRip\b/i,{type:"lowercase"}),e.addHandler("source",/\bDVDRip\b/i,{type:"lowercase"}),e.addHandler("source",/\bDVD(?:R[0-9])?\b/i,{value:"dvd"}),e.addHandler("source",/\bDVDscr\b/i,{type:"lowercase"}),e.addHandler("source",/\b(?:HD-?)?TVRip\b/i,{type:"lowercase"}),e.addHandler("source",/\bTC\b/,{type:"lowercase"}),e.addHandler("source",/\bPPVRip\b/i,{type:"lowercase"}),e.addHandler("source",/\bR5\b/i,{type:"lowercase"}),e.addHandler("source",/\bVHSSCR\b/i,{type:"lowercase"}),e.addHandler("source",/\bBluray\b/i,{type:"lowercase"}),e.addHandler("source",/\bWEB-?DL\b/i,{type:"lowercase"}),e.addHandler("source",/\bWEB-?Rip\b/i,{type:"lowercase"}),e.addHandler("source",/\b(?:DL|WEB|BD|BR)MUX\b/i,{type:"lowercase"}),e.addHandler("source",/\b(DivX|XviD)\b/,{type:"lowercase"}),e.addHandler("source",/HDTV/i,{type:"lowercase"}),e.addHandler("codec",/dvix|mpeg2|divx|xvid|[xh][-. ]?26[45]|avc|hevc/i,{type:"lowercase"}),e.addHandler("codec",({result:e})=>{e.codec&&(e.codec=e.codec.replace(/[ .-]/,""))}),e.addHandler("audio",/MD|MP3|mp3|FLAC|Atmos|DTS(?:-HD)?|TrueHD/,{type:"lowercase"}),e.addHandler("audio",/Dual[- ]Audio/i,{type:"lowercase"}),e.addHandler("audio",/AC-?3(?:\.5\.1)?/i,{value:"ac3"}),e.addHandler("audio",/DD5[. ]?1/i,{value:"dd5.1"}),e.addHandler("audio",/AAC(?:[. ]?2[. ]0)?/,{value:"aac"}),e.addHandler("group",/- ?([^\-. ]+)$/),e.addHandler("season",/S([0-9]{1,2}) ?E[0-9]{1,2}/i,{type:"integer"}),e.addHandler("season",/([0-9]{1,2})x[0-9]{1,2}/,{type:"integer"}),e.addHandler("season",/(?:Saison|Season)[. _-]?([0-9]{1,2})/i,{type:"integer"}),e.addHandler("episode",/S[0-9]{1,2} ?E([0-9]{1,2})/i,{type:"integer"}),e.addHandler("episode",/[0-9]{1,2}x([0-9]{1,2})/,{type:"integer"}),e.addHandler("episode",/[ée]p(?:isode)?[. _-]?([0-9]{1,3})/i,{type:"integer"}),e.addHandler("language",/\bRUS\b/i,{type:"lowercase"}),e.addHandler("language",/\bNL\b/,{type:"lowercase"}),e.addHandler("language",/\bFLEMISH\b/,{type:"lowercase"}),e.addHandler("language",/\bGERMAN\b/,{type:"lowercase"}),e.addHandler("language",/\bDUBBED\b/,{type:"lowercase"}),e.addHandler("language",/\b(ITA(?:LIAN)?|iTALiAN)\b/,{value:"ita"}),e.addHandler("language",/\bFR(?:ENCH)?\b/,{type:"lowercase"}),e.addHandler("language",/\bTruefrench|VF(?:[FI])\b/i,{type:"lowercase"}),e.addHandler("language",/\bVOST(?:(?:F(?:R)?)|A)?|SUBFRENCH\b/i,{type:"lowercase"}),e.addHandler("language",/\bMULTi(?:Lang|-VF2)?\b/i,{type:"lowercase"})})},function(e,t,i){},function(e,t,i){"use strict";i.r(t);class a{constructor(){this.activeRequests=0,this.requestsInLastPeriod=0,this.lastRequestDate=new Date}get PERIOD(){return 250}get MAX_REQUESTS(){return 10}get needsRateLimited(){return(new Date).getTime()-this.lastRequestDate.getTime()<this.PERIOD||this.activeRequests>=this.MAX_REQUESTS}async getMetadata(e,t=!1){if(!e.name)return;if(e.description&&e.poster_path&&!t)return;for(;this.needsRateLimited;)await sleep(this.PERIOD);this.activeRequests++;let i,a=`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${e.name}&language=en-US&api_key=42e5714f80280415f205eca7e2cb61dd`,s=new XMLHttpRequest;e.year&&(a=`${a}&year=${e.year}`),s.open("GET",a,!1),this.lastRequestDate=new Date,s.send(null),this.activeRequests--,console.log(s.responseText),(i=JSON.parse(s.responseText)).results&&i.results[0]&&(console.log(i.results[0]),e.setMetadata(i.results[0]))}}class s{constructor(e,t){this.root=e.root,this.type=e.type,this.library=e,this.drivestream=t,this.activeRequests=0,this.queuedRequests=0,this.isScanning_=!1,this.mediaItems=[],this.PAGE_SIZE=1e3,this.MAX_ITEMS=0,this.UNSUPPORTED_FILE_TYPES=["video/mp2t","video/ts"]}get isScanning(){return this.isScanning_}set isScanning(e){this.isScanning_=e,this.isScanning_||this.library.updateMediaItems()}addMediaItem(e){this.mediaItems.push(e)}scan(){this.isScanning=!0,this.recusriveListFolder(this.root)}processMediaFileList(e){console.log(e);for(let t of e)"application/vnd.google-apps.folder"==t.mimeType?this.recusriveListFolder(t.id):t.mimeType.includes("video/")&&!this.UNSUPPORTED_FILE_TYPES.includes(t.mimeType)&&this.addMediaItem(new MediaItem(t,this.library))}printUnsupportedMimeTypes(){let e="";for(let t,i=0;t=this.UNSUPPORTED_FILE_TYPES[i];i++)e.length>0&&(e+=" "),e+=`mimeType contains '${t}'`,i!=this.UNSUPPORTED_FILE_TYPES.length-1&&(e+=" or");return e}async recusriveListFolder(e,t){for(this.isScanning=!0;this.activeRequests>=3;)this.queuedRequests++,await sleep(250),this.queuedRequests--;this.activeRequests++,await this.drivestream.initiateClient().then(()=>gapi.client.drive.files.list({q:`'${e}' in parents and not (${this.printUnsupportedMimeTypes()}) and not (name contains 'sample')`,spaces:"drive",fields:"nextPageToken,files(id,name,size,mimeType,videoMediaMetadata,thumbnailLink)",pageToken:t,pageSize:this.PAGE_SIZE})).then(i=>{this.activeRequests--,i.result.error?this.recusriveListFolder(e,t):i.result.files&&(this.processMediaFileList(i.result.files),i.result.nextPageToken?this.recusriveListFolder(e,i.result.nextPageToken):i.result.nextPageToken||0!=this.activeRequests||0!=this.queuedRequests||(this.isScanning=!1))})}}class r{constructor(e,t){this.id=e.id,this.name=e.name,this.type=e.type,this.root=e.properties.root,this.mediaItems=[],this.pushQueue=[],this.pushCount=0,this.lastPush=null,this.drivestream=t,this.scanner=new s(this,this.drivestream),this.SHEET_EXPIRY=1e5}update(){this.drivestream.ui.setScanning(this),this.scanner.scan()}updateMediaItems(){this.mediaItems=this.scanner.mediaItems;let e=this.mediaItems.map(e=>e.toRow());gapi.client.sheets.spreadsheets.values.batchUpdate({spreadsheetId:this.id,resource:{valueInputOption:"RAW",data:[{range:"A:Z",values:e}]}}).then(e=>console.log(e))}updateRemoteItem(e){this.getRemoteSheet().then(t=>{let i=t.result.values.findIndex(t=>t[0]==e.id)+1;this.pushToRange([e.toRow()],`A${i}:Z${i}`)})}async getRemoteSheet(){return this.cachedSheet&&this.sheetFetchedDate?(new Date).getTime()-this.sheetFetchedDate.getTime()>this.SHEET_EXPIRY?this.doRemoteSheetRequest():this.cachedSheet:this.doRemoteSheetRequest()}doRemoteSheetRequest(){return gapi.client.sheets.spreadsheets.values.get({spreadsheetId:this.id,range:"A:Z"}).then(e=>(this.cachedSheet=e,this.sheetFetchedDate=new Date,e))}pushToRange(e,t){let i={values:e};gapi.client.sheets.spreadsheets.values.update({spreadsheetId:this.id,range:t,valueInputOption:"RAW",resource:i}).then(e=>{var t=e.result;console.log(`${t.updatedCells} cells updated.`)})}async pushQueue(){for(this.lastPush||(this.lastPush=new Date);(new Date).getTime()-this.lastPush.getTime()<1e5;)await sleep(100);gapi.client.sheets.spreadsheets.values.batchUpdate({spreadsheetId:"my-spreadsheet-id"},{valueInputOption:"RAW",data:[]}).then(function(e){console.log(e.result)},function(e){console.error("error: "+e.result.error.message)})}refreshMeta(){for(let e of this.mediaItems)this.drivestream.metadataEngine.getMetadata(e)}}i(0);class n{constructor(e,t){let i=e.constructor===Array;e.videoMediaMetadata||(e.videoMediaMetadata={}),this.id=i?e[0]:e.id,this.name=i?e[1]:n.getTitle(e.name),this.durationMillis=i?Number.parseInt(e[2]):e.videoMediaMetadata.durationMillis,this.width=i?Number.parseInt(e[4]):e.videoMediaMetadata.width,this.height=i?Number.parseInt(e[3]):e.videoMediaMetadata.height,this.size=i?e[5]:e.size,this.year_=i?e[6]:n.getYear(e.name),this.poster_path=i?e[7]:void 0,this.description=i?e[8]:void 0,this.library=t}static getYear(e){return this.year_?this.year_:titleParser.parse(e).year}static getTitle(e){return this.title_?this.title_:titleParser.parse(e).title}get year(){return this.year_?this.year_:""}get title(){return this.title_?this.title_:this.name}getThumbSize(e){let t=(e,t)=>{i.length>0&&(i+="-"),i+=e,t&&(i+=t)},i="";return e.crop&&!e.height&&(e.height=e.width),e.width&&t("w",Math.floor(e.width)),e.height&&t("h",Math.floor(e.height)),e.crop&&t("p-k-nu"),e.aspect&&t("no"),`https://drive.google.com/thumbnail?authuser=0&id=${this.id}&sz=${i}`}get playbackUrl(){return`https://drive.google.com/file/d/${this.id}/preview`}get duration(){return{millis:this.durationMillis,formatted:Utils.millisToDate(this.durationMillis)}}get resolution(){return{height:this.height,width:this.width,formatted:`${this.width}x${this.height}`}}get poster(){return this.getPoster(400)}getPoster(e=400){return this.poster_path?`https://image.tmdb.org/t/p/w${e}${this.poster_path}`:this.getThumbSize({width:e})}setMetadata(e){this.metadata_=e,this.poster_path=e.poster_path,this.description=e.overview,this.title_=e.title,app.ui.updateMediaItem(this),this.library.updateRemoteItem(this)}toRow(){return[this.id,this.title,this.duration.millis,this.resolution.width,this.resolution.height,this.size,this.year,this.poster_path,this.description]}}class d{static signIn(e="Sign in with Google"){return`\n        <div class="sign-in-container">\n        <div class="sign-in-inner">\n            <a class="button sign-in" href="#" onclick="gapi.load('client:auth2', app.loadDriveAPI)">\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>\n             ${e}\n            </a>\n\n            <a class="privacy-policy" href="privacy.html" target="blank">Privacy Policy</a>\n            </div>\n            </div>\n        `}static mediaItem(e){return`<div class="col s2">\n                <a href="${e.playbackUrl}" class="card-url" target="_blank">\n                    <div class="card vertical media-card" id="${e.id}">\n                        <div class="card-image">\n                            <img src="${e.poster}" class="media-image">\n                        </div>\n                        <div class="card-content">\n                            <div class="card-title">${e.name}</div>\n                        </div>\n                    </div>\n                </a>\n            </div>`}static library(e){return`\n                 <div class="col s4"> \n                   <div class="card"> \n                     <div class="card-content" \n                       <span class="card-title">${e.name}</span> \n                     </div> \n                      <div class="card-action"> \n                       <a href="#" data-library-id="${e.id}" data-library-name="${e.name}" class="openLibrary">Open</a> \n                       <a href="#" data-library-id="${e.id}" data-library-name="${e.name}" class="updateLibrary">Update</a> \n                       <a href="#" data-library-id="${e.id}" data-library-name="${e.name}" class="refreshMetaLibrary">Refresh Metadata</a> \n                      </div> \n                    </div> \n                 </div>\n            `}}i(3);class l{constructor(e){this.drivestream=e,this.containers={loading:$("#drivestream .loading"),libraries:$("#drivestream .libraries"),media:$("#drivestream .mediaItems")}}showSignIn(){this.containers.loading.html(d.signIn())}hideSignIn(){this.containers.loading.remove()}showLibraryScan(){this.containers.loading.html(d.scanLibraryButton())}showLibraries(){this.containers.libraries.empty();for(let e of this.drivestream.libraries)this.containers.libraries.append(d.library(e));let e=this;$("a.openLibrary").on("click",function(){e.drivestream.getLibrary($(this).attr("data-library-id"))}),$("a.updateLibrary").on("click",function(){e.drivestream.updateLibrary($(this).attr("data-library-id"))}),$("a.refreshMetaLibrary").on("click",function(){e.drivestream.refreshMetaLibrary($(this).attr("data-library-id"))})}emptyMediaItems(){this.containers.media.empty()}showMediaItem(e){""!=e.name&&this.containers.media.append(d.mediaItem(e))}updateMediaItem(e){let t=document.getElementById(e.id);t.getElementsByTagName("img")[0].src=e.getPoster(400),t.getElementsByClassName("card-title")[0].innerHTML=e.title}setScanning(e){this.containers.libraries.find(`#${e.id}`).find(".updateLibrary").html("Loading")}}const o="AIzaSyA5jzWRF3xGOHLq63ptF3VWOUokXUVOz5U",h="719757025459-da3v6ad3pte923qd2c8ue96bh3m5mofm.apps.googleusercontent.com",c=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest","https://sheets.googleapis.com/$discovery/rest?version=v4"],p="https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets";class u{constructor(e){this.ui=new l(this),this.libraries=[],this.metadataEngine=new a}set isFirstTime(e){localStorage.setItem("isFirstTime",e)}get isFirstTime(){return"false"!=localStorage.getItem("isFirstTime")}loadDriveAPI(){let e=this;gapi.auth2.authorize({client_id:h,immediate:!1,scope:p},async()=>{e.isFirstTime=!1,e.ui.hideSignIn(),await e.initiateClient(),e.getLibraries(),console.log("Loaded API")})}load(){this.isFirstTime?this.ui.showSignIn():this.loadDriveAPI()}async initiateClient(){await gapi.client.init({apiKey:o,clientId:h,discoveryDocs:c,scope:p})}createLibrary(e){gapi.client.sheets.spreadsheets.create({},{properties:{title:e.name}}).then(t=>{gapi.client.drive.files.update({fileId:t.result.spreadsheetId,removeParents:"root",fields:"id, name, properties",resource:{properties:[{drivestream:"library"}]}}).then(i=>{gapi.client.drive.files.update({fileId:t.result.spreadsheetId,fields:"id, name, properties",resource:{properties:[{root:e.root}]}}).then(e=>{console.log(e),this.getLibraries()})})})}updateLibrary(e){}setLibraries(e){this.libraries=[];for(let t of e)this.libraries.push(new r(t,this));this.ui.showLibraries()}async getLibraries(){gapi.client.drive.files.list({q:"properties has {key='drivestream' and value='library'} and trashed = false",spaces:"drive",fields:"nextPageToken,files(id,name,properties)",pageSize:1e3}).then(e=>{this.setLibraries(e.result.files)})}findLibraryById(e){return this.libraries.find(t=>t.id==e)}getLibrary(e){let t=this.findLibraryById(e);return this.activeLibrary=t,gapi.client.sheets.spreadsheets.values.get({spreadsheetId:t.id,range:"A:Z"}).then(e=>{t.mediaItems=e.result.values.map(e=>new n(e,t)),this.ui.emptyMediaItems();for(let e of t.mediaItems)this.ui.showMediaItem(e)})}updateLibrary(e){this.findLibraryById(e).update()}refreshMetaLibrary(e){this.findLibraryById(e).refreshMeta()}}window.init=(()=>{window.app=new u({container:"#drivestream"}),app.load()})}]);