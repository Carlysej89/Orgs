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
  if (response.status > 199 && response.status < 300) {
    response.json().then(function userOrgFind(userOrgs) {
      userOrgs.forEach(function printOrgs(each) {
        console.log(each);
        let listItems = document.createElement("li");
        let orgName = document.createElement("h1");
        let avatar = document.createElement("img");
        avatar.setAttribute("src", each.avatar_url);
        listItems.classList.add("well");
        listItems.appendChild(avatar);
        listItems.appendChild(orgName);
        document.querySelector("#organizations ul").appendChild(listItems);
        orgName.innerText = each.login;
        console.log(each.login);
      }) ;
    });
  }
  else {
    document.querySelector(".error").append("This " + response.status + " error is tremendous. #SAD");
        console.log(response.status, "#SAD");
  }
});
