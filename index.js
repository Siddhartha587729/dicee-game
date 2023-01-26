
refresh = ()=>{
    const random1=Math.floor(Math.random()*6)+1;
    const random2=Math.floor(Math.random()*6)+1;

    const imageAdd1 = 'images/dice'+ random1 + '.png';
    const imageAdd2 = 'images/dice'+ random2 + '.png';

    console.log(imageAdd1,imageAdd2);

    const image1 = document.getElementById('img1');
    const image2 = document.getElementById('img2');

    image1.src= imageAdd1;
    image2.src= imageAdd2;

    if(random1>random2){
        document.getElementById('result').innerText='Player 1 won';
    }else if(random1<random2){
        document.getElementById('result').innerText='Player 2 won';
    }else{
        document.getElementById('result').innerText='Game Draw';
    }
}