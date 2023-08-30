let h1=document.querySelectorAll('h1');
let input=document.querySelectorAll('input');
let content=document.querySelector('.content');
let buttons=document.querySelectorAll('button');
let showmsg=()=>{
    content.style.background=input[0].value;
    content.style.color='transparent';
    content.style.width=input[2].value;
    content.style.height=input[3].value;
}
buttons[0].addEventListener('click',showmsg)


buttons[0].addEventListener('click',appiar= () =>{
    

    setTimeout(() => {
        h1[0].style.transition='0.5s'
        h1[0].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
        h1[0].style.color=input[1].value;
    }, 2000);
    
    setTimeout(() => {
        h1[1].style.transition='0.7s'
        h1[1].style.color=input[1].value;
        h1[1].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
    }, 4000);
    
    setTimeout(() => {
        h1[2].style.color=input[1].value;
        h1[2].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
        h1[2].style.transition='0.9s'
    }, 6000);
    setTimeout(() => {
        h1[3].style.color=input[1].value;
        h1[3].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
        h1[3].style.transition='1s'
    }, 8000);
    }
    )

    buttons[1].addEventListener('click',disapair=()=>{
        content.style.background='white';
        content.style.background.transition='1s';
        h1[0].style.color='transparent'
        h1[1].style.color='transparent'
        h1[2].style.color='transparent'
        h1[0].style.textShadow='0px 0px 0px  '
        h1[1].style.textShadow='0px 0px 0px  '
        h1[2].style.textShadow='0px 0px 0px  '
        h1[3].style.textShadow='0px 0px 0px  '
        h1[3].style.color='transparent'
        h1[0].style.transition='1s'
        h1[1].style.transition='0.7s'
        h1[2].style.transition='0.4s'
        h1[3].style.transition='0.2s'
    })
    
    