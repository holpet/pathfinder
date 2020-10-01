(this.webpackJsonppathfinder_viz=this.webpackJsonppathfinder_viz||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(11),s=a.n(n),l=a(65),c=(a(85),a(64)),i=a.n(c),d=a(77),u=a(32),m=a(38),h=a(16),g=a(17),f=a(21),p=a(19),v=a(7),w=a(23),E=a(31),b=a(28),N=a(27),S=(a(87),a(46)),y=a.n(S),k=a(47),I=a.n(k),x=a(37),T=a.n(x),A=a(48),D=a.n(A);function j(e,t,a,o){return r.a.createElement(L,{key:o,type:e,locator:t,classAs:a,idAs:o})}var L=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(h.a)(this,a),(o=t.call(this,e)).state={type:e.type,locator:e.locator,classAs:e.classAs,idAs:e.idAs},o}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"muster-node-wrapper"},r.a.createElement("button",{className:"muster-node "+this.state.type+" "+this.state.classAs,id:"muster-"+this.state.idAs},function(e){if("start"===e)return r.a.createElement("div",{className:"rel loc"},r.a.createElement("img",{className:"bg",src:T.a,draggable:"false",alt:"Start node BG"}),r.a.createElement("img",{className:"img st",src:y.a,draggable:"false",alt:"Start node"}));if("end"===e)return r.a.createElement("div",{className:"rel loc"},r.a.createElement("img",{className:"bg",src:T.a,draggable:"false",alt:"Target node BG"}),r.a.createElement("img",{className:"img en",src:I.a,draggable:"false",alt:"Target node"}));if("weight"===e)return r.a.createElement("div",{className:"rel loc"},r.a.createElement("img",{className:"hand",src:D.a,draggable:"false",alt:"Weight node BG"}))}(this.state.locator)))}}]),a}(o.PureComponent);var B=function(e){return"dijkstra"===e?function(){var e={name:null,desc:null};return e.name="DIJKSTRA'S",e.desc="This algorithm guarantees shortest path. It can be weighted or unweighted (takes edge costs into account). No heuristic (distance measure) is used.",e}():"astar"===e?function(){var e={name:null,desc:null};return e.name="A* (A-STAR)",e.desc="This algorithm guarantees shortest path. It can be weighted or unweighted (takes edge costs into account). Uses heuristic (distance measure). Maximum effectivity for pathfinding.",e}():"bestfs"===e?function(){var e={name:null,desc:null};return e.name="BEST FIRST SEARCH",e.desc="This algorithm guarantees shortest path. It can be only unweighted (doesn't take edge costs into account). Uses heuristic (distance measure).",e}():"breadthfs"===e?function(){var e={name:null,desc:null};return e.name="BREADTH FIRST SEARCH",e.desc="This algorithm guarantees shortest path. It can be only unweighted (doesn't take edge costs into account). No heuristic (distance measure) is used.",e}():"depthfs"===e?function(){var e={name:null,desc:null};return e.name="DEPTH FIRST SEARCH",e.desc="This algorithm doesn't guarantee shortest path. It can be only unweighted (doesn't take edge costs into account). It is often used e.g. to identify connected nodes in a graph component.",e}():void 0};a(67);var C=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(h.a)(this,a),(o=t.call(this,e)).state={clickedAlgo:"dijkstra"},o}return Object(g.a)(a,[{key:"render",value:function(){var e=this,t=function(){var e=[];return e.push(j("norm","start","muster-start muster-not-active","start")),e.push(j("norm","end","muster-end muster-not-active","end")),e.push(j("norm","wall","muster-wall muster-not-active","wall")),e.push(j("norm","weight","muster-weight muster-not-active","weight")),e.push(j("norm","","muster-path muster-not-active","path")),e.push(j("norm","","muster-algo muster-not-active","algo")),e.push(j("norm","","muster-norm muster-not-active","norm")),e}();try{var a=B(this.state.clickedAlgo),o=R(this.state.clickedAlgo)}catch(s){a=B("dijkstra"),o=!0}if(!o)var n="weight-red";return r.a.createElement("div",null,r.a.createElement(v.a,{id:"custom-bg",bg:"",variant:"dark",expand:"lg"},r.a.createElement("div",{className:"order-0"},r.a.createElement(v.a.Text,{id:"brand"},r.a.createElement("span",{className:"brand-name"},"\xa0\xa0P\xa0a\xa0t\xa0h"),"\xa0\xa0V\xa0i\xa0s\xa0u\xa0a\xa0l\xa0i\xa0z\xa0e\xa0r\xa0\xa0")),r.a.createElement(v.a.Toggle,{className:"mx-auto toggle-nav","aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav",className:"mx-auto collapse-nav"},r.a.createElement("div",{className:"mx-auto order-1"},r.a.createElement(w.a,{className:""},r.a.createElement(v.a.Text,null," ","\xa0\xa0/\xa0choose\xa0/\xa0\xa0"),r.a.createElement(E.a,{className:"dropdown-title",id:"header-link-alg",title:"ALGORITHMS"},r.a.createElement("div",{className:"ddown"},r.a.createElement(E.a.Item,{className:"dropdown-link",onClick:function(){e.props.algoSelected("dijkstra"),e.setState({clickedAlgo:"dijkstra"},(function(){console.log("chosen dijkstra in header...")}))}},"DIJKSTRA'S"),r.a.createElement(E.a.Item,{className:"dropdown-link",onClick:function(){e.props.algoSelected("astar"),e.setState({clickedAlgo:"astar"},(function(){console.log("chosen astar in header...")}))}},"A*"),r.a.createElement(E.a.Item,{className:"dropdown-link",onClick:function(){e.props.algoSelected("bestfs"),e.setState({clickedAlgo:"bestfs"},(function(){console.log("chosen bestfs in header...")}))}},"BEST SEARCH FIRST"),r.a.createElement(E.a.Item,{className:"dropdown-link",onClick:function(){e.props.algoSelected("breadthfs"),e.setState({clickedAlgo:"breadthfs"},(function(){console.log("chosen bredthfs in header...")}))}},"BREADTH SEARCH FIRST"),r.a.createElement(E.a.Item,{className:"dropdown-link",onClick:function(){e.props.algoSelected("depthfs"),e.setState({clickedAlgo:"depthfs"},(function(){console.log("chosen depth in header...")}))}},"DEPTH SEARCH FIRST"))),r.a.createElement(v.a.Text,null,"\xa0\xa0/\xa0generate\xa0/\xa0\xa0"),r.a.createElement("div",{id:"header-link-maze"},r.a.createElement(w.a.Link,{id:"header-link",onClick:function(){return e.props.generateMaze()}}," ","maze"," ")),r.a.createElement("div",{id:"header-link-stairs"},r.a.createElement(w.a.Link,{id:"header-link",onClick:function(){return e.props.generateStairs()}}," ","stairs"," ")),r.a.createElement(v.a.Text,null,"\xa0\xa0/\xa0vizualize\xa0/\xa0\xa0"),r.a.createElement("div",{id:"header-link-clear"},r.a.createElement(w.a.Link,{id:"header-link",onClick:function(){return e.props.clearBoard()}},"clear")),r.a.createElement("div",{id:"header-link-start"},r.a.createElement(w.a.Link,{id:"header-link-viz",onClick:function(){e.props.algo()}},"start"))))),r.a.createElement("div",{className:"order-0"},r.a.createElement(w.a.Link,{id:"header-link",href:"https://github.com/holpet/pathfinder"},"Github\xa0repository"))),r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"mx-auto "},r.a.createElement("div",{className:"muster-nav"},r.a.createElement("div",{className:"muster-noflex"},t[0],r.a.createElement(b.a,{key:"bottom",placement:"bottom",overlay:r.a.createElement(N.a,{id:"tooltip-start",bsPrefix:"tooltip-custom"},"Move start node with\xa0\xa0[mouse button].")},r.a.createElement(v.a.Text,{className:"bold-text"},"\xa0\xa0START\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))),r.a.createElement("div",{className:"muster-noflex"},t[1],r.a.createElement(b.a,{key:"bottom",placement:"bottom",overlay:r.a.createElement(N.a,{id:"tooltip-end",bsPrefix:"tooltip-custom"},"Move end node with\xa0\xa0[mouse button].")},r.a.createElement(v.a.Text,{className:"bold-text"},"\xa0\xa0END\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))),r.a.createElement("div",{className:"muster-noflex"},t[2],r.a.createElement(b.a,{key:"bottom",placement:"bottom",overlay:r.a.createElement(N.a,{id:"tooltip-walls",bsPrefix:"tooltip-custom"},"Draw walls by holding down\xa0\xa0[mouse button].")},r.a.createElement(v.a.Text,{className:"bold-text"},"\xa0\xa0WALL\xa0(no\xa0pass)\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))),r.a.createElement("div",{className:"muster-noflex"},t[3],r.a.createElement(b.a,{key:"bottom",placement:"bottom",overlay:r.a.createElement(N.a,{id:"tooltip-weights",bsPrefix:"tooltip-custom"},"Draw weights by holding down\xa0\xa0[CTRL]\xa0\xa0+\xa0\xa0[mouse button].")},r.a.createElement(v.a.Text,{className:"bold-text"},"\xa0\xa0",r.a.createElement("span",{className:n},"WEIGHT\xa0(passing\xa0is\xa0harder\xa06:1)"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))),r.a.createElement("div",{className:"muster-noflex"},t[6],r.a.createElement(b.a,{key:"bottom",placement:"bottom",overlay:r.a.createElement(N.a,{id:"tooltip-unvisited",bsPrefix:"tooltip-custom"},"Draw yourself or generate random maze/stairs (above).")},r.a.createElement(v.a.Text,{className:"bold-text"},"\xa0\xa0UNVISITED\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))),r.a.createElement("div",{className:"muster-noflex"},t[5],r.a.createElement(b.a,{key:"bottom",placement:"bottom",overlay:r.a.createElement(N.a,{id:"tooltip-visited",bsPrefix:"tooltip-custom"},"Solve algorithm by clicking on\xa0\xa0[start].")},r.a.createElement(v.a.Text,{className:"bold-text"},"\xa0\xa0VISITED\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))),r.a.createElement("div",{className:"muster-noflex"},t[4],r.a.createElement(b.a,{key:"bottom",placement:"bottom",overlay:r.a.createElement(N.a,{id:"tooltip-path",bsPrefix:"tooltip-custom"},"After solving, move start/end nodes to recalculate path.")},r.a.createElement(v.a.Text,{className:"bold-text"},"\xa0\xa0FINAL\xa0PATH")))))),r.a.createElement(v.a,{className:"nav-description"},r.a.createElement(w.a,{className:"mx-auto "},r.a.createElement("div",{className:"muster-nav"},r.a.createElement("div",{className:"muster-noflex"},r.a.createElement(v.a.Text,{className:"bold-text-bigger"},"You are solving with:\xa0\xa0",r.a.createElement("span",{id:"text-algo"},a.name),"\xa0\xa0algorithm. ",a.desc))))))}}]),a}(o.Component),R=function(e){return"dijkstra"===e||"astar"===e},O=a(45),F=(a(69),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(h.a)(this,a),(o=t.call(this,e)).clearNodeView=function(){"wall"!==o.state.locator&&"weight"!==o.state.locator&&"path"!==o.state.locator&&"algo"!==o.state.locator||!o.state.clear||(o.setState({locator:""}),o.setState({clear:!1}))},o.handleUserChanges=function(e){return o.props.mouseEvents(e,Object(O.a)(o),o.state.gridView,o.state.gridUpdate,o.state.weighted)},o.state={row:e.row,col:e.col,nodeID:e.nodeID,type:e.type,locator:e.locator,gridView:e.gridView,gridUpdate:e.gridUpdate,clear:e.clear,generated:!1,isWall:e.isWall,weighted:e.weighted,mouseEvents:e.mouseEvents,noHover:!1},o}return Object(g.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;e.clear!==this.props.clear&&this.setState({clear:e.clear},(function(){this.clearNodeView()})),e.generated!==this.props.generated&&this.state.isWall(this.state.row,this.state.col)&&""===this.state.locator&&this.setState({locator:"wall"},(function(){t.setState({generated:!1})}))}},{key:"render",value:function(){this.props.gridView.setDict(this);var e=function(e,t){if("wall"===e&&t)return"wall-no-anim";if("weight"===e&&t)return"weight-no-anim";return e}(this.state.locator,this.state.noHover);return r.a.createElement("div",{className:"node-wrapper"},r.a.createElement("button",{className:"node "+this.state.type+" "+e,id:"node-"+this.state.row+"-"+this.state.col,onMouseUp:this.handleUserChanges,onMouseDown:this.handleUserChanges,onMouseOver:this.handleUserChanges,onMouseEnter:this.handleUserChanges,onMouseLeave:this.handleUserChanges},function(e,t,a,o){var n="loc";t&&(n="");if("start"===e)return r.a.createElement("div",{className:"rel "+n},r.a.createElement("img",{className:"bg",src:T.a,draggable:"false",alt:"Start node BG"}),r.a.createElement("img",{className:"img st",src:y.a,draggable:"false",alt:"Start node"}));if("end"===e)return r.a.createElement("div",{className:"rel "+n},r.a.createElement("img",{className:"bg",src:T.a,draggable:"false",alt:"Target node BG"}),r.a.createElement("img",{className:"img en",src:I.a,draggable:"false",alt:"Target node"}));if("weight"===e)return r.a.createElement("div",{className:"rel loc"},r.a.createElement("img",{id:"img-"+a+"-"+o,className:"hand",src:D.a,draggable:"false",alt:"Weight node BG"}))}(this.state.locator,this.state.noHover,this.state.row,this.state.col)))}}]),a}(o.PureComponent));var V=function(e,t,a,o,r){if("mousedown"===e.type&&(a.state.mouseIsPressed=!0,a.state.currentLocator=t.state.locator,a.state.currentType=t.state.type,a.state.currentID=t.state.nodeID),"mouseup"===e.type&&(a.state.mouseIsPressed=!1,a.state.currentID===t.state.nodeID)){var n="wall";e.ctrlKey&&r()&&(n="weight"),""===t.state.locator&&(t.setState({locator:n}),o(t.state.row,t.state.col,n)),t.state.locator===n&&(t.setState({locator:""}),o(t.state.row,t.state.col,""))}if("mouseenter"===e.type){if(t.setState({noHover:!1}),!a.state.mouseIsPressed)return;var s=a.getFirstItemFromLL(),l=a.state.dict[a.getFirstItemFromLL()];if(t.setState({noHover:!1}),"start"===a.state.currentLocator||"end"===a.state.currentLocator)if(""!==t.state.locator)t.setState({noHover:!0});else{for(t.setState({noHover:!1,locator:a.state.currentLocator}),o(t.state.row,t.state.col,a.state.currentLocator);l.state.locator!==a.state.currentLocator;)a.shiftFirstItemFromLL(),l=a.state.dict[a.getFirstItemFromLL()];l.setState({locator:""},(function(){a.state.algoDisplayed&&a.state.algoRecalculate()})),o(l.state.row,l.state.col,"")}else n="wall",e.ctrlKey&&r()&&(n="weight"),""!==t.state.locator&&"wall"!==t.state.locator&&"weight"!==t.state.locator||""!==a.state.currentLocator?"wall"!==t.state.locator&&"weight"!==t.state.locator&&""!==t.state.locator||a.state.currentLocator!==n||(s===a.state.currentID&&(l.setState({locator:""}),o(l.state.row,l.state.col,"")),t.setState({locator:"",noHover:!0}),o(t.state.row,t.state.col,"")):(s===a.state.currentID&&(l.setState({locator:n}),o(l.state.row,l.state.col,n)),t.setState({locator:n,noHover:!1}),o(t.state.row,t.state.col,n))}"mouseleave"===e.type&&a.state.mouseIsPressed&&a.addItemToLL(t.state.nodeID)},M=a(12),P=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(h.a)(this,a),(o=t.call(this,e)).setDict=function(e){o.state.dict[e.props.nodeID]=e},o.getDict=function(){return o.state.dict},o.count=0,o.setRef=function(e){},o.getStartNode=function(){for(var e in o.state.dict){var t=o.state.dict[e];if("start"===t.state.locator)return e;if("wall"===t.state.locator)return e}},o.linkedList=new M.LinkedList,o.addItemToLL=function(e){o.linkedList.unshift(e)},o.getFirstItemFromLL=function(){return o.linkedList.first()},o.shiftFirstItemFromLL=function(){return o.linkedList.shift()},o.state={mouseIsPressed:!1,currentLocator:"",currentType:"norm",currentID:0,gridMax:e.gridMax,gridUpdate:e.gridUpdate,dict:{},clear:!1,algoDisplayed:!1,algoRecalculate:e.algoRecalculate,generated:!1,isWall:e.isWall,weighted:e.weighted},o}return Object(g.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.clear!==this.props.clear&&this.setState({clear:e.clear}),e.algoDisplayed!==this.props.algoDisplayed&&this.setState({algoDisplayed:e.algoDisplayed}),e.generated!==this.props.generated&&(this.setState({generated:!0}),console.log("generated from grid..."))}},{key:"componentDidUpdate",value:function(){this.setState({clear:!1}),this.setState({generated:!1})}},{key:"renderNode",value:function(e,t,a,o,n,s,l){var c=function(e,t,a,o,r,n){var s="";if(e===a&&t===o)return s="start";if(e===r&&t===n)return s="end";return s}(e,t,o,n,s,l);return r.a.createElement(F,{ref:this.setRef,key:a,nodeID:a,row:e,col:t,type:"norm",locator:c,mouseEvents:V,gridView:this,gridUpdate:this.state.gridUpdate,clear:this.state.clear,generated:this.state.generated,isWall:this.state.isWall,weighted:this.state.weighted})}},{key:"render",value:function(){var e=[],t=function(){var e=Math.floor(window.screen.width/35)-1,t=Math.floor((window.screen.height-window.screen.height/100*35)/35);t%2!==1&&t++;return console.log("i "+e+" j "+t),[e,t]}(),a=Object(m.a)(t,2),o=a[0],n=a[1],s=function(e,t){var a=Math.floor(t/2)-1,o=Math.floor(e/3),r=Math.floor(t/2)-1,n=Math.floor(e/3*2);return[a,o,r,n]}(o,n),l=Object(m.a)(s,4),c=l[0],i=l[1],d=l[2],u=l[3];this.state.gridMax(o,n,c,i,d,u);for(var h=0,g=0;g<o;g++){for(var f=[],p=0;p<n;p++)f.push(this.renderNode(p,g,h,c,i,d,u)),h++;e.push(r.a.createElement("div",{key:g},f))}return this.ctn=0,r.a.createElement("div",{className:"grid"},e)}}]),a}(o.PureComponent);var H=function(e,t,a,o){return{row:t,col:e,locator:a,nodeID:o,distance:1/0,totalDistance:1/0,isVisited:!1,previousNode:null}};function U(e,t,a){return"start"===e[t][a].locator||"end"===e[t][a].locator||"wall"===e[t][a].locator||"weight"===e[t][a].locator}function z(e,t,a,o){return e<a&&e>=0&&t<o&&t>=0}function W(e,t){return Math.floor(Math.random()*(t-e+1))+e}function G(e,t,a){return"start"!==e[a][t].locator&&"end"!==e[a][t].locator}function _(e,t,a,o){return e<a&&e>=0&&t<o&&t>=0}function J(e,t,a,o){return e<a&&e>=0&&t<o&&t>=0}function K(e,t,a,o){return e<a&&e>=0&&t<o&&t>=0}function q(e,t,a,o){return e<a&&e>=0&&t<o&&t>=0}function Q(e,t){return(Math.abs(e.row-t.row)+Math.abs(e.col-t.col))*(1+1/1200)}function Y(e,t,a,o){return e<a&&e>=0&&t<o&&t>=0}function $(e,t){return(Math.abs(e.row-t.row)+Math.abs(e.col-t.col))*(1+1/1200)}var X=function(e){te([],e);for(var t=function(t){setTimeout((function(){var a=e[t];document.getElementById("node-".concat(a.row,"-").concat(a.col)).classList.add("wall-gener")}),20*t)},a=0;a<e.length;a++)t(a)},Z=function(){for(var e=document.getElementsByClassName("wall-gener"),t=0;t<e.length;t++)e[t].classList.remove("wall-gener")};function ee(){for(var e=document.getElementsByClassName("hand-path"),t=0;t<e.length;t++)e[t].className="hand"}var te=function(e,t){var a=t.length,o=e.length;document.getElementById("header-link-start").className="not-active",document.getElementById("header-link-stairs").className="not-active",document.getElementById("header-link-maze").className="not-active",document.getElementById("header-link-clear").className="not-active";var r=document.getElementsByClassName("grid");r[0].classList.add("not-active"),setTimeout((function(){document.getElementById("header-link-start").className="",document.getElementById("header-link-stairs").className="",document.getElementById("header-link-maze").className="",document.getElementById("header-link-clear").className="",r[0].classList.remove("not-active")}),20*(a+o+40))},ae=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).prepareAlgo=function(){if(r.clearGridBeforeAlgo(),"dijkstra"===r.state.algoSelected)var e=function(e){for(var t=e[0].length,a=e.length,o=null,r=null,n=0;n<t;n++)for(var s=0;s<a;s++)"start"===e[s][n].locator?o=e[s][n]:"end"===e[s][n].locator&&(r=e[s][n]);var l=function(e,o){var r=new M.Heap((function(e,t){return e.distance<t.distance?-1:e.distance>t.distance?1:0}));o.previousNode=o,o.isVisited=!0,o.distance=0,r.push({distance:o.distance,node:o});var n=[];n.push(o);for(var s=[-1,0,1,0],l=[0,1,0,-1],c=0;r.size>0;){var i=r.pop().node;c++;for(var d=0;d<4;d++){var u=i.row+s[d],m=i.col+l[d];if(J(u,m,t,a)){var h=e[m][u];if(h.isVisited||""!==h.locator&&"end"!==h.locator&&"weight"!==h.locator||("weight"===h.locator?h.distance=c+6:h.distance=c,h.isVisited=!0,h.previousNode=i,r.push({distance:h.distance,node:h}),n.push(h)),"end"===h.locator)return{mappedSearch:n,foundEnd:!0}}}}return{mappedSearch:n,foundEnd:!1}}(e,o),c=function(e,t,a){var o=e.mappedSearch,r=[];if(!e.foundEnd)return r.push(t),r.push(a),r;var n=o[o.length-1];for(r.push(n);"start"!==n.locator;)n=n.previousNode,r.push(n);return r.reverse(),r}(l,o,r);return{mappedFunction:l.mappedSearch,finalPath:c}}(r.state.grid);else"astar"===r.state.algoSelected?e=function(e){for(var t=e[0].length,a=e.length,o=null,r=null,n=0;n<t;n++)for(var s=0;s<a;s++)"start"===e[s][n].locator?o=e[s][n]:"end"===e[s][n].locator&&(r=e[s][n]);var l=function(e,o){var n=new M.Heap((function(e,t){return e.distance<t.distance?-1:e.distance>=t.distance?1:0}));o.previousNode=o,o.isVisited=!0,o.distance=0,n.push({distance:o.distance,node:o});var s=[];s.push(o);for(var l=!1,c=[-1,0,1,0],i=[0,1,0,-1];n.size>0;){var d=n.pop().node;s.push(d);for(var u=0;u<4;u++){var m=d.row+c[u],h=d.col+i[u];if(q(m,h,t,a)){var g=e[h][m];if("wall"!==g.locator){var f=g.distance,p=1/0;if(!((p="weight"===g.locator?d.distance+1+6:d.distance+1)<f))continue;g.distance=p,g.totalDistance=Q(g,r)+g.distance,g.isVisited=!0,g.previousNode=d,n.push({distance:g.totalDistance,node:g})}if("end"===g.locator)return{mappedSearch:s,foundEnd:l=!0}}}}return{mappedSearch:s,foundEnd:l}}(e,o),c=function(e,t,a){e.mappedSearch;var o=[];if(!e.foundEnd)return o.push(t),o.push(a),o;var r=a;for(o.push(r);"start"!==r.locator;)r=r.previousNode,o.push(r);return o.reverse(),o}(l,o,r);return{mappedFunction:l.mappedSearch,finalPath:c}}(r.state.grid):"bestfs"===r.state.algoSelected?e=function(e){for(var t=e[0].length,a=e.length,o=null,r=null,n=0;n<t;n++)for(var s=0;s<a;s++)"start"===e[s][n].locator?o=e[s][n]:"end"===e[s][n].locator&&(r=e[s][n]);var l=function(e,o){var n=new M.Heap((function(e,t){return e.distance<t.distance?-1:e.distance>=t.distance?1:0}));o.previousNode=o,o.isVisited=!0,o.distance=0,n.push({distance:o.distance,node:o});var s=[];s.push(o);for(var l=!1,c=[-1,0,1,0],i=[0,1,0,-1];n.size>0;){var d=n.pop().node;s.push(d);for(var u=0;u<4;u++){var m=d.row+c[u],h=d.col+i[u];if(Y(m,h,t,a)){var g=e[h][m];if("wall"===g.locator||g.isVisited||(g.distance=$(g,r),g.isVisited=!0,g.previousNode=d,n.push({distance:g.distance,node:g})),"end"===g.locator)return{mappedSearch:s,foundEnd:l=!0}}}}return{mappedSearch:s,foundEnd:l}}(e,o),c=function(e,t,a){e.mappedSearch;var o=[];if(!e.foundEnd)return o.push(t),o.push(a),o;var r=a;for(o.push(r);"start"!==r.locator;)r=r.previousNode,o.push(r);return o.reverse(),o}(l,o,r);return{mappedFunction:l.mappedSearch,finalPath:c}}(r.state.grid):"breadthfs"===r.state.algoSelected?e=function(e){for(var t=e[0].length,a=e.length,o=null,r=null,n=0;n<t;n++)for(var s=0;s<a;s++)"start"===e[s][n].locator?(o=e[s][n],console.log("start in BFS "+o.row+" "+o.col)):"end"===e[s][n].locator&&(r=e[s][n],console.log("end in BFS "+r.row+" "+r.col));var l=function(e,o){var r=new M.Queue;r.enqueue(o),o.previousNode=o,o.isVisited=!0;var n=[];n.push(o);for(var s=[-1,0,1,0],l=[0,1,0,-1];r.size>0;)for(var c=r.dequeue(),i=0;i<4;i++){var d=c.row+s[i],u=c.col+l[i];if(_(d,u,t,a)){var m=e[u][d];if(m.isVisited||""!==m.locator&&"end"!==m.locator||(r.enqueue(m),m.isVisited=!0,m.previousNode=c,n.push(m)),"end"===m.locator)return console.log("THE END FOUND. "+m.row+" "+m.col),{mappedSearch:n,foundEnd:!0}}}return console.log("THE END WASN'T FOUND. No path available."),{mappedSearch:n,foundEnd:!1}}(e,o),c=function(e,t,a){var o=e.mappedSearch,r=[];if(!e.foundEnd)return r.push(t),r.push(a),r;var n=o[o.length-1];for(r.push(n);"start"!==n.locator;)n=n.previousNode,r.push(n);return console.log("Final path length: "+r.length),r.reverse(),r}(l,o,r);return{mappedFunction:l.mappedSearch,finalPath:c}}(r.state.grid):"depthfs"===r.state.algoSelected&&(e=function(e){for(var t=e[0].length,a=e.length,o=null,r=null,n=0;n<t;n++)for(var s=0;s<a;s++)"start"===e[s][n].locator?o=e[s][n]:"end"===e[s][n].locator&&(r=e[s][n]);var l,c={mapped:[],foundEnd:!1};return function e(t,a){if(!t.isVisited&&!c.foundEnd){if("end"===t.locator)return c.foundEnd=!0,t.isVisited=!0,void c.mapped.push(t);t.isVisited=!0,c.mapped.push(t);for(var o=a[t.row+"-"+t.col].adj,r=0;r<o.length;r++)e(o[r],a),o[r].previousNode=t}}(o,function(e,t,a){for(var o={},r=[-1,0,1,0],n=[0,1,0,-1],s=0;s<t;s++)for(var l=0;l<a;l++){var c={orig:null,adj:[]},i=e[l][s];c.orig=i;for(var d=0;d<4;d++){var u=i.row+r[d],m=i.col+n[d];if(K(u,m,t,a)){var h=e[m][u];""!==h.locator&&"end"!==h.locator||c.adj.push(h)}}o[i.row+"-"+i.col]=c}return o}(e,t,a)),l=function(e,t,a){var o=[];if(!e.foundEnd)return o.push(t),o.push(a),o;var r=a;for(o.push(r);"start"!==r.locator;)r=r.previousNode,o.push(r);return o.reverse(),o}(c,o,r),{mappedFunction:c.mapped,finalPath:l}}(r.state.grid));return e},r.startAlgo=function(){var e=r.prepareAlgo();!function(e){ee();for(var t=function(t){if("end"===e[t].locator)return{v:void 0};setTimeout((function(){var a=e[t];document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node algo"}),20*t)},a=1;a<e.length;a++){var o=t(a);if("object"===typeof o)return o.v}}(e.mappedFunction),function(e,t){for(var a=t.length,o=function(t){setTimeout((function(){var a=e[t];"weight"===a.locator&&(document.getElementById("img-".concat(a.row,"-").concat(a.col)).className="hand-path"),document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node path"}),20*(t+a+40))},r=0;r<e.length;r++)o(r)}(e.finalPath,e.mappedFunction),te(e.finalPath,e.mappedFunction),r.setState({algoDisplayed:!0})},r.recalculateAlgo=function(){var e=r.prepareAlgo();!function(e,t){ee();for(var a=1;a<t.length-1;a++){var o=t[a];document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node algo"}for(var r=0;r<e.length;r++){var n=e[r];"weight"===n.locator&&(document.getElementById("img-".concat(n.row,"-").concat(n.col)).className="hand-path"),document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node path"}}(e.finalPath,e.mappedFunction),r.setState({algoDisplayed:!0})},r.chooseAlgo=function(e){r.setState({algoSelected:e},(function(){R(r.state.algoSelected)||function(e,t,a){for(var o=0;o<t;o++)for(var r=0;r<a;r++)if("weight"===e[r][o].locator)return!0;return!1}(r.state.grid,r.maxCol,r.maxRow)&&r.clearGrid()}))},r.weightedAlgo=function(){return R(r.state.algoSelected)},r.generateStairs=function(){r.clearGridBeforeAlgo(),r.clearGrid(),setTimeout((function(){var e=function(e){var t=e[0].length,a=e.length,o=[],r=0,n=0,s=0;for(n=0;n<t;n++)r++,U(e,n,n)||(o.push(e[n][n]),e[n][n].locator="wall");for(n=t-2,s=r;n>0;n--,s++)r++,U(e,s,n)||(o.push(e[s][n]),e[s][n].locator="wall");for(n=2,s=r;s<a-1;n++,s++)U(e,s,n)||(o.push(e[s][n]),e[s][n].locator="wall");return[o,e]}(r.state.grid),t=Object(m.a)(e,2),a=t[0],o=t[1];X(a),setTimeout((function(){r.setState({grid:o},(function(){r.setState({generated:!0},(function(){Z()}))}))}),20*(a.length+40))}),20)},r.generateMaze=function(){r.clearGridBeforeAlgo(),r.clearGrid(),setTimeout((function(){var e=function(e){var t=e[0].length,a=e.length;console.log("max row... "+t+" max col... "+a);for(var o=0;o<t;o++)for(var r=0;r<a;r++)if("start"===e[r][o].locator){var n=e[r][o];console.log("start in A* "+n.row+" "+n.col)}else if("end"===e[r][o].locator){var s=e[r][o];console.log("end in A* "+s.row+" "+s.col)}n.isVisited=!0,s.isVisited=!0;for(var l=[],c=new M.Stack,i=!1;!i;){var d=W(0,t-1),u=W(0,a-1);console.log("rand row: "+d+" , rand col: "+u),i=G(e,d,u),d%2===0&&(i=!1)}n=e[u][d];console.log("random start r/c: "+n.row+" "+n.col),n.isVisited=!0,n.locator="wall",c.push(n),l.push(n);for(var m=[-2,0,2,0],h=[0,2,0,-2];c.size>0;){var g=c.pop(),f=[];console.log("current r/c: "+g.row+" "+g.col);for(o=0;o<4;o++){var p=g.row+m[o],v=g.col+h[o];if(z(p,v,t,a)){var w=e[v][p];w.isVisited||""!==w.locator||(c.push(g),f.push(w))}}if(0!==f.length){var E=f[W(0,f.length-1)];E.isVisited=!0,E.locator="wall",c.push(E),l.push(E),console.log("neighbour r/c: "+E.row+" "+E.col);var b=null;E.col>g.col&&E.row===g.row?(b=e[g.col+1][g.row],console.log("bottom... nextNode.col > current.col")):E.col<g.col&&E.row===g.row?(b=e[g.col-1][g.row],console.log("top... nextNode.col < current.col")):E.row<g.row&&E.col===g.col?(b=e[g.col][g.row-1],console.log("left... nextNode.row < current.row")):E.row>g.row&&E.col===g.col&&(b=e[g.col][g.row+1],console.log("right... nextNode.row > current.row")),console.log("joining node: "+b.row+" "+b.col),"start"!==b.locator&&"end"!==b.locator&&(b.isVisited=!0,b.locator="wall",l.push(b))}}return[l,e]}(r.state.grid),t=Object(m.a)(e,2),a=t[0],o=t[1];X(a),setTimeout((function(){r.setState({grid:o},(function(){r.setState({generated:!0},(function(){Z()}))}))}),20*(a.length+40))}),20)},r.isWall=function(e,t){return"wall"===r.state.grid[t][e].locator},r.getRowCol=function(e,t,a,o,n,s){r.maxRow=e,r.maxCol=t,r.start_row=a,r.start_col=o,r.end_row=n,r.end_col=s},r.gridInit=function(){var e=function(e,t,a,o,r,n){var s=[],l=function(e,t,a,o,r,n){var s="";return e===a&&t===o&&(s="start"),e===r&&t===n&&(s="end"),s};return function(){for(var c=0,i=0;i<e;i++){for(var d=[],u=0;u<t;u++){var m=l(u,i,a,o,r,n),h=H(i,u,m,c);d.push(h),c++}s.push(d)}return s}()}(r.maxRow,r.maxCol,r.start_row,r.start_col,r.end_row,r.end_col);r.setState({grid:e})},r.gridUpdate=function(e,t,a){var o=r.state.grid.slice(),n=o[t][e],s=Object(u.a)(Object(u.a)({},n),{},{locator:a});o[t][e]=s,r.state.grid=o},r.clearGrid=Object(d.a)(i.a.mark((function e(){var t,a,o,n,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r.setState({clear:!0}),t=r.state.grid.slice(),a=0;a<r.maxCol;a++)for(o=0;o<r.maxRow;o++)n=t[o][a],"wall"!==(s=n.locator)&&"weight"!==s&&"path"!==s&&"algo"!==s||(s=""),l=Object(u.a)(Object(u.a)({},n),{},{type:"norm",locator:s}),t[o][a]=l,"path"===n.locator||"algo"===n.locator?document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node norm":document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node norm "+n.locator;r.setState({grid:t,algoDisplayed:!1});case 4:case"end":return e.stop()}}),e)}))),r.clearGridBeforeAlgo=function(){for(var e=r.state.grid.slice(),t=0;t<r.maxCol;t++)for(var a=0;a<r.maxRow;a++){var o=e[a][t],n=Object(u.a)(Object(u.a)({},o),{},{isVisited:!1,previousNode:null,distance:1/0,totalDistance:1/0});e[a][t]=n,"path"===o.locator||"algo"===o.locator?document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node norm":document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node norm "+o.locator,"weight"===o.locator&&(document.getElementsByClassName("hand-path").className="hand")}r.setState({grid:e,algoDisplayed:!1})},r.state={grid:[],clear:!1,algoDisplayed:!1,algoSelected:"dijkstra",generated:!1},r.gridRef=Object(o.createRef)(),r.maxRow=0,r.maxCol=0,r.start_row=0,r.start_col=0,r.end_row=0,r.end_col=0,r}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.gridInit()}},{key:"componentDidUpdate",value:function(){this.setState({clear:!1}),this.setState({generated:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{clearBoard:this.clearGrid,algo:this.startAlgo,generateStairs:this.generateStairs,generateMaze:this.generateMaze,algoSelected:this.chooseAlgo}),r.a.createElement("div",{className:"full-grid"},r.a.createElement(P,{ref:this.gridRef,gridMax:this.getRowCol,gridUpdate:this.gridUpdate,clear:this.state.clear,algoDisplayed:this.state.algoDisplayed,algoRecalculate:this.recalculateAlgo,generated:this.state.generated,isWall:this.isWall,weighted:this.weightedAlgo})))}}]),a}(o.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.BOTTOM_CENTER,l.b.SCALE;s.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports=a.p+"static/media/dot_full.f7c48a77.svg"},46:function(e,t,a){e.exports=a.p+"static/media/start.d9d208a8.svg"},47:function(e,t,a){e.exports=a.p+"static/media/flag.7228ac6a.svg"},48:function(e,t,a){e.exports=a.p+"static/media/hold.608d80cd.svg"},67:function(e,t,a){},69:function(e,t,a){},78:function(e,t,a){e.exports=a(124)},85:function(e,t,a){},87:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.6600910f.chunk.js.map