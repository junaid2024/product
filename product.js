


function add() {
    const product = {
        id: document.getElementById("pid").value,
        pname: document.getElementById("pname").value,
        catg: document.getElementById("pcatagory").value,
        description: document.getElementById("descrip").value,
        price: document.getElementById("price").value,
        review: document.getElementById("review").value
    };

    if (product.id in localStorage) {
        alert("Already added");
        document.getElementById("myForm").reset(); 
        

    } else {
        localStorage.setItem(product.id, JSON.stringify(product));
        console.log(product);
        alert('Added successfully');
        document.getElementById("myForm").reset();
    }
}





function search() {
    let searchid = document.getElementById('checkid').value;
    var search = localStorage.getItem(searchid);
    
    if (search) {
        var getdetails = JSON.parse(search);

        console.log(search);
        card.innerHTML = `<div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Product Name: ${getdetails.pname}</li>
                <li class="list-group-item">Category: ${getdetails.catg}</li>
                <li class="list-group-item">Description: ${getdetails.description}</li>
                <li class="list-group-item">Price: ${getdetails.price}</li>
                <li class="list-group-item">Review: ${getdetails.review}</li>
            </ul>
        </div>`;
    } else {
        alert('Product not found');
    }
}

  