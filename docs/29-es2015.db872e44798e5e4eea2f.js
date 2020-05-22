(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/kTt":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),o=t("mrSG"),e=t("i9w2"),a=t("6awz");class i{constructor(l,n){this.platform=l,this.mapService=n,this.panorama=null}ngOnInit(){this.loadMap()}ngOnDestroy(){this.mapService.detachMap()}loadMap(){return o.a(this,void 0,void 0,(function*(){let l={lat:42.345573,lng:-71.098326};this.map=yield this.mapService.attachMap("map_canvas",{camera:{target:l,zoom:17},controls:{compass:!1,indoorPicker:!1,myLocationButton:!1,myLocation:!1,zoom:!1,mapToolbar:!1},gestures:{scroll:!0,tilt:!1,rotate:!1,zoom:!1}}),this.panorama=yield e.e.createPanorama("pano_canvas",{camera:{target:l}}),this.marker=this.map.addMarkerSync({flat:!0,position:l}),this.panorama.bindTo("position",this.marker),this.panorama.on(e.g.PANORAMA_LOCATION_CHANGE).subscribe(l=>{this.map.animateCamera({target:l[0].latLng,duration:1e3})}),this.panorama.on(e.g.PANORAMA_CAMERA_CHANGE).subscribe(l=>{this.marker.setRotation(l[0].bearing-180)})}))}}class r{}var s=t("pMnS"),c=t("MKJQ"),b=t("sZkV"),p=u.nb({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{position:relative;width:100%;padding:2vmin}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#pano_canvas[_ngcontent-%COMP%]{width:100%;height:75vh;position:relative!important;z-index:0}#map_canvas[_ngcontent-%COMP%]{bottom:5%;left:5%;width:150px;height:150px;position:absolute!important;z-index:2}"]],data:{}});function h(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,14,"ion-header",[],null,null,null,c.v,c.e)),u.ob(1,49152,null,0,b.y,[u.h,u.k,u.x],{translucent:[0,"translucent"]},null),(l()(),u.pb(2,0,null,0,12,"ion-toolbar",[],null,null,null,c.H,c.q)),u.ob(3,49152,null,0,b.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.t,c.c)),u.ob(5,49152,null,0,b.i,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.B,c.l)),u.ob(7,49152,null,0,b.O,[u.h,u.k,u.x],null,null),(l()(),u.pb(8,0,null,0,6,"ion-title",[],null,null,null,c.G,c.p)),u.ob(9,49152,null,0,b.ub,[u.h,u.k,u.x],null,null),(l()(),u.Fb(-1,0,[" Street View "])),(l()(),u.pb(11,0,null,0,3,"ion-label",[["end",""]],null,null,null,c.y,c.h)),u.ob(12,49152,null,0,b.K,[u.h,u.k,u.x],null,null),(l()(),u.pb(13,0,null,0,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v5/blob/master/src/app/street-view/street-view.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["[source code]"])),(l()(),u.pb(15,0,null,null,13,"ion-content",[],null,null,null,c.u,c.d)),u.ob(16,49152,null,0,b.r,[u.h,u.k,u.x],{fullscreen:[0,"fullscreen"]},null),(l()(),u.pb(17,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,c.v,c.e)),u.ob(18,49152,null,0,b.y,[u.h,u.k,u.x],{collapse:[0,"collapse"]},null),(l()(),u.pb(19,0,null,0,4,"ion-toolbar",[],null,null,null,c.H,c.q)),u.ob(20,49152,null,0,b.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(21,0,null,0,2,"ion-title",[["size","large"]],null,null,null,c.G,c.p)),u.ob(22,49152,null,0,b.ub,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.Fb(-1,0,["Street View"])),(l()(),u.pb(24,0,null,0,4,"div",[["id","container"]],null,null,null,null,null)),(l()(),u.pb(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Walk around in the StreetView!"])),(l()(),u.pb(27,0,null,null,1,"div",[["id","pano_canvas"]],null,null,null,null,null)),(l()(),u.pb(28,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],(function(l,n){l(n,1,0,!0),l(n,16,0,!0),l(n,18,0,"condense"),l(n,22,0,"large")}),null)}function m(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,1,"app-street-view",[],null,null,null,h,p)),u.ob(1,245760,null,0,i,[b.Db,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var d=u.lb("app-street-view",i,m,{},{},[]),g=t("SVse"),v=t("s7LF"),y=t("iInd");t.d(n,"StreetViewPageModuleNgFactory",(function(){return k}));var k=u.mb(r,[],(function(l){return u.xb([u.yb(512,u.j,u.X,[[8,[s.a,d]],[3,u.j],u.v]),u.yb(4608,g.k,g.j,[u.s,[2,g.q]]),u.yb(4608,v.d,v.d,[]),u.yb(4608,b.a,b.a,[u.x,u.g]),u.yb(4608,b.Bb,b.Bb,[b.a,u.j,u.p]),u.yb(4608,b.Eb,b.Eb,[b.a,u.j,u.p]),u.yb(1073742336,g.b,g.b,[]),u.yb(1073742336,v.c,v.c,[]),u.yb(1073742336,v.a,v.a,[]),u.yb(1073742336,b.yb,b.yb,[]),u.yb(1073742336,y.o,y.o,[[2,y.t],[2,y.m]]),u.yb(1073742336,r,r,[]),u.yb(1024,y.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);