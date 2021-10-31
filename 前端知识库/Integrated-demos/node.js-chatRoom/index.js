// 登录处的逻辑设计
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const loginSection = document.querySelector('.login');
const loginBtn = document.querySelector('.login-button');

loginBtn.addEventListener('click', () => {
	alert("用户" + userName.value + "登录了！")
	const chatRoomSection = document.querySelector('.chatroom');
	showChatRoom()
})
function showChatRoom(){
	console.log("待完成，让登录窗口退出，页面显示出来！");
}

// 调用API去与服务端取得连接


const sendBtn = document.getElementById('send');
const sendInput = document.getElementById('sendInput');

const msgList = document.querySelector('.list');
const msgBox = document.querySelector('.list-item');

sendBtn.addEventListener('click', () => {
	const msgBox = document.createElement('div');
	const msgMe = document.createElement('div');
	const imgMe = document.createElement('img');
	imgMe.src = "./favicon.ico"
	msgBox.setAttribute('class', 'list-item')
	msgMe.setAttribute('class', 'message');
	imgMe.setAttribute('class', 'avatar');
	
	msgMe.innerHTML = sendInput.value;
	
	msgBox.appendChild(msgMe);
	msgBox.appendChild(imgMe);
	msgList.appendChild(msgBox);
	clearBox()
})

function clearBox(){
	var input = document.querySelector('#sendInput');
	input.value = ""
}
