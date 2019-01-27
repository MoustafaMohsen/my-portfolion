export const AppHost = location.href.split(/\?|#/)[0]
//location.href.replace(location.hash,"")
//location.protocol.concat("//").concat(window.location.href);

//window.location.host+window.location.pathname

const PlatformsCardPath="assets/img/Framworks and platforms/work-card/"
const PlatformsPath="assets/img/Framworks and platforms/"

const ProgramingPath="assets/img/Programing languages/"

const ServicesPath="assets/img/Services/"
const mocksPath=PlatformsCardPath+"mocks/";

const aspcore =`${AppHost}${PlatformsCardPath}`+ "angular.png";
const angular =`${AppHost}${PlatformsCardPath}`+ "asp.net core.png";
const github =`${AppHost}${PlatformsCardPath}`+ "github.png";
const mysql =`${AppHost}${PlatformsCardPath}`+ "mysql.png";
const fridgenotes_desktop =`${AppHost}${mocksPath}`+"fridgenotes-desktop.png";

export const  Availableimages={

    workcard:{
        angular :`${AppHost}${PlatformsCardPath}`+ "angular.png",
        aspcore :`${AppHost}${PlatformsCardPath}`+ "asp.net core.png",
        github :`${AppHost}${PlatformsCardPath}`+ "github.png",
        mysql :`${AppHost}${PlatformsCardPath}`+ "mysql.png",
        sqlite :`${AppHost}${PlatformsCardPath}`+ "sqlite.png",
        digitalocean :`${AppHost}${PlatformsCardPath}`+ "digitalocean.png",
        heroku :`${AppHost}${PlatformsCardPath}`+ "heroku.png",
    },

    fridgenotes_desktop :`${AppHost}${mocksPath}`+"fridgenotes-desktop.png",

    dotnet :`${AppHost}${PlatformsPath}`+ "dotnet.png",
    wordpress :`${AppHost}${PlatformsPath}`+ "wordpress.png",
    nodejs :`${AppHost}${PlatformsPath}`+ "nodejs.png",


    csharp :`${AppHost}${ProgramingPath}`+ "csharp.png",
    css :`${AppHost}${ProgramingPath}`+ "css.png",
    sass :`${AppHost}${ProgramingPath}`+ "sass.png",
    js :`${AppHost}${ProgramingPath}`+ "js.png",
    ts :`${AppHost}${ProgramingPath}`+ "ts.png",
    html :`${AppHost}${ProgramingPath}`+ "html.png",
    php :`${AppHost}${ProgramingPath}`+ "php.png",



    docker:`${AppHost}${ServicesPath}`+"docker.png",
    git:`${AppHost}${ServicesPath}`+"git.png",
    npm:`${AppHost}${ServicesPath}`+"npm.png",
    npm_red:`${AppHost}${ServicesPath}`+"npm_red.png",
    nuget:`${AppHost}${ServicesPath}`+"nuget.png",
    rxjs:`${AppHost}${ServicesPath}`+"rxjs.png",
    jquery:`${AppHost}${ServicesPath}`+"jquery.png",
}


