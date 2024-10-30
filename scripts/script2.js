let student = prompt("Ім'я студента:")
document.write("<p>")
document.write(student)
document.write("</p>") 

while(student != null){
    let student = prompt("Ім'я студента:")
    if (student != null){
        document.write("<p>")
        document.write(student)
        document.write("</p>") 
    }
}
document.write("</body>")
document.write("</html>")