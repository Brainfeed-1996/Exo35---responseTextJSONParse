const affichageUserName = document.querySelector("#userName");
const affichageCity = document.querySelector("#city");
const affichageLng = document.querySelector("#lng");
const affichageLat = document.querySelector("#lat");

console.log(affichageUserName);

const promise01 = fetch("https://jsonplaceholder.typicode.com/users/");
promise01
  .then(async (response) => {
    console.log(response);

    try {
      const utilisateurTXT = await response.text();
      utilisateur = JSON.parse(utilisateurTXT);

      console.log(utilisateur[1]);

      const txtUserName = utilisateur[1].name;
      const txtCity = utilisateur[1].address.city;
      const txtLat = utilisateur[1].address.geo["lat"];
      const textLng = utilisateur[1].address.geo["lng"];

      // console.log(txtUserName);
      affichageUserName.innerHTML = txtUserName;
      affichageCity.innerHTML = txtCity;
      affichageLng.innerHTML = textLng;
      affichageLat.innerHTML = txtLat;
    } catch (e) {
      console.log(e);
    }
  })
  .catch((err) => console.log(err));
