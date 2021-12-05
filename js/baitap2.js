/**
 * Tính diện tích, chu vi hình chữ nhật
 * 
 * Khối 1: Dữ liệu cung cấp
 * Input
 * chieuDai
 * chieuRong
 * 
 * khối 2
 * b1: khai báo biến và gán giá trị
 * chieuDai
 * chieuRong
 * 
 * b2:Lập công thức tính diện tích
 * dienTich = chieuDai * chieuRong
 * 
 * b3: lập công thức tính chu vi
 * chuVi = (chieuDai + chieuRong)  * 2
 * b4 suát kết quả 
 * document.getElementById("txtcontent2").innerHTML = "Diện Tích hình chữ nhật là : " + dienTich;
 * document.getElementById("txtcontent22").innerHTML = "Chu Vi hình chữ nhật là : " + chuVi;
 * 
 * Khối 3: Kết quả cần đạt được
 * output
 *  dienTich
 * chuVi
 * 
 */
function tinhDtCv(){
    var chieuDai = Number(document.getElementById("chieuD").value);
    var chieuRong = Number(document.getElementById("chieuR").value);
    
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
   console.log(chuVi);
   console.log(dienTich);
    document.getElementById("txtcontent2").innerHTML = dienTich;
    document.getElementById("txtcontent2").style.color = "white";
    document.getElementById("txtcontent22").innerHTML = chuVi;
    document.getElementById("txtcontent22").style.color = "white";
}
