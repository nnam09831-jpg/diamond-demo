let selectedPackage = null;

const packages = document.querySelectorAll(".package");

packages.forEach(pkg => {
  pkg.addEventListener("click", () => {
    packages.forEach(p => p.classList.remove("active"));

    pkg.classList.add("active");

    selectedPackage = {
      diamond: pkg.dataset.diamond,
      price: pkg.dataset.price
    };
  });
});

function createOrder() {
  const uid = document.getElementById("uid").value.trim();
  const name = document.getElementById("playerName").value.trim();
  const payment = document.getElementById("payment").value;
  const result = document.getElementById("result");

  if (!uid || !name) {
    result.innerHTML = `
      <div class="notice">
        ⚠️ Vui lòng nhập UID và tên người chơi.
      </div>
    `;
    return;
  }

  if (!selectedPackage) {
    result.innerHTML = `
      <div class="notice">
        ⚠️ Vui lòng chọn gói kim cương.
      </div>
    `;
    return;
  }

  if (!payment) {
    result.innerHTML = `
      <div class="notice">
        ⚠️ Vui lòng chọn phương thức thanh toán.
      </div>
    `;
    return;
  }

  const order = {
    uid: uid,
    name: name,
    diamond: selectedPackage.diamond,
    price: selectedPackage.price,
    payment: payment,
    status: "Chờ xử lý",
    time: new Date().toLocaleString("vi-VN")
  };

  const orders = JSON.parse(
    localStorage.getItem("demoOrders") || "[]"
  );

  orders.push(order);

  localStorage.setItem(
    "demoOrders",
    JSON.stringify(orders)
  );

  result.innerHTML = `
    <div class="success">
      <h3>✅ Tạo đơn demo thành công!</h3>
      <p>UID: ${uid}</p>
      <p>Gói: ${selectedPackage.diamond} KC</p>
      <p>Giá: ${Number(selectedPackage.price).toLocaleString("vi-VN")}đ</p>
      <p>Trạng thái: Chờ xử lý</p>
    </div>
  `;
}
