(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),m=a.n(i),c=a(7),l=a(1);a(37);function s(){return r.a.createElement("div",{className:"navigation"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement("p",null),r.a.createElement(c.b,{to:"/about"},"About"))}var o=a(13),u=a.n(o),v=a(26),g=a(27),E=a(28),f=a(31),p=a(30),_=a(29),d=a.n(_);a(61);function h(e){var t=e.title,a=e.year,n=e.summary,i=e.rating,m=e.img,l=e.genres;return r.a.createElement("ul",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/detail",state:{title:t,year:a,summary:n,rating:i,img:m,genres:l}},className:"movie__home"},r.a.createElement("img",{className:"movie__img",src:m,alt:t,title:t})),r.a.createElement("h2",{className:"movie__title"},t),r.a.createElement("h4",{className:"movie__year"},a),r.a.createElement("h4",{className:"movie__rating"},i," / 10"),r.a.createElement("h5",{className:"movie__summary"},n.slice(0,190),"..."),r.a.createElement("ul",{className:"movie__genres"},"Genre :",l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))))}a(62);var y=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).getMoviesInf=Object(v.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,n.setState({movies:a,loading:!1});case 5:case"end":return e.stop()}}),e)}))),n.state={loading:!0,movies:[]},n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.getMoviesInf()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.movies;return r.a.createElement("section",null,r.a.createElement("li",{className:"movies"},t?r.a.createElement("div",{className:"loading"},"Loading..."):a.map((function(e){return r.a.createElement(h,{title:e.title,year:e.year,rating:e.rating,genres:e.genres,summary:e.summary,img:e.medium_cover_image,key:e.id})}))))}}]),a}(r.a.Component);a(63);function b(){return r.a.createElement("div",{className:"about__inf"},"It's Movie Information Web")}a(64);function N(e){var t=e.location.state;return console.log(t),Object(n.useEffect)((function(){void 0===t&&e.history.push("/")})),void 0!==t?r.a.createElement("section",{className:"detail"},r.a.createElement("h1",null,t.title),r.a.createElement("img",{src:t.img}),r.a.createElement("h4",null,t.year),r.a.createElement("h4",{className:"detail__summary"},t.summary),r.a.createElement("h4",null,t.rating),r.a.createElement("ul",{className:"detail__ul"},t.genres.map((function(e,t){return r.a.createElement("li",{classname:"detail__li",key:t},e)})))):null}function k(){return r.a.createElement(c.a,null,r.a.createElement(s,null),r.a.createElement(l.a,{exact:!0,path:"/",component:y}),r.a.createElement(l.a,{path:"/about",component:b}),r.a.createElement(l.a,{path:"/detail",component:N}))}m.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8592b9ca.chunk.js.map