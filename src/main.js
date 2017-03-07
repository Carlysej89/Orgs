// let authKey = "a678c70e5f0d9e6d2cc1f27f9c1856157bc9ad09"; //DO NOT COMMIT. NO REALLY. DON'T DO IT.
let promise = fetch(
  "https://api.github.com/users/addyosmani/orgs",
  {
    method: "GET",
    headers: {
      Authorization: "token " + ""
    },
  } );

  promise.then( function handleResponse(response) {
  console.log(response);
  response.json().then(function userOrgFind(userOrgs) {
    userOrgs.forEach(function printOrgs(each) {
      console.log(each);
      let listItems = document.createElement("li");
      let orgName = document.createElement("h2");

      listItems.appendChild(orgName);
      document.querySelector("#organizations ul").appendChild(listItems);
      orgName.innerText = each.login;
      console.log(each.login);


    }) ;

  });
  });
