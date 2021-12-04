// 登录处的逻辑设计
const userName = document.getElementById('userName');// 用户名
const password = document.getElementById('password');// 密码
const loginBox = document.getElementById('login');// 登录框主体
const chatroom = document.getElementById('chatroom');// 聊天室主体
const loginBtn = document.querySelector('.login-button');// 登录按钮


loginBtn.addEventListener('click', () => {
	// @ts-ignore
	console.log(`用户${userName.value}登录了！`)
	loginBox.style.display = 'none'
	chatroom.style.visibility = 'visible'
	const chatRoomSection = document.querySelector('.chatroom');

	// 01 建立WebSocket连接
	const socket = io({
		query: {
			name: 'Tom',
			password: 'xxx',
		},
		// reconnection: false,
	})
	// 02 处理认证错误
	socket.on('connect_error', (err) => {
		if(err && err.message === 'INVALID_USERNAME' || err.message === 'INVALID_PASSWORD') {
			alert('认证失败！');
			return;
		}
		alert('连接失败，请检查WebSocket服务器')
	})
	socket.on('connect', () => {
		// 连接成功
	})
	socket.on('disconnect', () => {
		// 连接断开
	})
	// 03 接收广播消息
	socket.on('receiveMessage', (message) => {
		console.log('received a broadcast message.', message);
	})
	socket.on('online', (users) => {
		console.log('online users', users);
	})
	// 04 发送消息
	socket.on('connect', () => {
		// 发送一条消息
		socket.emit('sendMessage', 'hello')
	})
	// 05 通过HTTP的GET请求获取历史聊天记录
	// fetch(path) 返回promise对象 然后进行接下来的回调
	fetch('/history').then(res => res.json()).then((history) => {
		console.log('history:', history);
	})
})

// 调用API去与服务端取得连接

// 聊天室主体处的逻辑设计
const sendBtn = document.getElementById('send');// 发送信息的按钮
const sendInput = document.getElementById('sendInput');// 消息输入框
const msgList = document.querySelector('.list');// 聊天内容显示框
const msgBox = document.querySelector('.list-item');// 一条聊天内容——包括头像、消息

sendBtn.addEventListener('click', () => {
	const msgBox = document.createElement('div');
	const msgMe = document.createElement('div');
	const imgMe = document.createElement('img');
	imgMe.src = "./favicon.ico"
	msgBox.setAttribute('class', 'list-item');// 新添的那一条聊天内容整体-消息、头像
	msgMe.setAttribute('class', 'message');// 新添的聊天消息-文本
	imgMe.setAttribute('class', 'avatar');// 新添的头像
	// 获取聊天输入框中的消息
	// @ts-ignore
	let text = document.getElementById('sendInput').value
	msgMe.innerHTML = text;
	
	msgBox.appendChild(msgMe);
	msgBox.appendChild(imgMe);
	msgList.appendChild(msgBox);
	clearBox()
})

function clearBox(){
	// @ts-ignore
	// 清空输入框
	document.getElementById('sendInput').value = null
}