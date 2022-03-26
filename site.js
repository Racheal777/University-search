
//fetch api


const uni = "http://universities.hipolabs.com/search?country=United+States"


const form = document.querySelector("form");
const search = document.querySelector("#search");
const table = document.querySelector(".table");
const searched = document.querySelector(".tabless");


let data = []
let tables = []

//hoisting
school();
//fetching data
async function school() {
  const response = await fetch(uni);

  data = await response.json();
  console.log(data);

  if (data) {
    // console.log(data.slice(1,21))
    let school = data;

    // console.log(school.slice(0, 31));
    school.slice(0, 20).forEach((element) => {
      tables = document.createElement("table");
      tables.classList.add("names");

      tables.innerHTML = `
      <tbody>
      <tr>
           <td class="namez">${element.name}</td>

           <td class = "link"> <a href="${element.web_pages}" target = "_blank">${element.web_pages}</a></td>     
       </tr> 
   </tbody>   
    `;
      
      table.appendChild(tables);
    });
  }

  console.log(tables)
  //grabbing the table

  //function to show words in a table
  //declaring a function to display the movies using .forEach method
  //since the query data is an array, also adding html to align the items

  //form

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = search.value;
    console.log(val);

    table.textContent = ''
    //filter the school array
    //check if the input is in any of the name
    let filterData = [...new Set(data)]
    console.log(filterData);


    const filteredArray = data.filter((arr, i) => {
        
      // console.log(arr.name.includes(val))
      return arr.name.includes(val)
       
    });

    let existedName = filteredArray;
    //displaying each of the data
    console.log(existedName);
    console.log(filteredArray);

    const heading = document.createElement('div')

    //this is heading, appending it to table because table is now empty
    heading.innerHTML = `
    <div class="table-head">
        <table>
            <caption>Universities and Collages in US</caption>
            <thead>
                <tr>
                    <th class="name">Name</th>
                    <th>Website</th>
                </tr>
            </thead>   
        </table>
        
    </div>

    `
     table.appendChild(heading)
    existedName.forEach((list) => {
        
    //   const searchInput = document.createElement("table");
    //   searchInput.classList.add("names");
      // const name = document.createElement('th')
      // console.log(searchInput.innerHTML = `${list.name}`)

      // table.innerHTML = ""
      
      tables = document.createElement("table");
      tables.classList.add("names");
      tables.innerHTML = `
        
        <tbody>
           <tr>
                <td class="namez">${list.name}</td>

                <td class = "link"> <a href="${list.web_pages}" target = "_blank">${list.web_pages}</a></td>     
            </tr> 
        </tbody>   
    `;

      // console.log(searchInput)
      // table.innerHTML = ''

      table.appendChild(tables);
      search.value = ''
      // table.replaceWith(searchInput)

    //   table.textContent = "";
    //   console.log(table);
    //   console.log(tables);
        
      // if(val)
      // table.appendChild(searchInput)
    });
  });
}
