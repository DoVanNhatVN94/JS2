/**
 * Quy đổi tiền từ USD sang VND
 * 
 * Khối 1: Dữ liệu cung cấp
 * Input
 * usd (tiền USD)
 * gtqd (giá trị quy đổi)
 * Khối 2: Các bước xử lý
 * b1: khai báo biến và gán giá trị
 * usd 
 * 
 * b2:Lập công thức tính cạnh huyền
 * qrt = usd * gtqd
 * 
 *b3 fomat để dễ nhìn 
 * new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(qrt))+" VND ")
 * B4 suất kết quả ra màn hình document.getElementById("txtcontent1").innerHTML
 * 
 * Khối 3: Kết quả cần đạt được
 * output
 * số tiền sau khi quy đổi
 * 
 * 2 USD => 47.000 VND
 * 
 * 
 */
function qrtUsd() {
    var usd = Number(document.getElementById("usd").value);
    var gtqd = 23500;
    console.log(typeof(usd));

    var qrt = usd * gtqd;
    document.getElementById("txtcontent1").innerHTML = new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(qrt)+" VND ";
    document.getElementById("txtcontent1").style.color = "white";
}