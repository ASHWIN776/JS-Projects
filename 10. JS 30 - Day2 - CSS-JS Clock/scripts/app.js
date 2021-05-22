const secHand = document.querySelector("#secHand");
const minHand = document.querySelector("#minHand");
const hrHand = document.querySelector("#hrHand");


setTime(); // so that it runs just as the browser loads
setInterval( setTime ,1000); // This starts after 1s and then runs continuously

function setTime(){
    const time = new Date();
    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hr = time.getHours();   

    // At n seconds, rotate secHand (n * 6) if you consider 0deg to be at 12, but here 0deg is at 9
    secHand.style.transform = `rotate(${90 + sec * 6}deg)`;
    console.log(minHand.style.transform, 90 + (min * 60 + sec)*0.1);
    
    // 1 min = 6%, 1sec = 0.1deg
    minHand.style.transform = `rotate(${90 + min * 6 + sec*0.1}deg)`;

    // 1 hr === 30deg, 1min = 0.5deg and 1sec = 0.083deg
    hrHand.style.transform = `rotate(${90 + hr * 30 + min*0.5 +  sec * 0.083}deg)`;
}