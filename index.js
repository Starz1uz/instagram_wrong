// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((res) => res.json())
// .then((res) => pElement2(res))

const containerDiv = document.createElement('div');
containerDiv.classList.add('countainer');

const cntHeadDiv = document.createElement('div');
cntHeadDiv.classList.add('cntHead');
containerDiv.appendChild(cntHeadDiv);

const avatarImg = document.createElement('img');
avatarImg.src = "./imgORicons/Avatar.png";
avatarImg.alt = "";
cntHeadDiv.appendChild(avatarImg);

const cntTextDiv = document.createElement('div');
cntTextDiv.classList.add('cnttext');
cntHeadDiv.appendChild(cntTextDiv);

const boldElement = document.createElement('b');
boldElement.textContent = "lorem";
cntTextDiv.appendChild(boldElement);

const pElement = document.createElement('p');
pElement.textContent = "City, Country";
cntTextDiv.appendChild(pElement);

const afootDiv = document.createElement('div');
afootDiv.classList.add('afoot');
cntHeadDiv.appendChild(afootDiv);

const aElement = document.createElement('a');
aElement.href = "#";
aElement.textContent = "...";
afootDiv.appendChild(aElement);

const cntImgDiv = document.createElement('div');
cntImgDiv.classList.add('cntImg');
containerDiv.appendChild(cntImgDiv);

const imgElement = document.createElement('img');
imgElement.src = "https://fifpro.org//media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=880&height=440&rnd=133210253587130000";
imgElement.alt = "";
cntImgDiv.appendChild(imgElement);

const iconsDiv = document.createElement('div');
iconsDiv.classList.add('icons');
containerDiv.appendChild(iconsDiv);

const rightDiv = document.createElement('div');
rightDiv.classList.add('right');
iconsDiv.appendChild(rightDiv);

const likeImg = document.createElement('img');
likeImg.src = "./imgORicons/like.png";
likeImg.alt = "";
rightDiv.appendChild(likeImg);

const commandImg = document.createElement('img');
commandImg.src = "./imgORicons/command.png";
commandImg.alt = "";
rightDiv.appendChild(commandImg);

const sendImg = document.createElement('img');
sendImg.src = "./imgORicons/send.png";
sendImg.alt = "";
rightDiv.appendChild(sendImg);

const likesP = document.createElement('p');
likesP.textContent = "8,888 likes";
rightDiv.appendChild(likesP);

const leftDiv = document.createElement('div');
leftDiv.classList.add('left');
iconsDiv.appendChild(leftDiv);

const secretImg = document.createElement('img');
secretImg.src = "./imgORicons/secret.png";
secretImg.alt = "";
leftDiv.appendChild(secretImg);

const onlTextDiv = document.createElement('div');
onlTextDiv.classList.add('onlText');
containerDiv.appendChild(onlTextDiv);

const pElement2 = document.createElement('p');
const boldElement2 = document.createElement('b');
boldElement2.textContent = "nickname";
pElement2.appendChild(boldElement2);
pElement2.innerHTML += " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ";
const aElement2 = document.createElement('a');
aElement2.href = "#";
aElement2.textContent = "... more";
pElement2.appendChild(aElement2);
onlTextDiv.appendChild(pElement2);

const footDiv = document.createElement('div');
footDiv.classList.add('foot');
containerDiv.appendChild(footDiv);

const pElement3 = document.createElement('p');
pElement3.textContent = "view all 33 commits";
footDiv.appendChild(pElement3);

const boxDiv1 = document.createElement('div');
boxDiv1.classList.add('box');
footDiv.appendChild(boxDiv1);

const rightDiv2 = document.createElement('div');
rightDiv2.classList.add('right');
boxDiv1.appendChild(rightDiv2);

const pElement4 = document.createElement('p');
const boldElement3 = document.createElement('b');
boldElement3.textContent = "nickname";
pElement4.appendChild(boldElement3);
pElement4.innerHTML += " Lorem ipsum dolor sit amet, ";
rightDiv2.appendChild(pElement4);

const leftDiv2 = document.createElement('div');
leftDiv2.classList.add('left');
boxDiv1.appendChild(leftDiv2);

const likeImg2 = document.createElement('img');
likeImg2.src = "./imgORicons/like.png";
likeImg2.alt = "";
leftDiv2.appendChild(likeImg2);

const boxDiv2 = document.createElement('div');
boxDiv2.classList.add('box');
footDiv.appendChild(boxDiv2);

const rightDiv3 = document.createElement('div');
rightDiv3.classList.add('right');
boxDiv2.appendChild(rightDiv3);

const pElement5 = document.createElement('p');
const boldElement4 = document.createElement('b');
boldElement4.textContent = "nickname";
pElement5.appendChild(boldElement4);
pElement5.innerHTML += " Lorem ipsum dolor sit amet, ";
rightDiv3.appendChild(pElement5);

const leftDiv3 = document.createElement('div');
leftDiv3.classList.add('left');
boxDiv2.appendChild(leftDiv3);

const likeImg3 = document.createElement('img');
likeImg3.src = "./imgORicons/like.png";
likeImg3.alt = "";
leftDiv3.appendChild(likeImg3);

const smallP = document.createElement('p');
smallP.classList.add('small');
smallP.textContent = "1 hour ago";
footDiv.appendChild(smallP);

const hrElement = document.createElement('hr');
containerDiv.appendChild(hrElement);

const endDiv = document.createElement('div');
endDiv.classList.add('end');
containerDiv.appendChild(endDiv);

const rightDiv4 = document.createElement('div');
rightDiv4.classList.add('right');
endDiv.appendChild(rightDiv4);

const smileImg = document.createElement('img');
smileImg.src = "./imgORicons/smile.png";
smileImg.alt = "";
rightDiv4.appendChild(smileImg);

const pElement6 = document.createElement('p');
pElement6.textContent = "Add a comment...";
rightDiv4.appendChild(pElement6);

const leftDiv4 = document.createElement('div');
leftDiv4.classList.add('left');
endDiv.appendChild(leftDiv4);

const aElement3 = document.createElement('a');
aElement3.href = "#";
aElement3.textContent = "Post";
leftDiv4.appendChild(aElement3);

document.body.appendChild(containerDiv);

likeImg.onclick = () => {
    if (likeImg.style.backgroundColor !== 'red') {
        likeImg.style.backgroundColor = 'red';
    } else {
        likeImg.style.backgroundColor = 'transparent';
    }
};

likeImg3.onclick = () => {
    if (likeImg3.style.backgroundColor !== 'red') {
        likeImg3.style.backgroundColor = 'red';
    } else {
        likeImg3.style.backgroundColor = 'transparent';
    }
};
likeImg2.onclick = () => {
    if (likeImg2.style.backgroundColor !== 'red') {
        likeImg2.style.backgroundColor = 'red';
    } else {
        likeImg2.style.backgroundColor = 'transparent';
    }
};
secretImg.onclick = () => {
    if (secretImg.style.backgroundColor !== 'black') {
        secretImg.style.backgroundColor = 'black';
        secretImg.style.color = 'white';
    } else {
        secretImg.style.backgroundColor = 'white';
    }
};

const night = document.querySelector('.night')
const boss = document.body

night.onclick = () => {
    if ( boss.style.backgroundColor !== 'black') {
        boss.style.backgroundColor = 'black'
        boss.style.cursor = 'pointer'
        boss.style.color = 'white'
    } else {
        boss.style.backgroundColor = 'white'
        boss.style.cursor = 'pointer'
        boss.style.color = 'black'
    }
}

