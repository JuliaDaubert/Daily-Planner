
$(document).ready(function () {

        //Variabledeclaration
        var hour = $(".time-block");
        var today = moment();
        var currentTime = today.format("H");
        console.log(currentTime);


        // Get Current Time
        function timeUpdate() {
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
                var currentRow = rows[index];
                var RowID = currentRow.getAttribute("id");
                console.log(window.localStorage.getItem(RowID));
                var ID = "#"+ RowID + " textarea";
                $(ID).val (window.localStorage.getItem(RowID));
                //console.log(RowID);


                if (RowID == currentTime) {
                      
                        console.log(ID);
                        $(ID).addClass("present");
                }
                else if (RowID <  currentTime) {
                      
                        console.log(ID);
                        $(ID).addClass("past");
                }
                else  {
                      
                        console.log(ID);
                        $(ID).addClass("future");
                }







        }


        //Store UserInput and Time in local storage 

        $(".saveBtn").click( function(e){

        console.log(e.target.id);

        var ID = "#"+ e.target.id + " textarea"

        console.log(ID);

        var t = $(ID).val();

        console.log(t);

        
        window.localStorage.setItem(e.target.id, t);
        console.log(window.localStorage);
 })


       $(".clearBtn").on ("click", function() {
               localStorage.clear();
               console.log("clear");
               window.location.reload();

       });



});



