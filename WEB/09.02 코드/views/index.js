const url = "http://localhost:8080/api/logs"

const logTableBody = document.querySelector(".log-table-body")

const inputData = (e, idx) => {
  return `<tr>
  <th scope="row">${idx}</th>
  <td>
    <div class="alert alert-primary" role="alert">
      ${e.message}
    </div>
  </td>
  <td>${e.level}</td>
  <td>${e.timestamp}</td>
  </tr>`
}

const getData = async () => {
  try{
    await axios.post(url)
    const response = await axios.get(url)
    if(response.data){
      let trTags = "";
      response.data.map((e,idx) => {
        let trTag = inputData(e,idx)
        trTags += trTag;
      })
      logTableBody.innerHTML = trTags
    }
  } catch(error) {
    console.log(error)
  }

}

getData()