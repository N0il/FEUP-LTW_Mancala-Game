class Page{
    constructor(){
        //Navbar icons
        this.chat = document.getElementById("img-header-navbar-chat-icon");
        this.rules = document.getElementById("img-header-navbar-rules-icon");
        this.score = document.getElementById("img-header-navbar-score-icon");
        this.isSectionOpen = [false, false, false, true, false];  //[chat | rules | score | menu | chat(if user is logged)]

        //Responsive Menu for mobile size
        this.menu = document.getElementById("img-header-navbar-menu-icon");
        this.dMain = document.getElementById("d-main");

        //Sections for menu display
        this.authSection = document.getElementById("section-main-authentication");
        this.gameSection = document.getElementById("section-main-game");
        this.commandsSection = document.getElementById("section-main-commands");
        this.configsSection = document.getElementById("section-main-configurations");
        this.chatSection = document.getElementById("section-main-chat");
        this.rulesSection = document.getElementById("section-main-rules");
        this.scoreSection = document.getElementById("section-main-score");

        this.sections = [
            this.gameSection,
            this.authSection,
            this.configsSection,
            this.chatSection,
            this.rulesSection,
            this.scoreSection,
            this.commandsSection
                        ];

        console.log(this.sections);

        this.menuButtons = document.getElementsByClassName("p-menu");

        //Responsive selection for tablet size
        this.tabletSelection = document.getElementById("sel-header-menu");

        //Authentication
        this.signUp = document.getElementById("h3-login-titles-signup--in"); //in section sign in change to signUn
        this.signIn = document.getElementById("h3-login-titles-signin--up"); //in section sign up change to signIn
        this.recoverPass =document.getElementById("a-login-forgotpass");
        this.goBackPass = document.getElementById("a-forgot-goback");

        //Update Game names based on Mode in configurations
        this.modeLocal = document.getElementById("input-settings-info--local");
        this.modeOnline = document.getElementById("input-settings-info--online");
        this.modeComputer = document.getElementById("input-settings-info--computer");
        this.p2Icon = document.getElementById("img-game-area-header-p2-country");
        this.p2Name = document.getElementById("p-game-area-header-p2-name");

        //Change Modes in configurations
        this.local = document.getElementById("d-settings-mode--local");
        this.online = document.getElementById("d-settings-mode--online");
        this.computer = document.getElementById("d-settings-mode--computer");
    }

    /**
     * Listeners
     */

    //Navigation bar sections
    listenChat(){
        this.chat.addEventListener("click", this.toggleChat.bind(this));
    }

    listenRules(){
        this.rules.addEventListener("click", this.toggleRules.bind(this));
    }

    listenScore(){
        this.score.addEventListener("click", this.toggleScore.bind(this));
    }

    //Authentication section
    listenSignUp(){
        this.signUp.addEventListener("click", this.toggleSignUp.bind(this));
    }

    listenSigIn(){
        this.signIn.addEventListener("click", this.toggleSignIn.bind(this));
    }

    listenRecoverPass(){
        this.recoverPass.addEventListener("click", this.toggleRecoverPass.bind(this));
    }

    listenGoBackPass(){
        this.goBackPass.addEventListener("click", this.toggleGoBackPass.bind(this));
    }

    listenChangingModes(){
        this.modeLocal.addEventListener("click", this.displayModeLocal.bind(this));
        this.modeOnline.addEventListener("click", this.displayModeOnline.bind(this));
        this.modeComputer.addEventListener("click", this.displayModeComputer.bind(this));
    }

    listenMobileMenu(){
        this.menu.addEventListener("click", this.toggleMenu.bind(this));
    }

    listenMobileMenuButtons(){
        for(let i = 0; i < this.menuButtons.length; i++){
            this.menuButtons[i].addEventListener("click", this.displaySections.bind(this, i));
        }
    }

    listenTabletSelection(){
        this.tabletSelection.addEventListener("click", this.toggleTabletSelection.bind(this));
    }

    //Calls all listeners
    listenAll(){
        this.listenChat();
        this.listenRules();
        this.listenScore();
        this.listenSignUp();
        this.listenSigIn();
        this.listenRecoverPass();
        this.listenGoBackPass();
        this.listenChangingModes();
        this.listenMobileMenu();
        this.listenMobileMenuButtons();
        this.listenTabletSelection();
    }

    /**
     * Togglers (listener's handlers)
     */

    //Toggler prototype functions
    toggleVisibility(isOpen, primaryId, secondaryId, display1, display2) {
        var primaryElement = document.getElementById(primaryId);
        var secundayElement = document.getElementById(secondaryId);

        if(isOpen) {
            primaryElement.style.display = "none";
            secundayElement.style.display = display2;
        }
        else {
            primaryElement.style.display = display1;
            secundayElement.style.display = "none";
        }
    }

    toggleIcon(index, imageElement, icon1, icon2) {
        if(this.isSectionOpen[index]) {
            imageElement.src = icon1;
            this.isSectionOpen[index] = false;
        }
        else{
            imageElement.src = icon2;
            this.isSectionOpen[index] = true;
        }
    }

    toggleChat(){
        if(document.getElementById("d-userTab-info--username").innerHTML == "Username"){
            this.toggleIcon(0, this.chat, "../res/icons/chat_icon.png", "../res/icons/chat_icon_active.png");
            this.toggleVisibility(this.isSectionOpen[0], "section-main-authentication", "section-main-chat", "block", "block");
            this.toggleSignIn();  //this two lines prevents from having multiple sections open in Authentication area
            this.toggleGoBackPass();
        }
        else{
            this.toggleIcon(4, this.chat, "../res/icons/chat_icon.png", "../res/icons/chat_icon_active.png");
            this.toggleVisibility(this.isSectionOpen[4], "d-authentication-userTab", "section-main-chat", "grid", "block");
        }
    }

    toggleRules() {
        this.toggleIcon(1, this.rules, "../res/icons/rules_icon.png", "../res/icons/rules_icon_active.png");
        this.toggleVisibility(this.isSectionOpen[1], "section-main-game", "section-main-rules", "block", "block");
    }

    toggleScore() {
        this.toggleIcon(2, this.score, "../res/icons/score_icon.png", "../res/icons/score_icon_active.png");
        this.toggleVisibility(this.isSectionOpen[2], "section-main-configurations", "section-main-score", "block", "block");
    }

    toggleSignUp(){
        this.toggleVisibility(true, "form-authentication-login", "form-authentication-signup", "block", "block");
        document.getElementById("section-main-commands").style.display = "none";
    }

    toggleSignIn(){
        this.toggleVisibility(false, "form-authentication-login", "form-authentication-signup", "block", "block");
        document.getElementById("section-main-commands").style.display = "flex";
    }

    toggleRecoverPass(){
        this.toggleVisibility(true, "form-authentication-login", "form-authentication-forgot", "block","block");
    }

    toggleGoBackPass(){
        this.toggleVisibility(false, "form-authentication-login", "form-authentication-forgot", "block","block");
    }

    toggleMenu(){
        this.toggleVisibility(this.isSectionOpen[3], "d-main", "s-menu", "grid", "grid");
        this.isSectionOpen[3] = !(this.isSectionOpen[3]);
    }

    toggleTabletSelection(){
        switch(this.tabletSelection.value){
            case "Game":
                this.toggleVisibility(true, "section-main-score", "section-main-game", "block", "block");
                this.toggleVisibility(true, "section-main-rules", "section-main-game", "block", "block");
                this.toggleVisibility(true, "section-main-configurations", "section-main-game", "block", "block");
                break;
            case "Configurations":
                this.toggleVisibility(true, "section-main-game", "section-main-configurations", "block", "block");
                this.toggleVisibility(true, "section-main-rules", "section-main-configurations", "block", "block");
                this.toggleVisibility(true, "section-main-score", "section-main-configurations", "block", "block");
                break;
            case "Leaderboard":
                this.toggleVisibility(true, "section-main-game", "section-main-score", "block", "block");
                this.toggleVisibility(true, "section-main-rules", "section-main-score", "block", "block");
                this.toggleVisibility(true, "section-main-configurations", "section-main-score", "block", "block");
                break;
            case "Rules":
                this.toggleVisibility(true, "section-main-game", "section-main-rules", "block", "block");
                this.toggleVisibility(true, "section-main-score", "section-main-rules", "block", "block");
                this.toggleVisibility(true, "section-main-configurations", "section-main-rules", "block", "block");
                break;
            default:
                console.log("Error -> toggleTabletSelection() <- no such value in selection");
        }
    }

    displayModeLocal(){
        this.p2Icon.src = "../res/default_players_icons/local.png";
        this.p2Name.innerHTML = "Local";

        this.local.style.display = "block";
        this.online.style.display = "none";
        this.computer.style.display = "none";
    }

    displayModeOnline(){
        this.p2Icon.src = "../res/default_players_icons/online.png";
        this.p2Name.innerHTML = "Online";

        this.local.style.display = "none";
        this.online.style.display = "block";
        this.computer.style.display = "none";
    }

    displayModeComputer(){
        this.p2Icon.src = "../res/default_players_icons/computer.png";
        this.p2Name.innerHTML = "Computer";

        this.local.style.display = "none";
        this.online.style.display = "none";
        this.computer.style.display = "block";
    }

    displaySections(index){
        for(let i = 0; i < this.sections.length; i++){
            this.sections[i].style.display = "none";
        }
        this.sections[index].style.display = "block";

        if(index == 0){
            this.sections[6].style.display = "flex";
        }

        this.toggleMenu();
    }

    loadingScreen(){
        document.getElementById("d-game-area-load-banner").style.display = "grid";
        document.getElementById("d-game-area-background").style.display = "none";
        document.getElementById("d-game-area-gameplay").style.display = "none";

        setTimeout(function(){
            document.getElementById("d-game-area-load-banner").style.display = "none";
            document.getElementById("d-game-area-background").style.display = "grid";
            document.getElementById("d-game-area-gameplay").style.display = "grid";
            },2000);
    }
}

const page = new Page();
page.listenAll();
page.loadingScreen();
