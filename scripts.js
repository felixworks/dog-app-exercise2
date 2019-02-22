
// Exercise 2
function getDogs(userInput) {
    let request = `https://dog.ceo/api/breeds/image/random/${userInput}`
    fetch(request)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            displayResults(responseJson);
        })
        .catch(error => alert('Something went wrong. Try again later.')); 
    }
    
    function displayResults(responseJson) {
        console.log(responseJson);
        //replace the existing image with the new one
        let htmlString = '';
        for(let i=0; i<= responseJson.message.length; i++){
            let temp=`<img src="${responseJson.message[i]}" class="results-div"><br>`
            htmlString+=temp
        }
        console.log('htmlString', htmlString);
        $('.results-div').html(htmlString)
            //display the results section
            // $('.results-div');
        }
        
        function buttonHandler() {
            $('form').submit(event => {
                event.preventDefault();
                // let dogPictureDisplay = $('#dogInput').val();
                // console.log(dogPictureDisplay);
                getDogs($('#dogInput').val());
            });
        }

$(buttonHandler());

