var rcp = 284;

$(
    function init(){

        //initRcpPts//

            $("#rcp").text('[' + rcp + ']');

         //initOnClickEvent//

            $("p+img").click(interactIcon);
            $("#pickaxe-1, #worker_shirt").off("click");
    }
);

function interactIcon(evt){

    color = colorCheck(evt.target);

    depend = dependencyCheck(evt.target);

    cost = evt.target.getAttribute("value");

    if (color === "orange" && depend === true && !((rcp - cost) < 0))
    {
        evt.target.style.backgroundImage = "url(img/background/green.png)";
        $(evt.target).next("p").text("ACQUIRED");
        rcp -= parseInt(cost);
    }
    else if(color === "green" && depend === true)
    {
        evt.target.style.backgroundImage = "url(img/background/orange.png)";
        $(evt.target).next("p").text("COST "+$(evt.target).attr("value"));
        rcp += parseInt(cost);
    }

    $("#rcp").text('['+rcp+']');

}

function colorCheck(target)
{
    var color;

    if(target.style.backgroundImage ==='url("img/background/green.png")') {
        color = "green";
    }
    else if(target.style.backgroundImage ==='url("img/background/red.png")') {
        color = "red";
    }
    else{
        color = "orange";
    }

    return color;
}

function dependencyCheck(target)
{
    var depend = true;

        if (target.id === "apprentice_crafter" && colorCheck($("#primal_sword-1")[0]) === "green")
        {
            depend = false;

        }

        if (target.id === "primal_sword-1" && colorCheck($("#apprentice_crafter")[0]) === "orange")
        {
            depend = false;
        }

    return depend;
}