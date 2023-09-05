document.addEventListener("DOMContentLoaded", function () {
    const followLight = document.querySelector(".FollowLight");
    const lightSize = 198;

    document.addEventListener("mousemove", function (event) {
        const x = event.clientX - lightSize / 2;
        const y = event.clientY - lightSize / 2;
        followLight.style.left = x + "px";
        followLight.style.top = y + "px";
    });
});
