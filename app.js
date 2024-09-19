const roundtripRadioButton = document.getElementById('roundtrip')
const onewayRadioButton = document.getElementById('oneway')
const returnDateInput = document.getElementById('return-date-input')
const submitButton = document.getElementById('submit-button')
let isRoundTrip = true

roundtripRadioButton.addEventListener('change', ()=>{
    returnDateInput.removeAttribute('disabled')
})

onewayRadioButton.addEventListener('change', ()=>{
    returnDateInput.setAttribute('disabled', 'true')

})

submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    if(isRoundTrip){
        window.location.replace('./roundtrip.html')
    }else{
        window.location.replace('./onewaytrip.html')
    }
})

