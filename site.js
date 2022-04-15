
//fetch api

// const all = "http://universities.hipolabs.com/search?name"
const uni = "http://universities.hipolabs.com/search?country=United+States"


const form = document.querySelector("form");
const search = document.querySelector("#search");
const table = document.querySelector(".table");
const searched = document.querySelector(".tabless");



let data = []
let tables = []
let heading = []

//hoisting
school();
//fetching data
async function school() {
  const response = await fetch(uni, {
    method: "GET",
    mode: 'cors',
    origin: 'http://universities.hipolabs.com/search?country=United+States',
    Headers: "Access-Control-Allow-Origin"  ,
    
    // headers: {
    //   "Access-Control-Allow-Origin" : "*",
     
    //   'Access-Control-Allow-Headers':'http://universities.hipolabs.com/search?country=United+States',
      
    // },
    // proxy_pass: "http://127.0.0.1:8000"
    
    
  });

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
    // let filterData = [...new Set(data)]
    // console.log(filterData);
    let filteredArray = []

    filteredArray = data.filter(( arr, i ) => {
      
        
         if(arr.name.includes(val) ){
          return arr.name

         }


        //  console.log(  'school not found')
        //   // console.log( check[0])
        //  const errortable = document.createElement('div')
        //  errortable.classList.add('error')
        //  errortable.innerHTML = 
         
        //  `
        //  <h1>School not found </h1>
        //  <h3>Search again</h3>
        //  `

        // table.appendChild(errortable)
        
       
      
       
    });

    
    //displaying each of the data
    
    console.log(filteredArray)

    heading = document.createElement('div')

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
    filteredArray.forEach((list) => {
        
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
      
    });
  });
}
