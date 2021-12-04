const path = require('path')
const http = require('http')
const Koa = require('koa')
const serve = require('koa-static')
const socketIO = require('socket.io')

const hostname = '127.0.0.1'
const port = 3000
const publicPath = path.join(__dirname, 'public')

// 1.使用socket.io配合koa启动带有websocket的服务
// 创建Koa实例
const app = new Koa()
// 创建http server实例
const server = http.createServer(app.callback())
// 创建socket.io实例
const io = socketIO(server)
// 静态资源路由
app.use(serve(publicPath))
server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}`);
});

// 2.进行登录认证
// 向socket.io实例添加一个中间件 判定用户名是否传入 密码是否为xxx
// 这是一个为了简单起见的设计 实际项目中切忌
io.use((socket, next) => {
	const { name,password } = socket.handshake.query
	if(!name) {
		return next(new Error('无效账户名'))
	}
	if(password !== 'xxx') {
		return next(new Error('密码错误'))
	}
	next()
});

const users = new Map()// 存储所有在线用户
io.on('connection', (socket) => {
	// 3.用户登入
	// 监听connection事件处理连入请求
	// 保存连入用户信息
	// 广播在线用户列表
	// 客户端连入
	const name = socket.handshake.query.name;// 记录用户
	users.set(name, socket)
	console.log(`${name} connected`);
	// 通知所有客户端更新聊天列表
	io.sockets.emit('online', [...users.keys()])
	// 4.用户消息
	// 监听sendMessage事件处理用户消息
	// 将用户消息保存起来
	// 广播用户消息
	const history = []
	socket.on('sendMessage', (content) => {
		console.log(`${name} send a message:${content}`);
		const message = {
			time: Date.now(),
			sender: name,
			content: content,
		}
		history.push(message)
		io.broadcast.emit('receiveMessage', message)
	})
	// 5.用户离线
	// 监听disconnect事件处理连接断开
	// 将用户从在线列表中删除
	// 广播在线用户列表
	socket.on('disconnect', (reason) => {
		console.log(`${name} disconnected, reason:${reason}`);
		users.delete(name)
		io.sockets.emit('online', [users.keys()])
	})
})


// 6.在用户登录时展示出历史聊天记录~
// 获取所有历史记录的HTTP接口——挂一个Koa中间件上去
app.use((ctx) => {
	if(ctx.request.path === '/history') {
		// 处理指向/history的请求 直接返回所有历史消息
		ctx.body = history
	}
})