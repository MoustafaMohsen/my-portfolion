export const AppHost = location.protocol.concat("//").concat(window.location.host);


const imagesPath="/assets/img/Framworks and platforms/work-card/"
const mocksPath=imagesPath+"mocks/";

const aspcore =`${AppHost}${imagesPath}`+ "angular.png";
const angular =`${AppHost}${imagesPath}`+ "asp.net core.png";
const github =`${AppHost}${imagesPath}`+ "github.png";
const mysql =`${AppHost}${imagesPath}`+ "mysql.png";
const fridgenotes_desktop =`${AppHost}${mocksPath}`+"fridgenotes-desktop.png";

export const  Availableimages={
    angular :`${AppHost}${imagesPath}`+ "angular.png",
    aspcore :`${AppHost}${imagesPath}`+ "asp.net core.png",
    github :`${AppHost}${imagesPath}`+ "github.png",
    mysql :`${AppHost}${imagesPath}`+ "mysql.png",
    sqlite :`${AppHost}${imagesPath}`+ "sqlite.png",
    digitalocean :`${AppHost}${imagesPath}`+ "digitalocean.png",
    heroku :`${AppHost}${imagesPath}`+ "heroku.png",
    fridgenotes_desktop :`${AppHost}${mocksPath}`+"fridgenotes-desktop.png",
}