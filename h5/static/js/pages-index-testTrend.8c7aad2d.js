(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-testTrend"],{"14e8":function(e,i,o){"use strict";o.d(i,"b",(function(){return a})),o.d(i,"c",(function(){return r})),o.d(i,"a",(function(){}));var a=function(){var e=this.$createElement,i=this._self._c||e;return i("v-uni-view",[i("Trend")],1)},r=[]},3241:function(e,i,o){"use strict";o("7a82");var a=o("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(o("cf25")),l={components:{Trend:r.default},data:function(){return{}}};i.default=l},5983:function(e,i,o){"use strict";o.r(i);var a=o("3241"),r=o.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){o.d(i,e,(function(){return a[e]}))}(l);i["default"]=r.a},"64dd":function(e,i,o){"use strict";o.r(i);var a=o("6b20"),r=o.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){o.d(i,e,(function(){return a[e]}))}(l);i["default"]=r.a},"6b20":function(e,i,o){"use strict";o("7a82");var a=o("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o("a2a9"),l=(o("40a3"),o("c534"),a(o("8a73")));function n(){}n.GetMinuteOption=function(){return{Type:"分钟走势图",Windows:[],IsAutoUpdate:!0,DayCount:1,IsShowRightMenu:!1,CorssCursorTouchEnd:!0,CorssCursorInfo:{Left:2,Right:2},MinuteLine:{},Border:{Left:1,Right:1,Top:18,Bottom:20},Frame:[{SplitCount:3,IsShowLeftText:!0,IsShowRightText:!0},{SplitCount:2,IsShowLeftText:!1,IsShowRightText:!0},{SplitCount:3,IsShowLeftText:!1,IsShowRightText:!0}],ExtendChart:[{Name:"MinuteTooltip"}]}};var c={MINUTE_ID:1,MINUTE_2DAY_ID:2,MINUTE_3DAY_ID:3,MINUTE_4DAY_ID:4,MINUTE_5DAY_ID:5},t={JSChart:null},p={name:"HQChart",data:function(){var e={Symbol:"600000.sh",Minute:{Option:n.GetMinuteOption(),IsShow:!1,Display:"none",Width:300,Height:600},PERIOD_ID:c};return e},onLoad:function(){},onReady:function(){this.ChangeMinutePeriod(c.MINUTE_ID)},mounted:function(){console.log(l.default.data),this.ChangeMinutePeriod(c.MINUTE_ID)},methods:{OnSize:function(){this.OnSize_h5()},OnSize_h5:function(){var e=this.Minute.Height,i=this.Minute.Width,o=this.$refs.minute;o.style.width=i+"px",o.style.height=e+"px",t.JSChart&&t.JSChart.OnSize()},CreateMinuteChart:function(){if(!t.JSChart){var e=new r.JSCommon.JSCanvasElement;e.ID="minute",e.Height=this.Minute.Height,e.Width=this.Minute.Width,t.JSChart=r.JSCommon.JSChart.Init(e),this.Minute.Option.NetworkFilter=this.NetworkFilter,this.Minute.Option.Symbol=this.Symbol,t.JSChart.SetOption(this.Minute.Option)}},ChangeMinutePeriod:function(e){t.JSChart?t.JSChart.ChangeDayCount(e):(this.Minute.Option.DayCount=e,this.CreateMinuteChart())},ChangeMinuteIndex:function(e,i){t.JSChart&&t.JSChart.ChangeIndex(e,i)},NetworkFilter:function(e,i){e.PreventDefault=!0;var o={code:0,stock:[]};o.stock=l.default.stock,o.stock[0].symbol=this.Symbol,i({data:o}),console.log("[HQChart: NetworkFilter] data",e,i)},MinuteTouchStart:function(e){t.JSChart&&t.JSChart.OnTouchStart(e)},MinuteTouchMove:function(e){t.JSChart&&t.JSChart.OnTouchMove(e)},MinuteTouchEnd:function(e){t.JSChart&&t.JSChart.OnTouchEnd(e)}}};i.default=p},"7b7d":function(e,i,o){"use strict";o.r(i);var a=o("14e8"),r=o("5983");for(var l in r)["default"].indexOf(l)<0&&function(e){o.d(i,e,(function(){return r[e]}))}(l);var n=o("f0c5"),c=Object(n["a"])(r["default"],a["b"],a["c"],!1,null,"cd7e17fe",null,!1,a["a"],void 0);i["default"]=c.exports},"8a73":function(e){e.exports=JSON.parse('{"stock":[{"time":150004,"date":20220711,"price":8.26,"open":8.66,"yclose":7.45,"high":7.800000000000001,"low":8.22,"vol":16195472,"amount":127636560,"minute":[{"price":7.87,"open":7.87,"high":7.87,"low":7.87,"vol":102358,"amount":805557,"time":925,"avprice":7.87,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.88,"high":7.89,"low":7.87,"vol":398599,"amount":3137563,"time":930,"avprice":7.87,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.86,"vol":226000,"amount":1779084,"time":931,"avprice":7.87,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.87,"vol":186200,"amount":1466715,"time":932,"avprice":7.87,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":109400,"amount":862110,"time":933,"avprice":7.87,"increase":0,"risefall":0},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":124600,"amount":982459,"time":935,"avprice":7.48,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":126800,"amount":1000144,"time":936,"avprice":7.8,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":119400,"amount":941873,"time":937,"avprice":7.2,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.9,"low":7.89,"vol":29600,"amount":233704,"time":939,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.9,"low":7.89,"vol":169000,"amount":1333676,"time":940,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":57500,"amount":453570,"time":941,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":61600,"amount":486015,"time":942,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.9,"low":7.89,"vol":65800,"amount":519528,"time":944,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.9,"open":7.89,"high":7.9,"low":7.89,"vol":42600,"amount":336338,"time":945,"avprice":7.88,"increase":0.25380710659898476,"risefall":0.02},{"price":7.89,"open":7.9,"high":7.9,"low":7.89,"vol":142700,"amount":1125964,"time":946,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.9,"low":7.89,"vol":30200,"amount":238284,"time":947,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.9,"high":7.9,"low":7.88,"vol":141400,"amount":1115864,"time":948,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.9,"high":7.9,"low":7.88,"vol":51900,"amount":409024,"time":949,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":25700,"amount":202672,"time":950,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.9,"open":7.89,"high":7.9,"low":7.88,"vol":128000,"amount":1010204,"time":951,"avprice":7.88,"increase":0.25380710659898476,"risefall":0.02},{"price":7.89,"open":7.89,"high":7.9,"low":7.89,"vol":80800,"amount":637692,"time":952,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.9,"low":7.88,"vol":51500,"amount":406512,"time":953,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.9,"high":7.9,"low":7.88,"vol":21200,"amount":167270,"time":954,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":49800,"amount":392618,"time":955,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":45100,"amount":355824,"time":956,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":62000,"amount":488652,"time":957,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.89,"high":7.9,"low":7.89,"vol":78400,"amount":618620,"time":958,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.9,"low":7.89,"vol":25900,"amount":204372,"time":959,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":103600,"amount":817198,"time":1000,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":48633,"amount":383242,"time":1001,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":69400,"amount":546952,"time":1002,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":33500,"amount":264122,"time":1003,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":68200,"amount":537934,"time":1004,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":28400,"amount":223940,"time":1005,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":54600,"amount":430544,"time":1006,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":37100,"amount":292424,"time":1007,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":34515,"amount":272114,"time":1008,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":26600,"amount":209656,"time":1009,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":59100,"amount":466102,"time":1010,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":21900,"amount":172676,"time":1011,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":20600,"amount":162378,"time":1012,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":21800,"amount":171840,"time":1013,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":19400,"amount":152940,"time":1014,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":55100,"amount":434222,"time":1015,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.87,"vol":501552,"amount":3951998,"time":1016,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":23800,"amount":187420,"time":1017,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":71030,"amount":559320,"time":1018,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":23900,"amount":188156,"time":1019,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.87,"high":7.87,"low":7.87,"vol":25300,"amount":199216,"time":1020,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":10900,"amount":85820,"time":1021,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":25300,"amount":199220,"time":1022,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":25900,"amount":204056,"time":1023,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":28100,"amount":221284,"time":1024,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":34700,"amount":273224,"time":1025,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":21000,"amount":165352,"time":1026,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":15100,"amount":118872,"time":1027,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":109900,"amount":864968,"time":1028,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":234500,"amount":1845568,"time":1029,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":36600,"amount":288092,"time":1030,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.86,"open":7.87,"high":7.87,"low":7.86,"vol":378600,"amount":2978928,"time":1031,"avprice":7.88,"increase":-0.25380710659898476,"risefall":-0.02},{"price":7.86,"open":7.86,"high":7.87,"low":7.86,"vol":46800,"amount":368176,"time":1032,"avprice":7.88,"increase":-0.25380710659898476,"risefall":-0.02},{"price":7.86,"open":7.86,"high":7.87,"low":7.86,"vol":25200,"amount":198184,"time":1033,"avprice":7.88,"increase":-0.25380710659898476,"risefall":-0.02},{"price":7.87,"open":7.86,"high":7.87,"low":7.86,"vol":29000,"amount":228076,"time":1034,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.86,"open":7.86,"high":7.87,"low":7.86,"vol":76700,"amount":603460,"time":1035,"avprice":7.88,"increase":-0.25380710659898476,"risefall":-0.02},{"price":7.87,"open":7.86,"high":7.87,"low":7.86,"vol":43000,"amount":338168,"time":1036,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.86,"high":7.87,"low":7.86,"vol":15600,"amount":122668,"time":1037,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.86,"open":7.87,"high":7.87,"low":7.86,"vol":47500,"amount":373676,"time":1038,"avprice":7.88,"increase":-0.25380710659898476,"risefall":-0.02},{"price":7.87,"open":7.86,"high":7.87,"low":7.86,"vol":120000,"amount":944304,"time":1039,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":54700,"amount":430524,"time":1040,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":9900,"amount":77956,"time":1041,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":15800,"amount":124440,"time":1042,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":13100,"amount":103132,"time":1043,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":30200,"amount":237956,"time":1044,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":30675,"amount":241548,"time":1045,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":22300,"amount":175536,"time":1046,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":12900,"amount":101632,"time":1047,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":27700,"amount":218156,"time":1048,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":14000,"amount":110292,"time":1049,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":29600,"amount":233172,"time":1050,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":15100,"amount":118944,"time":1051,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":21700,"amount":170948,"time":1052,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":65700,"amount":517624,"time":1053,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":9400,"amount":74008,"time":1054,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":89800,"amount":707512,"time":1055,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":17300,"amount":136172,"time":1056,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":80800,"amount":636640,"time":1057,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":94400,"amount":743428,"time":1058,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":11600,"amount":91348,"time":1059,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":65700,"amount":517148,"time":1100,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":18300,"amount":144076,"time":1101,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":86800,"amount":683852,"time":1102,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":36500,"amount":287496,"time":1103,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":79300,"amount":624604,"time":1104,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":38300,"amount":301684,"time":1105,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":53700,"amount":423060,"time":1106,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":98711,"amount":777532,"time":1107,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":89000,"amount":701216,"time":1108,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":48100,"amount":378932,"time":1109,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":26700,"amount":210220,"time":1110,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":22800,"amount":179516,"time":1111,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":17700,"amount":139416,"time":1112,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":19300,"amount":152016,"time":1113,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":49000,"amount":385924,"time":1114,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":37100,"amount":292200,"time":1115,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":30400,"amount":239420,"time":1116,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":40300,"amount":317224,"time":1117,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":22600,"amount":177936,"time":1118,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":57100,"amount":449468,"time":1119,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":78300,"amount":616576,"time":1120,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":60900,"amount":479412,"time":1121,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":46500,"amount":366140,"time":1122,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":30300,"amount":238648,"time":1123,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":45400,"amount":357608,"time":1124,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.87,"vol":53600,"amount":422184,"time":1125,"avprice":7.88,"increase":0,"risefall":0},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":215300,"amount":1695304,"time":1126,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.87,"high":7.88,"low":7.87,"vol":36500,"amount":287468,"time":1127,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.87,"open":7.88,"high":7.88,"low":7.87,"vol":53800,"amount":423692,"time":1128,"avprice":7.88,"increase":-0.12690355329949238,"risefall":-0.01},{"price":7.88,"open":7.87,"high":7.88,"low":7.87,"vol":38600,"amount":303992,"time":1129,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.88,"vol":0,"amount":0,"time":1130,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.87,"vol":437500,"amount":3447392,"time":1300,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":15700,"amount":123760,"time":1301,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":12900,"amount":101744,"time":1302,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.5,"open":7.3,"high":7.6,"low":7.28,"vol":107800,"amount":850069,"time":934,"avprice":7.67,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":8700,"amount":68568,"time":1310,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":87600,"amount":690424,"time":1311,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":184800,"amount":1457864,"time":1312,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":11900,"amount":93784,"time":1313,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":39600,"amount":312096,"time":1314,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":39100,"amount":308128,"time":1315,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":18900,"amount":148960,"time":1316,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.88,"low":7.88,"vol":19000,"amount":149720,"time":1317,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":90600,"amount":714344,"time":1318,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":63000,"amount":496472,"time":1319,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":14200,"amount":111960,"time":1320,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":37900,"amount":298672,"time":1321,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":22700,"amount":178968,"time":1322,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":33900,"amount":267160,"time":1323,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":39800,"amount":313920,"time":1324,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":10500,"amount":82800,"time":1325,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":14100,"amount":111160,"time":1326,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":20500,"amount":161736,"time":1327,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":12300,"amount":96952,"time":1328,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":24730,"amount":195024,"time":1329,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":39600,"amount":312304,"time":1330,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":18700,"amount":147488,"time":1331,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":17600,"amount":138728,"time":1332,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":14600,"amount":115056,"time":1333,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":25800,"amount":203376,"time":1334,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":62200,"amount":490664,"time":1335,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":53100,"amount":418864,"time":1336,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":36000,"amount":283760,"time":1337,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":23200,"amount":182904,"time":1338,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":38400,"amount":302872,"time":1339,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":98100,"amount":773096,"time":1340,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":20600,"amount":162352,"time":1341,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":28300,"amount":223056,"time":1342,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":34700,"amount":273640,"time":1343,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":14100,"amount":111128,"time":1344,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":22500,"amount":177368,"time":1345,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":28700,"amount":226272,"time":1346,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":15000,"amount":118256,"time":1347,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":23130,"amount":182280,"time":1348,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":15300,"amount":120656,"time":1349,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":25100,"amount":197816,"time":1350,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":34000,"amount":268192,"time":1351,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":17600,"amount":138696,"time":1352,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":7200,"amount":56760,"time":1353,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":27300,"amount":215192,"time":1354,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":44000,"amount":346792,"time":1355,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":44200,"amount":348384,"time":1356,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":16000,"amount":126184,"time":1357,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":19100,"amount":150576,"time":1358,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":96400,"amount":760168,"time":1359,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":17100,"amount":134832,"time":1400,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.88,"low":7.88,"vol":38500,"amount":303384,"time":1401,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":40800,"amount":321560,"time":1402,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":167100,"amount":1318240,"time":1403,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":70100,"amount":553040,"time":1404,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":119200,"amount":940472,"time":1405,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":74900,"amount":590952,"time":1406,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":48300,"amount":380912,"time":1407,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":8900,"amount":70208,"time":1408,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":16800,"amount":132416,"time":1409,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":33900,"amount":267296,"time":1410,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":20400,"amount":160784,"time":1411,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":26500,"amount":209080,"time":1412,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":24700,"amount":194760,"time":1413,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":10800,"amount":85128,"time":1414,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":25268,"amount":199232,"time":1415,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":17200,"amount":135632,"time":1416,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":41000,"amount":323104,"time":1417,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":73800,"amount":581704,"time":1418,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":36800,"amount":290184,"time":1419,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":28700,"amount":226336,"time":1420,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":70400,"amount":554936,"time":1421,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":77600,"amount":611720,"time":1422,"avprice":7.88,"increase":0,"risefall":0},{"price":7.88,"open":7.89,"high":7.89,"low":7.88,"vol":90400,"amount":713216,"time":1423,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":201200,"amount":1587392,"time":1424,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.88,"open":7.88,"high":7.89,"low":7.88,"vol":52200,"amount":411824,"time":1425,"avprice":7.88,"increase":0,"risefall":0},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":17100,"amount":134912,"time":1426,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.88,"high":7.89,"low":7.88,"vol":53600,"amount":422848,"time":1427,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":49900,"amount":393496,"time":1428,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":99800,"amount":787376,"time":1429,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01},{"price":7.89,"open":7.89,"high":7.89,"low":7.88,"vol":55500,"amount":437704,"time":1430,"avprice":7.88,"increase":0.12690355329949238,"risefall":0.01}],"symbol":"600000.sh","name":"浦发银行"}],"code":0}')},cf25:function(e,i,o){"use strict";o.r(i);var a=o("ff0a"),r=o("64dd");for(var l in r)["default"].indexOf(l)<0&&function(e){o.d(i,e,(function(){return r[e]}))}(l);var n=o("f0c5"),c=Object(n["a"])(r["default"],a["b"],a["c"],!1,null,"561c6ea0",null,!1,a["a"],void 0);i["default"]=c.exports},ff0a:function(e,i,o){"use strict";o.d(i,"b",(function(){return a})),o.d(i,"c",(function(){return r})),o.d(i,"a",(function(){}));var a=function(){var e=this,i=e.$createElement,o=e._self._c||i;return o("v-uni-view",{staticClass:"trend-box"},[o("v-uni-view",{},[o("v-uni-canvas",{staticClass:"minute",style:{width:e.Minute.Width+"px",height:e.Minute.Height+"px"},attrs:{id:"minute","canvas-id":"minute"},on:{touchstart:function(i){arguments[0]=i=e.$handleEvent(i),e.MinuteTouchStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=e.$handleEvent(i),e.MinuteTouchMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=e.$handleEvent(i),e.MinuteTouchEnd.apply(void 0,arguments)}}})],1)],1)},r=[]}}]);