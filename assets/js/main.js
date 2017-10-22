getJSON(
    `https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime`,
    function(data) {
        console.log(data);
        var parkingstate = document.querySelector(".parkingstate");
        var tempStr = '';
    
        data.forEach(function(i){
            tempStr += 
            `<div class="parkingstate">
                <div class="title"><div class="parking__name">${i.name}</div></div>
                <div class="description"><span class="parking__address">${i.address}</span> <br>
                <span class="parking__contactinfo">${i.contactInfo}</span> <br>`

                var totalCapacity = i.parkingStatus.totalCapacity;
                var availableCapacity = i.parkingStatus.availableCapacity;

                var helft = totalCapacity / 2;
                var twintig = totalCapacity / 5;

                if (availableCapacity >= helft) {
                    tempStr += `<div class="availableCapacityGreen"><strong>Available places: ${i.parkingStatus.availableCapacity}</strong></div></div>`
                } 
                else if (availableCapacity < helft && availableCapacity >= twintig) {
                    tempStr += `<div class="availableCapacityOrange"><strong>Available places: ${i.parkingStatus.availableCapacity}</strong></div></div>`
                } 
                else {
                    tempStr += `<div class="availableCapacityRed"><strong>Available places: ${i.parkingStatus.availableCapacity}</strong></div></div>`
                };

                tempStr += `</div>`
        });

        parkingstate.innerHTML = tempStr;

    },
    function(error) {
        console.log(error);
    }
), true;