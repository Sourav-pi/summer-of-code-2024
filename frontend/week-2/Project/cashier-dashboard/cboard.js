const bill = document.getElementById("bill-table");
const sku = document.getElementById("SKU");
const qty = document.getElementById("qty");
const price = document.getElementById("ppq");
const total = document.getElementById("total");
const ProductName = document.getElementById("ProductName");
function addRow(){
    console.log(sku.value, ProductName.value, qty.value, price.value, total.value);
    bill.innerHTML += `<div class="row bg-light-subtle" id="table-lables">   
                            <div class="col">
                                <p class="text-black">${sku.value}</p>
                            </div>
                            <div class="col">
                                <p class="text-black">${ProductName.value}</p>
                            </div>
                            <div class="col">
                                <p class="text-black">${qty.value}</p>
                            </div>
                            <div class="col">
                                <p class="text-black">${price.value}</p>
                            </div>
                            <div class="col">
                                <p class="text-black">${total.value}</p>
                            </div>
                        </div>`;
    sku.value = "";
    ProductName.value = "";
    qty.value = "";
    price.value = "";
    total.value = "";
}


// Form Auto Fill Name and Total
let debounceTimer1, debounceTimer2, debounceTimer3;
const delayMs = 500;


function searchProductName() {
    if(sku.value == ""){
        ProductName.value = "";
    }
    else{
        ProductName.value = "Product Name";
    }
}

function calculateTotal(){
    if(qty.value == "" || price.value == ""){
        total.value = "";
    }
    else{
        total.value = qty.value * price.value;
    }
}

sku.addEventListener('input', function() {
    clearTimeout(debounceTimer1);
    debounceTimer1 = setTimeout(searchProductName, delayMs);
});

qty.addEventListener('input', function() {
    clearTimeout(debounceTimer2);
    debounceTimer2 = setTimeout(calculateTotal, delayMs);
});

price.addEventListener('input', function() {
    clearTimeout(debounceTimer3);
    debounceTimer3 = setTimeout(calculateTotal, delayMs);
});
