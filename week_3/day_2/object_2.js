[
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
  ]
  
for(var i=0; i<data.length; i++){
    var grade = data[i].grade;
    //var highest_name;
    //var total;
    var student_array = data[i].students
    
for(var j=0; j<student_array.length; j++){
    var student_obj = students_array[j]
    var s_name = student_obj.name;
    var s_marks = student_obj.marks;
    var total = 0;

    for(var k=0; k<s_marks.length; k++){
        total = total + s+marks[k]
    }
    if(total > highest_marks){
        highest_marks = total;
        highest_index = j;
    } 

}
var highest_name = students_array [highest_index].name
console.log(grade+"-"+highest_name+"-"+highest_marks)    

}
