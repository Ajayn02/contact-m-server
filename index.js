const jsonServer=require("json-server")

const cmServer=jsonServer.create()

const middleware=jsonServer.defaults()
const router=jsonServer.router("db.json")

cmServer.use(middleware)
cmServer.use(router)

const PORT =3000 || process.env.PORT

cmServer.listen(PORT,()=>{
    console.log(`json server running @ port ${PORT}`);
    
})