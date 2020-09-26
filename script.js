
$(document).ready(function () {

        //Variabledeclaration
        var hour = $(".time-block");
        var today = moment();
        var currentTime = today.format("H");
        console.log(currentTime);
        
        
             
        //console.log(description);



        // Get Current Time
        function timeUpdate() {

                //var currentTime = today.format("H");
                //console.log(currentTime);

        };

        //Intervall for Time being updated every sec
        setInterval(timeUpdate, 1000);


        //Display Date 
        function displayDate() {
                var displayDate = document.getElementById("currentDay");
                var currentDate = today.format('dddd') + today.format(", Do MMM YY");
                displayDate.textContent = currentDate;
        }

        displayDate();


        //Compare currentTime and RowID using parseInt to convert datatype 

        var rows = document.querySelectorAll(".row")
        //var description = document.querySelectorAll (".description")
        //console.log(rows);
        for (let index = 0; index < rows.length; index++) {
                const currentRow = rows[index];
                var RowID = currentRow.getAttribute ("id");
                
                //console.log(RowID);
 
                if (RowID === currentTime) {


                        $(".description").addClass("present");
                        
                        
                }

                else if (RowID > currentTime) {
                        $(".description").addClass("present");
                        
                }

                else {
                        $(".description").addClass("present");
                        
                }





        }


        //Store UserInput and Time in local storage 




});



