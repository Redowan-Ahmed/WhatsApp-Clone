

const close = document.querySelector('.winclose').addEventListener('click', closeFun)
const sidebar = document.querySelector('#contacts')


function closeFun(e){
    const closeItem = document.querySelector('.window.blue').className = 'hide'
    localStorage.setItem("blueNotification", 'false');
    console.log('working')
}

const blueNotificationStatus = localStorage.getItem('blueNotification')

if (blueNotificationStatus){
    document.querySelector('.window.blue').className = 'hide'
}

const sidebarStatus =  localStorage.getItem('sidebarStatus')
if (sidebarStatus == 'false'){
    sidebar.className = 'hide'
}

const hideSidebar = document.querySelector('.hideSidebar').addEventListener('click', hideSidebarFun)
function hideSidebarFun(e) {
    if ( localStorage.getItem('sidebarStatus') == 'false' ){
        console.log('Closed ')
        sidebar.className = 'contacts'
        localStorage.setItem('sidebarStatus', 'true')
    }else{
    sidebar.className = 'hide'
    const button = e.target
    console.log(button)
    localStorage.setItem('sidebarStatus', 'false')
    button.parentElement.setAttribute('title', 'Show Sidebar')
}
}

let user = document.querySelector('#user')
user.addEventListener('click', (e) => {
    if (user.getAttribute('title') == 'Sender'){
        user.className = 'toggel receiverID';
        user.setAttribute('title', 'Receiver')
        user.innerHTML = 'Receiver'
    }else{
        user.className = 'toggel senderID';
        user.setAttribute('title', 'Sender')
        user.innerHTML = 'Sender'
    }
})


let conversaionBox = document.querySelector('.convemessages')

const inputform = document.querySelector('#massageForm');
inputform.addEventListener('submit', (e)=>{
    e.preventDefault();

    const masasgeInput = document.querySelector('input.formInputSize')

    if (masasgeInput.value){
    const currentDate = Date().toLocaleString();
    if (user.getAttribute('title')== 'Sender'){
        const createMassage =
        `<div class="senderContainer arrowm">
            <div class="sender mepop">
                <div class="thereply">
                    <p>${masasgeInput.value}</p>
                    <div class="time">
                        <P>${currentDate.split(' ')[4]}</P>
                    </div>
                    <div class="arrowhover arrowG">
                        <img src="./img/icons8-expand-arrow-96.png" alt="">
                    </div>
                    <div class="react rightr">
                        <img src="./img/icons8-happy-96.png" alt="">
                    </div>
                </div>
            </div>
        </div>`
        let createTag = document.createElement('div');
        createTag.className = "senderContainer arrowm";
        createTag.innerHTML = createMassage;
        conversaionBox.appendChild(createTag)
    }else{
        const createMassage = `
            <div class="reciver mepop">
                <div class="thereply">
                    <p>${masasgeInput.value}</p>
                    <div class="time">
                        <P>${currentDate.split(' ')[4]}</P>
                    </div>
                   <!-- <div class="emoji">
                        <img src="img/1000522-new-thinking-emoji-free-icon-hq.png" alt="">
                    </div> -->
                    <div class="arrowhover arrowW">
                        <img src="./img/icons8-expand-arrow-96.png" alt="">
                    </div>
                    <div class="react leftr">
                        <img src="./img/icons8-happy-96.png" alt="">
                    </div>
                </div>
            </div>`
        let createTag = document.createElement('div');
        createTag.className = "receiverContainer arrowm";
        createTag.innerHTML = createMassage;
        conversaionBox.appendChild(createTag)
    }


    conversaionBox.scrollTop = conversaionBox.scrollHeight


    masasgeInput.value = ''
    }
})
