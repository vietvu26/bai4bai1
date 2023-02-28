const gradesInput = prompt("Nhập vào các điểm cách nhau bởi dấu phẩy:"); 
const gradesArray = gradesInput.split(",").map(Number); 
const sum = gradesArray.reduce((acc, curr) => acc + curr, 0); 
const average = sum / gradesArray.length; 
let grade;
if (average >= 9.1) {
  grade = "A";
} else if (average >= 8.1) {
  grade = "B";
} else if (average >= 7.1) {
  grade = "C";
} else {
  grade = "D";
}
console.log("Điểm trung bình:", average.toFixed(2)); 
console.log("Xếp loại:", grade + " grade"); 