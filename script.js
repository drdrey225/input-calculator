function add() {
   var m1 = Number(first.value) + Number(second.value) 
   display.innerHTML = m1
   if (m1 == "") {
      display.innerHTML = ""
   }
}

function subtraction() {
   var m2 = first.value - second.value
   display.innerHTML = m2
   if (m2 == "") {
      display.innerHTML = ""
   }
}

function division() {
   var m3 = first.value / second.value
   display.innerHTML = m3
   if (m3 == "") {
      display.innerHTML = ""
   }
}

function multiplication() {
   var m4 = first.value * second.value
   display.innerHTML = m4
   if (m4 == "") {
      display.innerHTML = ""
   }
}