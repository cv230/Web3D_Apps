document.querySelector("#cokeLink").addEventListener("click", e =>
{
    document.querySelector("#homePage").classList.remove("shown");
    document.querySelector("#homePage").classList.add("hidden");

    document.querySelector("#cokePage").classList.add("shown");
    document.querySelector("#cokePage").classList.remove("hidden");

    document.querySelector("#spritePage").classList.remove("shown");
    document.querySelector("#spritePage").classList.add("hidden");

    document.querySelector("#pepperPage").classList.remove("shown");
    document.querySelector("#pepperPage").classList.add("hidden")
});

document.querySelector("#homeLink").addEventListener("click", e =>
{
    document.querySelector("#cokePage").classList.remove("shown");
    document.querySelector("#cokePage").classList.add("hidden");

    document.querySelector("#homePage").classList.add("shown");
    document.querySelector("#homePage").classList.remove("hidden");

    document.querySelector("#spritePage").classList.remove("hidden");
    document.querySelector("#spritePage").classList.add("shown");

    document.querySelector("#pepperPage").classList.remove("shown");
    document.querySelector("#pepperPage").classList.add("hidden")


});

document.querySelector("#spritelink").addEventListener("click", e =>
{
    document.querySelector("#cokePage").classList.add("hidden");
    document.querySelector("#cokePage").classList.remove("shown");

    document.querySelector("#spritePage").classList.remove("hidden");
    document.querySelector("#spritePage").classList.add("shown");

    document.querySelector("#homePage").classList.add("hidden");
    document.querySelector("#homePage").classList.remove("shown");

    document.querySelector("#pepperPage").classList.remove("shown");
    document.querySelector("#pepperPage").classList.add("hidden")
});

document.querySelector("#pepperlink").addEventListener("click", e =>
{
    document.querySelector("#cokePage").classList.add("hidden");
    document.querySelector("#cokePage").classList.remove("shown");

    document.querySelector("#spritePage").classList.remove("shown");
    document.querySelector("#spritePage").classList.add("hidden");

    document.querySelector("#homePage").classList.add("hidden");
    document.querySelector("#homePage").classList.remove("shown");

    document.querySelector("#pepperPage").classList.remove("hidden");
    document.querySelector("#pepperPage").classList.add("shown")
});