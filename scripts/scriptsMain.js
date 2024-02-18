
let seat = document.getElementsByClassName('seat')
for(let i=0;i<seat.length;i++){
    document.getElementsByClassName('seat')[i].addEventListener('click',function(){
        if(document.getElementsByClassName('seat')[i].classList.contains('bg-gray-200')){
            let seatCount = parseInt(document.getElementById('seatCount').innerText)
            if(seatCount<4){
                seat[i].classList.remove('bg-gray-200')
                seat[i].classList.add('bg-[#1DD100]')
                seat[i].classList.add('text-white')
                seatCount++
                document.getElementById('seatCount').innerText=seatCount
                let remainingSeat = parseInt(document.getElementById('remainingSeat').innerText)
                remainingSeat--
                document.getElementById('remainingSeat').innerText = remainingSeat
                document.getElementById(`priceEntry${seatCount}`).classList.remove('hidden')
                // document.getElementById(`priceEntry${seatCount}`).childNodes[0].innerText =seat[i].childNodes[0].innerText
                document.getElementById(`priceEntry${seatCount}`).childNodes[1].innerText = seat[i].childNodes[1].innerText
                let totalPrice = parseInt(document.getElementById('totalPrice').innerText)
                totalPrice+=550
                document.getElementById('totalPrice').innerText = totalPrice
                document.getElementById('grandTotal').innerText = totalPrice
                document.getElementById('nextPageButton').classList.remove('bg-gray-300')
                document.getElementById('nextPageButton').classList.add('bg-[#1DD100]')
                document.getElementById('couponApply').addEventListener('click',function(){
                        let coupon = document.getElementById('couponCodeEntry').value
                        if(coupon==='NEW15'  && seatCount===4){
                            let grandTotal = totalPrice*0.85
                            document.getElementById('grandTotal').innerText = grandTotal
                            document.getElementById('discountedPrice').parentElement.parentElement.classList.remove('hidden')
                            
                            document.getElementById('discountedPrice').innerText = totalPrice-grandTotal
                            document.getElementById('couponApply').parentElement.classList.add('hidden')
                        }
                        else if(coupon === 'Couple 20' && seatCount===4){
                            let grandTotal = totalPrice*0.80
                            document.getElementById('grandTotal').innerText = grandTotal
                            document.getElementById('discountedPrice').parentElement.parentElement.classList.remove('hidden')
                            
                            document.getElementById('discountedPrice').innerText = totalPrice-grandTotal
                            document.getElementById('couponApply').parentElement.classList.add('hidden')
                        }
                        else if(seatCount===4){
                            alert('Invalid Coupon Code')
                        }
                })
                document.getElementById('nextPageButton').addEventListener('click', function(){
                    let phoneNumber = (document.getElementById('phoneNumber').value).length
                    if(phoneNumber>0){
                        document.getElementById('mainPageHeader').classList.add('hidden')
                    document.getElementById('mainPageSections').classList.add('hidden')
                    document.getElementById('secondPage').classList.remove('hidden')
                    }
        
        
                })
            }
            else{
                alert('you cannot buy more than 4 tickets at a time')
            }
           
        }
    })
}


