const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
let price = document.querySelectorAll('.price');

let total=0;

price.forEach((pr)=>{total+=parseInt(pr.textContent)});

	let table =document.querySelector("table");

	table.innerHTML+=`
	<tr>
	<td>${total}</td>
	</tr>
	`;
};

getSumBtn.addEventListener("click", getSum);

