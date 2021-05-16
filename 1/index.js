var Marks = prompt("Enter  your Marks");

if(Marks > 100 || Marks < 0)
console.log("invalid");

 else if (Marks >= 80 && Marks<=100)

    console.log("A+");

else if (Marks >= 70 && Marks<=79)

    console.log("A");
else if (Marks >= 60 && Marks<=69)

    console.log("A-");
else if (Marks >= 50 && Marks<=59)

    console.log("B");
else if (Marks >= 40 && Marks<=49)

    console.log("C");
else if (Marks >= 33 && Marks<=39)

    console.log("D");

else
    console.log("Fail");