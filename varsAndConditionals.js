/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if(jonSnowAttack > jamieLannisterAttack)
{
    console.log('Jon Snow has the greater attack strength');
} else if(jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has the greater attack strength");
} else {
    console.log("This fight is evenly matched!");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if(jonSnowHealth < jamieLannisterAttack)
{
    console.log('Jon Snow has been slain!');   
}
else
{
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is now ${jonSnowHealth}`);
}

let healthKit = 50;
jonSnowHealth += healthKit;
if(jonSnowHealth > 100)
{
    jonSnowHealth = 100;
}

let coinLandsHeads = false;
if(!coinLandsHeads)
{
    console.log('Jamie allows Jon to run away');
}
else
{
    console.log('Jamie aims for Jon\'s head');
}

for(let i = 0; i < 5; i++)
{
    jonSnowHealth -= jamieLannisterAttack;
    if(jonSnowHealth <= 0)
    {
        console.log(`Jon Snow has died after Attack #${i + 1}`);
        break;
    }
    else
    {
        console.log(`Jon Snow's Health: ${jonSnowHealth}`);
    }
}