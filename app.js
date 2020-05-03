const express = require("express");
const app = express();
const path = require("path");  //전체경로가져오기위해


/*  서버구동 */
app.listen(3000,function() {
    console.log("http://127.0.0.1:3000")
})

/* View Engine 세팅 */
app.set("view engine", "pug");  //app.set은 변수 등록이라고 생각하면된다. 뷰엔진이라는 변수에 퍼그를 넣어줌
app.set("views",path.join(__dirname,"./views")); //퍼그가 동적 생성하는 뷰엔진으로 등록하는. 뷰는 (전역)변수
app.locals.pretty = true;


/* 미들웨어 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/*  라우터 */
app.use("/",express.static(path.join(__dirname, "./public")));

const navis = [
    {id:1, title:"About", link:"/about"},
    {id:2, title:"Board", link:"/board"},
    {id:3, title:"Gallery", link:"/gallery"}
];

app.get("/", (req,res,next) => {
    const title = "index.html"
    const headTitle = "PUG페이지"
    res.render("index.pug",{navis,title,headTitle})
})
app.get("/about", (req,res,next) => {
    const title = "about.html"
    const headTitle = "PUG페이지"
    res.render("about.pug",{navis,title,headTitle})
})
app.get("/board", (req,res,next) => {
    const title = "board.html"
    const headTitle = "PUG페이지"
    res.render("board.pug",{navis,title,headTitle})
})
app.get("/gallery", (req,res,next) => {
    const title = "gallery.html"
    const headTitle = "PUG페이지"
    res.render("gallery.pug",{navis,title,headTitle})
})
