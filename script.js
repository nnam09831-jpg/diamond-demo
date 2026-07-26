let selectedDiamond = 100;
let selectedPrice = 20000;

const packages = document.querySelectorAll(".package");

packages.forEach(pkg => {

  pkg.addEventListener("click", () => {

    packages.forEach(p => {
      p.classList.remove("selected");
    });

    pkg.classList.add("selected");

    selectedDiamond = pkg.dataset.diamond;
    selectedPrice = pkg.dataset.price;

    document.getElementById("showDiamond").innerText =
      "💎 " + Number(selectedDiamond).toLocaleString("vi-VN");

    document.getElementById("showPrice").innerText =
      Number(selectedPrice).toLocaleString("vi-VN") + "đ";

  });

});

document.getElementById("uid").addEventListener("input", function() {

  document.getElementById("showUid").innerText =
    this.value || "---";

});

function createOrder() {

  const uid = document.getElementById("uid").value.trim();

  if (!uid) {
    alert("Vui lòng nhập ID game!");
    return;
  }

  const payment =
    document.getElementById("payment").value;

  const orders =
    JSON.parse(localStorage.getItem("demoOrders") || "[]");

  orders.push({

    uid: uid,

    diamond: selectedDiamond,

    price: selectedPrice,

    payment: payment,

    status: "Chờ xử lý",

    time: new Date().toLocaleString("vi-VN")

  });

  localStorage.setItem(
    "demoOrders",
    JSON.stringify(orders)
  );

  alert(
    "Đã tạo đơn demo thành công!\n\n" +
    "UID: " + uid + "\n" +
    "Kim cương: " + selectedDiamond
  );

}

function scrollToTopup() {

  document
    .querySelector(".content")
    .scrollIntoView({
      behavior: "smooth"
    });

                                                    }
