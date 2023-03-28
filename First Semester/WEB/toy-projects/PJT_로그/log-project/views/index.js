const url = "http://localhost:8080/api/logs"

const logTableBody = document.querySelector(".log-table-body")

const inputData = (e, index) => {
  return `<tr>
        <th scope="row">${index}</th>
        <td>
          <div class="alert alert-primary" role="alert">
            ${e.message}
          </div>
        </td>
        <td>${e.level}</td>
        <td>${e.timestamp}</td>
      </tr>`
}

const changeColor = () => {
  logTableBody.querySelectorAll('.alert').forEach(e => {
    if(!e.innerHTML.includes("통신")) {
      e.classList.remove('alert-primary')
    }
    if (e.innerHTML.includes('경고')){
      e.classList.add('alert-warning')
    }
    if (e.innerHTML.includes('정보')){
      e.classList.add('alert-info')
    }
    if (e.innerHTML.includes('에러')){
      e.classList.add('alert-danger')
    }
    if (e.innerHTML.includes('디버그')){
      e.classList.add('alert-dark')
    }
  })
}

const getData = async () => {
  try{
    await axios.post(url)
    const response = await axios.get(url)

    let tryTags = "";

    if(response.data){
      response.data.map((e,index) => {
        let tryTag = inputData(e,index);
        tryTags += tryTag;
      })

      logTableBody.innerHTML = tryTags
      changeColor();
    }
  } catch(error) {
    console.log(error)
  }

}

getData()