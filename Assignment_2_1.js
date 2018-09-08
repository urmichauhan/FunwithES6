//1) Convert the following two functions written in simple Javascript to ES6. Try and use as many features of ES6 as you can.

//Block scope -let ->
let users = [
{
	'email':'some1@gmail.com',
	'password':'some1',
	'fname':'grace',
	'lname':'hopper'
},
{
	'email':'some2@gmail.com',
	'password':'some2',
	'fname':'leah',
	'lname':'culver'
},
{
	'email':'some3@gmail.com',
	'password':'some3',
	'fname':'rebecca',
	'lname':'heineman',
}
];
//checklogin function      arrow function->  , default parameters->
let checklogin = (email, password, allusers=users)=>
{
	let isuserfound = false;
	let passwordcorrect = false;

	for(currentuser in allusers)
	{
		console.log(currentuser);
		if(allusers[currentuser]['email'] == email)
		{
			if(allusers[currentuser]['password'] == password)
			{
				isuserfound=true;
				passwordcorrect=true;
				break
			}
			else
			{
				isuserfound=true;
				passwordcorrect=false;
				break
			}
		}
		else
		{
			isuserfound=false;
		}
	}
	if(isuserfound == true && passwordcorrect == true)
	{
		alert(`You are logged in..!`);                
	}
	else if(isuserfound == true && passwordcorrect == false)
	{
		alert(`You have provided incorrect password`);
	}
	else
	{
		alert(`No user with this email found..`);
	}
	alert(`All Users :`);
	for(k=0;k<allusers.length;k++)
	{
		let f=allusers[k].fname;       
		let l=allusers[k].lname;
		let obj =
		{
						//Object Literal->
			f,
			l,	
			objfun()
			{           //template litrals->
				return `my name is ${f} and\n my surname is ${l}\nI'm the ${k+1} user \${of edWisor}`;			 
			}
		}
		alert(obj.objfun());
	}
	alert(`See All details of all users in console:`);
	//For of loop->
	for(let j of allusers)
	{
		console.log(j);
	}	
}

//SPREAD parameters->
let a = [100,200,500,900], b = [63,41,78], c = [5,55,555], d = [11,22,33,44], e = [25,26,27,28,29];
let num1=[...a,...b,...c], num2=[...d,...e];
let num3=[...num1,...num2]

//bubble sort function
//REST parameters->
let bubble_sort = (...a)=>
{
	let swap;
	let n=a.length-1;
	let x=a;
	do{
		swap=false;
		for(let i=0;i<n;i++)
		{
			if(x[i]<x[i+1])
			{
				let temp = x[i];
				x[i] = x[i+1];
				x[i+1] = temp;
				swap = true;
			}
			n--;
		}
	}while(swap)
	return x;
}
alert(`Click ok to check : \nLOGIN`);
//Block scope -Const ->
const email = prompt(`Enter Your Email:-`);
const password = prompt(`Enter Your Password:-`);
//Call the checklogin
checklogin(email,password,users);

alert(`Random values : ${num3}`);         
alert(`Here is a Sortlist of Values!`);
//Call the bubble_sort
alert(bubble_sort(num1,num2));        