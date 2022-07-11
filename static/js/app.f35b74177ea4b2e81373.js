webpackJsonp([1],
    {
        NHnr:function(t,e,i)
        {
            "use strict";
            Object.defineProperty(e,"__esModule",{value:!0});
            var a=i("bOdI"),
            n=i.n(a),
            s=i("7+uW"),
            c = 
            {
                data:function()
                {
                    return {input_code:"",bg:{backgroundImage:"url("+i("ncrs")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}

                },
                methods:
                {
                    ScanCode:function(){},
                    goToSearch:function()
                    {this.$router.push("/Home/product")}
                }
            },
            r = 
            {
                render:function()
                {
                    var t=this,
                    e=t.$createElement,
                    a=t._self._c||e;
                    return a("div",
                        {staticClass:"bg",style:t.bg},
                        [
                            a("div",{staticStyle:{width:"200%"}},
                            [
                                a("div",{staticClass:"form"},
                                [
                                    a("h1",[t._v("瑞药金方中药溯源系统")]),
                                    t._v(" "),
                                    a(
                                        "el-input",
                                        {
                                            staticClass:"input",
                                            staticStyle:{width:"75%","margin-top":"20px"},
                                            attrs:{placeholder:"请输入溯源码"},
                                            model:
                                            {
                                                value:t.input_code,
                                                callback:function(e)
                                                    {t.input_code=e},
                                                expression:"input_code"
                                            }
                                        },
                                        [a("el-image",{staticClass:"scan-icon",attrs:{src:i("IakN")}})],
                                    1),
                                    t._v(" "),
                                    a(
                                        "el-button",
                                        {
                                            staticStyle:{width:"75%","margin-top":"20px"},
                                            attrs:{type:"danger",icon:"el-icon-search"},
                                            on:{click:function(e){return t.goToSearch()}}
                                        },
                                        [t._v("查询")]
                                    ),
                                    t._v(" "),
                                    a("p",[t._v("扫码查询")])
                                ],
                            1)]
                        )]
                    )
                },
                staticRenderFns:[]
            };
            var l = i("VU/8")(c,r,!1,function(t){i("lanS")},"data-v-088f72fe",null).exports,
            o = 
            {
                name:"Home",
                data:function()
                {
                    return {
                        activeIndex:"1",
                        imgUrl:"/static/header.png",
                        navList:[
                            {
                                path:"/Home/product",
                                navItem:"产品信息",
                                i:1,
                                class:"el-icon-tableware"
                            },
                            {
                                path:"/Home/plant",
                                navItem:"道地种植",
                                i:2,
                                class:"el-icon-place"
                            },
                            {
                                path:"/Home/factory",
                                navItem:"破壁生产",
                                i:3,
                                class:"el-icon-shopping-cart-2"
                            },
                            {
                                path:"/Home/quality",
                                navItem:"产品质检",
                                i:4,
                                class:"el-icon-document"
                            },
                            {
                                path:"/Home/save",
                                navItem:"仓储信息",
                                i:5,
                                class:"el-icon-truck"
                            },
                            {
                                path:"/Home/company",
                                navItem:"品牌故事",
                                i:6,
                                class:"el-icon-medal"
                            },
                            {
                                path:"/Home/fake",
                                navItem:"防伪查询",
                                i:7,
                                class:"el-icon-medal"
                            }
                        ],
                        imgList:[
                            {img:i("k1Ux")},
                            {img:i("ckvi")},
                            {img:i("GhxJ")},
                            {img:i("26hR")}
                        ]
                    }
                },

                methods:
                {
                    handleOpen:function(t,e){console.log(t,e)},
                    handleClose:function(t,e){console.log(t,e)},
                    handleSelect:function(t,e){console.log(t,e)},
                    goTo:function(t){this.$router.replace(t)}
                }
            },
            p = 
            {
                render:function() 
                {
                    var t=this,
                    e=t.$createElement,
                    i=t._self._c||e;
                    return i("div",
                        [
                            i(
                                "el-carousel",
                            {
                                attrs:{interval:4e3,type:"demonstration",height:"150px"}
                            },
                            t._l(t.imgList,
                                    function(t)
                                    {
                                        return i("el-carousel-item",{key:t},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.img,fit:"fit"}})],1)
                                    }
                                ),
                            1),
                            t._v(" "),
                            i(
                                "div",
                                {staticStyle:{width:"100%"}},
                                [
                                    i(
                                        "el-menu",
                                        {
                                            staticClass:"el-menu-demo",
                                            attrs:{"default-active":t.$route.path,mode:"horizontal"},
                                            on:{select:t.handleSelect,open:t.handleOpen,close:t.handleClose}
                                        },
                                        t._l(
                                            t.navList,
                                            function(e,a)
                                            {
                                                return i(
                                                    "el-menu-item",
                                                    {
                                                        key:a,
                                                        staticClass:"menu-item",
                                                        attrs:{index:e.path},
                                                        on:{click:function(i){return t.goTo(e.path)}}
                                                    },
                                                    [i(
                                                        "template",
                                                        {slot:"title"},
                                                        [i(
                                                            "div",
                                                            {staticStyle:{height:"70px",width:"80px"}},
                                                            [i("div",
                                                                {staticClass:"item-icon icon"},
                                                                [i("i",{class:e.class})]
                                                                ),
                                                                t._v(" "),
                                                                i("div",
                                                                    {staticClass:"item-text"},
                                                                    [i("span",{staticStyle:{width:"50px",height:"30px","text-align":"center","padding-top":"-30px"}},[t._v(t._s(e.navItem))])
                                                                    ]
                                                                )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    2)
                                            }
                                            ),
                                    1),
                                    t._v(" "),
                                    i("div",{staticClass:"line"})
                                ],
                            1),
                            t._v(" "),
                            i("el-main",{staticClass:"detailed-content"})
                        ],
                    1)
                },
                staticRenderFns:[]
            };
            var g=i("VU/8")(o,p,!1,function(t){i("gyDR")},"data-v-0d6c8f8f",null).exports,
            m = {
                components:{index:g},
                data:function()
                {
                    return {
                        img:[{image:"../assets/header.png"}],
                        tableData:
                        [
                            {name:"产品名称",data:"**"},
                            {name:"产品批号",data:"**"},
                            {name:"生产日期",data:"**"},
                            {name:"溯源码",data:"**"},
                            {name:"产地",data:"**"},
                            {name:"包装规格",data:"**"},
                            {name:"功能主治",data:"**"},
                            {name:"用法用量",data:"**"}
                        ]
                    }
                }
            },
            d = {
                render:function()
                {
                    var t=this.$createElement,
                    e=this._self._c||t;
                    return e("div",
                        [e("el-card",
                            {staticStyle:{"margin-top":"-30px"}},
                            [e("el-table",
                                {
                                    staticStyle:{width:"90%","margin-left":"5%"},
                                    attrs:{data:this.tableData,border:""}
                                },
                                [e("el-table-column",
                                    {attrs:{prop:"name",label:"产品参数"}}),
                                    this._v(" "),
                                    e("el-table-column",{attrs:{prop:"data",label:"产品信息"}})
                                ],
                                1),
                                this._v(" "),
                                e("div",
                                {
                                    staticStyle:{width:"90%","margin-left":"5%",margin_top:"-6px"}
                                },
                                [e("el-image",{attrs:{src:i("aBmt")}})],
                                1)
                            ],
                        1)
                        ],
                    1)
                },
                staticRenderFns:[]
            };
            var u=i("VU/8")(m,d,!1,function(t){i("mIil")},"data-v-03a87681",null).exports,
            v={data:function()
                {
                    return {
                        activities:
                        [
                            {
                                title:"地理环境",
                                content:"**",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("C44y")}
                                ]
                            },
                            {
                                title:"水质报告",
                                content:"",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("qAhh")},
                                    {i:1,imgUrl:i("ARgg")}
                                ]
                            },
                            {
                                title:"土壤鉴定报告",
                                content:"",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("WEAH")}
                                ]
                            },
                            {
                                title:"基源鉴定",
                                content:"**",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("uu98")}
                                ]
                            },
                            {
                                title:"种植",
                                content:"",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("ejnI")},
                                    {i:1,imgUrl:i("9Lnj")},
                                    {i:2,imgUrl:i("i50G")}
                                ]
                            },
                            {
                                title:"采收",
                                content:"**",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("LYod")}
                                ]
                            }
                        ]
                    }
                }
            },
            f = {
                render:function()
                {
                    var t=this,
                    e=t.$createElement,
                    i=t._self._c||e;
                    return i("div",
                        {staticStyle:{"margin-top":"-30px"}},
                        [i("div",
                            {staticClass:"timeline"},
                            [i("el-timeline",
                                t._l(t.activities,
                                    function(e,a)
                                    {
                                        return i("el-timeline-item",
                                            {
                                                key:a,
                                                attrs:{timestamp:e.date,placement:"top"}
                                            },
                                            [i("el-card",
                                                [
                                                    i("el-row",[
                                                        i("el-col",
                                                            {attrs:{span:16}},
                                                            [i("div",
                                                                [i("h2",
                                                                    {staticClass:"card-title"},
                                                                    [t._v(t._s(e.title))]
                                                                )]
                                                            )]
                                                        ),
                                                        t._v(" "),
                                                        i("el-col",
                                                            {attrs:{span:8}},
                                                            [i("div",
                                                                {staticClass:"vertical-align:middle;position:relative;"},
                                                                [i("h6",
                                                                    {staticClass:"card-principal"},
                                                                    [t._v("负责人："+t._s(e.principal))]
                                                                )]
                                                            )]
                                                        )
                                                    ],1),
                                                    t._v(" "),
                                                    i("el-row",[
                                                        i("p",
                                                            {staticClass:"card-content"},
                                                            [t._v(t._s(e.content))]
                                                        )
                                                    ]),
                                                    t._v(" "),
                                                    t._l(e.imgList,
                                                            function(t)
                                                            {
                                                                return i("div",
                                                                    {key:t},
                                                                    [i("img",{staticClass:"image",attrs:{src:t.imgUrl}})]
                                                                    )
                                                            }
                                                        )
                                                ],
                                            2)],
                                        1)
                                    }
                                    ),
                            1)]
                        ,1)]
                    )
                },
                staticRenderFns:[]
            };
            var h=i("VU/8")(v,f,!1,function(t){i("PJ0b"),i("oVp3")},"data-v-f716d2a6",null).exports,
            A = {
                data:function()
                {
                    return {
                        activities:[
                            {
                                title:"生产",
                                content:"**",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("iEhE")},
                                    {i:1,imgUrl:i("dRmf")}
                                ]
                            },
                            {
                                title:"检验",
                                content:"**",
                                principal:"**"
                                ,imgList:[
                                    {i:0,imgUrl:i("sa4J")}
                                ]
                            },
                            {
                                title:"包装",
                                content:"**",
                                principal:"**",
                                imgList:[
                                    {i:0,imgUrl:i("Yi8V")},
                                    {i:0,imgUrl:i("swLL")}
                                ]
                            }
                        ]
                    }
                }
            },
            C = {
                render:function()
                {
                    var t=this,
                    e=t.$createElement,
                    i=t._self._c||e;
                    return i(
                        "div",
                        {staticStyle:{"margin-top":"-30px"}},
                        [
                            i("div",{staticClass:"timeline"},
                            [
                                i(
                                    "el-timeline",
                                    t._l(
                                        t.activities,
                                        function(e,a){return i(
                                            "el-timeline-item",
                                            {key:a,attrs:{timestamp:e.date,placement:"top"}},
                                            [
                                                i(
                                                    "el-card",
                                                    [
                                                        i(
                                                            "el-row",
                                                            [
                                                                i(
                                                                    "el-col",
                                                                    {attrs:{span:16}},
                                                                    [i("div",[i("h2",{staticClass:"card-title"},[t._v(t._s(e.title))])])]
                                                                ),
                                                                t._v(" "),
                                                                i(
                                                                    "el-col",
                                                                    {attrs:{span:8}},
                                                                    [i("div",{staticClass:"vertical-align:middle;position:relative;"},[i("h6",{staticClass:"card-principal"},[t._v("负责人："+t._s(e.principal))])])]
                                                                )
                                                            ],
                                                        1),
                                                        t._v(" "),
                                                        i("el-row",
                                                            [
                                                                i("p",{staticClass:"card-content"},[t._v(t._s(e.content))])
                                                            ]
                                                        ),
                                                        t._v(" "),
                                                        t._l(e.imgList,
                                                            function(t){return i("div",{key:t},[i("img",{staticClass:"image",attrs:{src:t.imgUrl}})])}
                                                        )
                                                    ],
                                                2)
                                            ],1
                                        )}
                                    ),
                                1)
                            ],1
                            )
                        ]
                    )
                },
                staticRenderFns:[]
            };
            var k=i("VU/8")(A,C,!1,function(t){i("5tXK"),i("ceNY")},"data-v-c809929c",null).exports,
            B = {
                render:function() {
                    var t=this.$createElement,
                    e=this._self._c||t;
                    return e(
                        "div",
                        [
                            e(
                                "el-card",
                                {staticStyle:{"margin-top":"-30px"}},
                                [
                                    e(
                                        "el-row",
                                        [
                                            e(
                                                "el-col",
                                                {attrs:{span:16}},
                                                [e("div",[e("h2",{staticClass:"card-title"},[this._v("质检报告")])])]
                                            ),
                                            
                                            this._v(" "),
                                            
                                            e(
                                                "el-col",
                                                {attrs:{span:8}},
                                                [
                                                    e(
                                                        "div",
                                                        {staticClass:"vertical-align:middle;position:relative;"},
                                                        [e("h6",{staticClass:"card-principal"},[this._v("负责人：**")])]
                                                    )
                                                ]
                                            )

                                        ],
                                    1),
                                    this._v(" "),
                                    e("img",{staticClass:"image",attrs:{src:i("en66")}})
                                ],
                            1)
                        ],
                    1)
                },
                staticRenderFns:[]
            };
            var E=i("VU/8")({},B,!1,function(t){i("ec/5")},"data-v-8e397b7a",null).exports,
            S = {
                name:"App",
                components:{
                    search:l,
                    Home:g,
                    factory:k,
                    plant:h,
                    product:u,
                    quality:E
                },
                methods:{},
                mounted:function(){}
            },
            I = {
                render:function(){
                    var t=this.$createElement,
                    e=this._self._c||t;
                    return e(
                        "div",
                        {attrs:{id:"app"}},
                        [
                            this.$route.meta.keepAlive?e("div",[e("Home"),this._v(" "),e("router-view")],1):this._e(),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")
                        ],
                    1)
                },
                staticRenderFns:[]
            };
            var Q=i("VU/8")(S,I,!1,function(t){i("wnKu"),i("uX0a")},null,null).exports,
            y = i("zL8q"),
            x=i.n(y),
            _=(i("tvR6"),i("sVYa"),i("/ocq")),
            U = {
                data:function(){return{imgList:[{i:0,imgUrl:i("MjT1")},{i:1,imgUrl:i("OZ/e")}]}}
            },
            J = {
                render:function(){
                    var t=this.$createElement,
                    e=this._self._c||t;
                    return e(
                        "div",
                        [
                            e(
                                "el-card",
                                {staticStyle:{"margin-top":"-30px"}},
                                [
                                    e(
                                        "el-row",
                                        [
                                            e("el-col",
                                                {attrs:{span:16}},
                                                [e("div",
                                                    [
                                                        e("h2",{staticClass:"card-title"},
                                                        [this._v("仓储信息")])
                                                    ]
                                                )]
                                            ),
                                            this._v(" "),
                                            e("el-col",
                                                {attrs:{span:8}},
                                                [e("div",
                                                    {staticClass:"vertical-align:middle;position:relative;"},
                                                    [
                                                        e("h6",{staticClass:"card-principal"},
                                                        [this._v("负责人：**")])
                                                    ]
                                                )]
                                            )
                                        ],
                                    1),
                                this._v(" "),
                                this._l(
                                    this.imgList,
                                    function(t) {
                                        return e(
                                            "div",
                                            {key:t},
                                            [e("img",{staticClass:"image",attrs:{src:t.imgUrl}})]
                                        )
                                    }
                                    )
                                ],
                            2)
                        ],
                    1)
                },
                staticRenderFns:[]
            };
            var R = {
                data:function() {
                    return{
                        imgList:[
                            {i:0,imgUrl:i("26hR")},
                            {i:1,imgUrl:i("GhxJ")}
                        ]
                    }
                }
            },
            w = {
                render:function() {
                    var t=this,
                    e=t.$createElement,
                    a=t._self._c||e;
                    return a(
                        "div",
                        [
                            a(
                                "el-card",
                                {staticStyle:{"margin-top":"-30px"}},
                                [
                                    a(
                                        "el-row",
                                        [
                                            a(
                                                "el-col",
                                                {attrs:{span:16}},
                                                [a("div",[a("h2",{staticClass:"card-title"},[t._v("瑞药金方现代中药有限公司")])])]
                                            ),
                                            t._v(" "),
                                            a(
                                                "el-col",{attrs:{span:8}},
                                                [a("div",{staticClass:"vertical-align:middle;position:relative;"})]
                                            )
                                        ],
                                    1),
                                    t._v(" "),
                                    a(
                                        "div",
                                        {staticStyle:{width:"90%","text-align":"left","margin-left":"5%"}},
                                        [a("p",[t._v("**")])]
                                    ),
                                    t._v(" "),
                                    t._l(
                                        t.imgList,
                                        function(t) {
                                            return a("div",{key:t},[a("img",{staticClass:"image",attrs:{src:t.imgUrl}})])
                                        }
                                    ),
                                    t._v(" "),
                                    a(
                                        "el-row",
                                        [a(
                                            "el-col",
                                            {attrs:{span:16}},
                                            [a("div",[a("h2",{staticClass:"card-title"},[t._v("发展历程")])])]
                                        )],
                                    1),
                                    t._v(" "),
                                    a("div",[a("img",{staticClass:"image2",attrs:{src:i("1Hws")}})])
                                ],
                            2)
                        ],
                    1)
                },
                staticRenderFns:[]
            };
            var V = {
                render:function() {
                    var t=this.$createElement,
                    e=this._self._c||t;
                    return e(
                        "div",
                        [
                            e(
                                "el-card",
                                {staticStyle:{"margin-top":"-30px"}},
                                [
                                    e("p",[this._v("该商品已查询过")]),
                                    this._v(" "),
                                    e(
                                        "h2",
                                        {staticStyle:{color:"red"}},
                                        [this._v(this._s(this.check_times))]
                                    ),
                                    this._v(" "),
                                    e("p",[this._v("次")])]
                            )
                        ],
                    1)
                },
                staticRenderFns:[]
            };
            var K,L = [
                {
                    path:"/",
                    component:l,
                    meta:{keepAlive:!1}
                },
                {
                    path:"/Home/product",
                    component:u,
                    meta:{keepAlive:!0}
                },
                {
                    path:"/Home/plant",
                    component:h,meta:
                    {keepAlive:!0}
                },
                {
                    path:"/Home/factory",
                    component:k,
                    meta:{keepAlive:!0}
                },
                {
                    path:"/Home/quality",
                    component:E,
                    meta:{keepAlive:!0}},
                {
                    path:"/Home/save",
                    component:i("VU/8")(U,J,!1,function(t){i("f9Ge")},"data-v-7fd32216",null).exports,
                    meta:{keepAlive:!0}},
                {
                    path:"/Home/company",
                    component:i("VU/8")(R,w,!1,function(t){i("7kkb")},"data-v-6cd4db93",null).exports,
                    meta:{keepAlive:!0}
                },
                {
                    path:"/Home/fake",
                    component:i("VU/8")({data:function(){return{check_times:0}}},V,!1,function(t){i("KDKv")},"data-v-22d25bc9",null).exports,
                    meta:{keepAlive:!0}
                }
            ];
            s.default.config.productionTip=!1,s.default.use(x.a),
            s.default.use(_.a);
            var b=new _.a({routes:L,mode:"hash"});
            new s.default(
                (
                    K={el:"#app",router:b,components:{App:Q},template:"<App/>"},
                    n()(K,"router",b),
                    n()(K,"render",function(t){return t(Q)}),
                    K
                )
            )
        },


        //背景图
        ncrs:function(t,e,i){t.exports=i.p+"static/img/bc.png"},

        //顶部走马灯
        k1Ux:function(t,e,i){t.exports=i.p+"static/img/header1.png"},
        ckvi:function(t,e,i){t.exports=i.p+"static/img/header2.png"},
        GhxJ:function(t,e,i){t.exports=i.p+"static/img/header3.png"},
        "26hR":function(t,e,i){t.exports=i.p+"static/img/header4.png"},

        "1Hws":function(t,e,i){t.exports=i.p+"static/img/experience.7c761ac.jpeg"}, 
        "9Lnj":function(t,e,i){t.exports=i.p+"static/img/中药种植2.e6817b6.png"},
        ARgg:function(t,e,i){t.exports=i.p+"static/img/water_report2.bf85514.jpg"},
        C44y:function(t,e,i){t.exports=i.p+"static/img/ev.9a49633.jpg"},
        LYod:function(t,e,i){t.exports=i.p+"static/img/中草药采收图.f2b47c1.jpg"},
        MjT1:function(t,e,i){t.exports=i.p+"static/img/包装仓储.1db2de1.jpg"},
        "OZ/e":function(t,e,i){t.exports=i.p+"static/img/包装存储2.2130263.jpg"},
        WEAH:function(t,e,i){t.exports=i.p+"static/img/soil_report.ff55830.png"},
        Yi8V:function(t,e,i){t.exports=i.p+"static/img/包装1.ed63f2b.jpg"},
        aBmt:function(t,e,i){t.exports=i.p+"static/img/product.1b6aeeb.png"},
        dRmf:function(t,e,i){t.exports=i.p+"static/img/生产图片2.3d18777.jpeg"},
        ejnI:function(t,e,i){t.exports=i.p+"static/img/中药种植1.5d72ff5.png"},
        en66:function(t,e,i){t.exports=i.p+"static/img/质检报告.c96d4d7.jpg"},
        i50G:function(t,e,i){t.exports=i.p+"static/img/中药种植3.2f68efd.png"},
        iEhE:function(t,e,i){t.exports=i.p+"static/img/生产图片1.9e34adb.jpeg"},
        qAhh:function(t,e,i){t.exports=i.p+"static/img/water_report1.d8375d1.jpg"},
        sa4J:function(t,e,i){t.exports=i.p+"static/img/检验.6c3a9f2.jpg"},
        swLL:function(t,e,i){t.exports=i.p+"static/img/包装2.cfaf495.jpg"},
        uu98:function(t,e,i){t.exports=i.p+"static/img/genic_report.4858642.jpeg"},
        
        
        "ec/5":function(t,e){},
        "5tXK":function(t,e){},
        "7kkb":function(t,e){},
        tvR6:function(t,e){},
        uX0a:function(t,e){},
        lanS:function(t,e){},
        mIil:function(t,e){},
        oVp3:function(t,e){},
        f9Ge:function(t,e){},
        gyDR:function(t,e){},
        ceNY:function(t,e){},
        IakN:function(t,e){},
        KDKv:function(t,e){},
        PJ0b:function(t,e){},
        wnKu:function(t,e){},
        
    },
    ["NHnr"]
);
//# sourceMappingURL=app.f35b74177ea4b2e81373.js.map