

////Repeat the challenge
//let pageTitle ="ElZERO" , pagDesc="Elzero web school", pagedate="2/2/2025";
//let cards=`
//<div>
//<h3>hello${pageTitle} </h3>
//<p>${pagDesc}</p>
//<span>${pagedate}</span>
//</div>`;

//document.write(cards);

/* 
document.write(Math.round(99.6),"<br>");

document.write(Math.ceil(99.2),"<br>");

document.write(Math.floor(99.1),"<br>");

document.write(Math.trunc(99.66),"<br>");

document.write(data);
var data =500;

document.write(data);
let dataa =500;


document.write("<hr>");

let a=1_00;

let b =2_00.5;

let c=1e2;

let d=2.4;


document.write(Math.min(a,b,c,d));
document.write("<hr>");


document.write(Math.floor(d));

document.write("<hr>");


document.write(Math.trunc(d));
document.write("<br>");

document.write(Math.floor(d));
document.write("<br>");

document.write(Math.round(d));
document.write("<br>");
document.write(d.toFixed());


document.write("<hr>");
document.write(a * c);
document.write("<br>");


document.write(Math.pow(b,d));

document.write("<br>");
*/
/*
let namex="hashimaburomeya";

document.write(namex.toUpperCase());

document.write("<br>");

document.write(namex.toLocaleLowerCase());


document.write(namex.trim().charAt(2).toLocaleUpperCase());
*/


/*
let discount = 50;

let isdisscount=true;

let price=100;

let contry="jordan";

let postalcode="0000";


if(isdisscount=== true)
{
    price +=contry+postalcode;
}

document.writeln(price);
*/

/*
let userName = "Elzero";
document.writeln(userName.charAt(0).toLowerCase()); // e
document.writeln(userName.split("lzero")); // e
document.writeln(userName.substring(0,1).toLowerCase()); // e
document.writeln(userName.slice("E",1).toLowerCase().repeat(3)); // eee
document.writeln(userName.substr(0,1).toLowerCase()); // e
*/

let age=10;


/*
age < 10 
? document.writeln(age) 
: age>=10 && age<=40 
? document.writeln("10 to 40") 
:age>40 
? document.writeln(" > 40")
:document.writeln("unknown");
*/

/*
    let st = "Elzero Web School";

    if ((st.length*2).toString()=== "34") {
      console.log("Good");
    }
    
    // W Position May Change
    if (st[st.indexOf("W")].toLowerCase() === "w") {
      console.log("Good");
    }
    
    if (st.length !== "string") {
      console.log("Good");
    }
    
    if (typeof (st.length) === "number") {
      console.log("Good");
    }
    
    if (st.slice(0,6)+st.slice(0,6) === "ElzeroElzero") {
      console.log("Good");
    }
      */


/*
let job ="managr";
let price=0;

switch(job){

case "manager":
price=8000;
document.write(price)
break;
case "developer":
case "disiner":
price=7000;
document.writeln(price) 
break;
case "it":
case "support":
price=6000;
document.writeln(price) ;
}
*/




let job = "Manager";
let salary = 0;
switch(job){
    case "Manager" :
        salary=8000;
        break;
    case "IT" :
    case "Support":
        salary=6000;
        break;
    case "Developer" :
    case "Designer" :
        salary=7000;
        break;
    default :
        salary=4000;
}
document.writeln(salary);



let friendarray =["hashim","mohammad","bahaa"];

for(i=0;i<=friendarray.length-1;i++){

document.write(friendarray[i]);


}

