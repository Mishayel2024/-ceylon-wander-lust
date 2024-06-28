document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }, 2000);

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.href;
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = target;
            }, 1500);
        });
    });
});
