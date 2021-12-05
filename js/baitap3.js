/**
 * Tính tổng 2 ký só 
 * 
 * Khối 1: Dữ liệu cung cấp
 * Input
 * num (số có 2 ký số)
 * 
 * khối 2
 * b1: khai báo biến và gán giá trị
 * num
 * 
 * b2:Lập công thức tính ký sô hàng chục
 * ten = num/10;
 * Math.floor(num/10);
 * 
 * 
 * b3: lập công thức tính ký số hàng đơn vị
 * unit = num%10;
 * Math.floor(num%10);
 * 
 * b4: lập công thức tính tổng
 * sum = ten + unit
 * 
 * b5 Suất kết quả document.getElementById("txtcontent3").innerHTML = "Tổng của 2 Ký số là = " + sum;
 * 
 * Khối 3: Kết quả cần đạt được
 *44 => tổng là 4 + 4 = 8
 * 
 */
function tinhTongNum() {
    var num = Number(document.getElementById("inpNum").value);
    var ten = Math.floor(num / 10);
    var unit = Math.floor(num % 10);
    var sum = ten + unit;
    document.getElementById("txtcontent3").innerHTML = sum;
    document.getElementById("txtcontent3").style.color = "white";
}
