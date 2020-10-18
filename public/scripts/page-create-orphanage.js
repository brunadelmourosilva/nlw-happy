//create map
const map = L.map('mapid').setView([-22.2768479,-46.3724058], 15) //ouro fino MG

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})


//create and add marker
let marker;

map.on('click', (event) => {

    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

// photos upload
function addPhotoField() {
    //get photos container #Images
    const container = document.querySelector('#images');
    //get container to duplicate #Images .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //perform clone last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //area void
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //clear area
    input.value = ""
    
    //added clone in container #Images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //clear value
        span.parentNode.children[0].value = ""
        return 
    }

    //delete area
    span.parentNode.remove()
}

//select yes or no
function toggleSelect(event) {

    //remove the class .active(buttons)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    
    //insert the class .active on clicked button
    const button = event.currentTarget //get clicked button
    button.classList.add('active')

    //update input hidden with selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verify yes or no
    input.value = button.dataset.value
}

function validate(event) {

    //validar se lat e lng estao preenchidos
    //event.preventDefault()
    //alert('Selecione um ponto no mapa')
}
