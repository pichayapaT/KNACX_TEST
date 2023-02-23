var c_no = 1
const answer = 'ABCD',
      inp_random = document.getElementById('random')

function ChkAnswer(){
    let c_correct = 0,
        c_index = 0
        const arr_inp = inp_random.value.split("")
        arr_inp.forEach((v, i) => {
            let value_match = answer.match(v)
           if(value_match !== null){          
                c_correct++
                if(i === value_match.index){
                    c_index++
                }
           }            
        });

    tbodyAppend(inp_random.value, c_correct, c_index, c_no)
    c_no++
}

inp_random.addEventListener("keyup", function() {
    let result = this.value.toUpperCase()
    this.value = result
});


inp_random.addEventListener("focus", function() {
    this.value = ''
});

function tbodyAppend(text, correct, index, no){
    const tbody = document.getElementById('tbody_incorrect')
    let tr = document.createElement('tr'),
        tdText = document.createElement('td'),
        tdCorrect = document.createElement('td'),
        tdIndex = document.createElement('td'),
        tdNo = document.createElement('td')

    tdText.innerText = text
    tdCorrect.innerText = correct
    tdIndex.innerText = index
    tdNo.innerText = no

    tr.append(tdText, tdCorrect, tdIndex, tdNo)
    if(index === 4){
        sweetAlert()
        tr.classList.add('table-success')
    }
    tbody.append(tr)
       
}

function sweetAlert(){
    Swal.fire({
        title: 'กรุณาใส่ชื่อ',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'ยืนยัน',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
            Swal.fire({
                icon: 'success',
                title: `เรียบร้อย ${name}`,
                showConfirmButton: false,
                timer: 1500
              })
        },
    })
}