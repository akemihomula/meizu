const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

//静态文件引入
// app.use(express.static("./dist"))
// 设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get("/",(req,res)=>{
    res.json({code:200,result:"后台数据"})
})

// 密钥
const secret = "iloveyoumeinv";

var userlists = [];
//登录
// http://192.168.54.65:3000/login?username=zhangsan&password=123123
//注册
// http://192.168.54.65:3000/register?username=zhangsan&password=123123
//请求数据
// http://192.168.54.65:3000/getdata?token="值"
app.get("/login",(req,res)=>{
    // 1.获取前台用户名密码，判断验证
    let {username,password} = req.query;
    let data = req.query;
    data['iat'] = Math.floor(Date.now() / 1000 )-30;
    // 数据里面的用户名与前台登录用户名相同 返回-1失败
    let passindex = userlists.findIndex(value=> value.username == username);
    if(passindex != "-1"  && password == userlists[passindex].password){
        //令牌
        let token = jwt.sign(data,secret);
        res.json({code:200,result:{token}})
    }else{
        res.json({code:201,result:"请求数据失败"})
    }
})
// 注册功能
app.get("/register",(req,res)=>{
    userlists.push(req.query)
    res.json({code:200,result:"注册成功"})
})

app.use((req,res,next)=>{
    try {
        var tokendata = jwt.verify(req.query.token,secret);
        let passindex = userlists.findIndex(value=> value.username == tokendata.username);
        if(passindex != "-1"){
            next(); //跳出路由
        }else{
            res.json({code:201,result:"请求数据失败"})
        }
    } catch(err) {
        res.json({code:201,result:"请求数据失败"})
    }
    
})
// http://192.168.54.65:3000/getdata?token="值"
app.get("/getdata",(req,res)=>{
    //返回的数据都是一样的
    res.json({code:200,result:{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574317403386&di=28481e632491f9eb89aef9f027f5195b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F215b3e273e82c7141cbb4fc8a2e70dad60e38976.jpg",
        name:"aymami"
    }})

})

app.listen(3000,()=>{
    console.log("请访问：http://192.168.124.5:3000");
})