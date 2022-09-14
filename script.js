fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price").then((data)=>{

	//console.log(data);
	return data.json();
}).then((objectData)=>{
	console.log(objectData.products[0].title);
	let tableData="";
	objectData.products.map((values)=>{
		tableData+=`<tr>
		<td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.price}</td>
    
      </tr>`;
	});
	document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
	console.log(err);
})