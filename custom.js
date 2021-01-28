function handleProductChange(product, isIncrease) {
  const product_count = document.getElementById(product + "_count");
  const product_counted = parseInt(product_count.value);
  //   const total_phone_count = phone_counted - 1;
  let total_product_count = product_counted;
  if (isIncrease == true) {
    total_product_count = product_counted + 1;
  }
  if (isIncrease == false && product_counted > 0) {
    total_product_count = product_counted - 1;
  }
  product_count.value = total_product_count;

  //   const product_cost = total_product_count * 1219;
  let product_cost = 0;
  if (product == "phone") {
    product_cost = total_product_count * 1219;
  }
  if (product == "case") {
    product_cost = total_product_count * 59;
  }
  const product_price = document.getElementById(product + "_price");
  product_price.innerText = "$" + product_cost;
  subTotal();
}

function subTotal() {
  const phoneCount = document.getElementById("phone_count");
  const phoneSubTotal = parseInt(phoneCount.value);
  const caseCount = document.getElementById("case_count");
  const caseSubTotal = parseInt(caseCount.value);

  const subTotal = phoneSubTotal * 1219 + caseSubTotal * 59;
  document.getElementById("productSubTotal").innerText = "$" + subTotal;

  const tax = subTotal * 0.1;
  document.getElementById("taxCount").innerText = "$" + Math.round(tax);

  const grandTotal = subTotal + tax;
  document.getElementById("grandTotal").innerText =
    "$" + Math.round(grandTotal);
}

// function handleProductChange(isIncrease) {
//   const phone_count = document.getElementById("phone_count");
//   const phone_counted = parseInt(phone_count.value);
//   //   const total_phone_count = phone_counted - 1;
//   let total_phone_count = phone_counted;
//   if (isIncrease == true) {
//     total_phone_count = phone_counted + 1;
//   }
//   if (isIncrease == false && phone_counted > 0) {
//     total_phone_count = phone_counted - 1;
//   }
//   phone_count.value = total_phone_count;

//   const phone_cost = total_phone_count * 1219;
//   const phone_price = document.getElementById("phone_price");
//   phone_price.innerText = "$" + phone_cost;
// }

// // Case related

// function handleCaseChange(isIncrease) {
//   const case_count = document.getElementById("case_count");
//   const case_counted = parseInt(case_count.value);
//   //   const total_case_count = case_counted - 1;
//   let total_case_count = case_counted;
//   if (isIncrease == true) {
//     total_case_count = case_counted + 1;
//   }

//   if (isIncrease == false && case_counted > 0) {
//     total_case_count = case_counted - 1;
//   }
//   case_count.value = total_case_count;

//   const case_cost = total_case_count * 59;
//   const case_price = document.getElementById("case_price");
//   case_price.innerText = "$" + case_cost;
// }
