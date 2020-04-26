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

app.get("/pug", (req,res,next) =>{
    const user = [
        {id:1, name:"홍길동"},
        {id:2, name:"홍길만"},
        {id:3, name:"홍길순"}
    ];
    const title = "PUG로 만든 페이지입니다"
    const headTitle = "PUG페이지"
    res.render("index.pug",{user,title,headTitle})
})
