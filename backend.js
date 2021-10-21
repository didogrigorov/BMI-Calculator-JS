            function calculateBMI() {
            // Selecting the input element and get its value 
            var inputWeight = document.getElementById("formGroupExampleInput").value;
            var inputHeight = document.getElementById("formGroupExampleInput2").value;

            // Displaying the value
            var BMI = inputWeight / (inputHeight * 2) * 100;

            //Show the result
            if (document.getElementById("formGroupExampleInput").value == "" && document.getElementById("formGroupExampleInput2").value == "") {
                document.getElementById("showresult").innerHTML = "Enter your data!";
                document.getElementById("showresult").classList.toggle("alert");
                document.getElementById("showresult").classList.toggle("alert-warning");
               // return false;
            } else {
            var result = document.getElementById("showresult").innerHTML = "Your BMI is" + " " + BMI;
            document.getElementById("showresult").classList.remove("alert");
            document.getElementById("showresult").classList.remove("alert-warning");
        }

         if (BMI < 18.5)  {
          
          document.getElementById("advice").innerHTML = "Your conditions is: Underweight";
          document.getElementById("advice").classList.toggle("alert");
          document.getElementById("advice").classList.toggle("alert-primary");
          document.getElementById("advice").classList.remove("alert-danger");
          document.getElementById("advice").classList.remove("alert-success");
          document.getElementById("advice").classList.remove("alert-warning");

         }
    
         if (BMI >= 18.5 && BMI <= 25) {  
          document.getElementById("advice").classList.remove("alert-primary");
          document.getElementById("advice").classList.remove("alert-warning");
          document.getElementById("advice").classList.remove("alert-danger");
          document.getElementById("advice").innerHTML = "Your conditions is: Normal";
          document.getElementById("advice").classList.toggle("alert-success");
         }

         if (BMI >= 25 && BMI <= 30) {
          document.getElementById("advice").classList.remove("alert-primary");
          document.getElementById("advice").classList.remove("alert-success");
          document.getElementById("advice").classList.remove("alert-danger");
          document.getElementById("advice").innerHTML = "Your conditions is: Obese";
          document.getElementById("advice").classList.toggle("alert-warning");
         }
         
         if (BMI > 30) {
          document.getElementById("advice").classList.remove("alert-primary");
          document.getElementById("advice").classList.remove("alert-success");
          document.getElementById("advice").classList.remove("alert-warning");
          document.getElementById("advice").innerHTML = "Your conditions is: Overweight";
          document.getElementById("advice").classList.toggle("alert-danger");

         }
          return false;

        }