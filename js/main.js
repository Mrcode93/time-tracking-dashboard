let times = document.querySelectorAll(".times p");
let boxes = document.querySelectorAll(".box");
let boxesTitle = document.querySelectorAll(".title p");
let hour = document.querySelectorAll(".time");
let last = document.querySelectorAll(".last");

function activeClass() {
    times.forEach((time) => {
        time.classList.remove("active");
        this.classList.add("active");
    });
}
times.forEach((e) => {
    e.addEventListener("click", activeClass);
});

times.forEach((e) => {
    e.addEventListener("click", () => {
        console.log(e);

        console.log("=================");
        fetch("js/data.json")
            .then((result) => result.json())
            .then((data) => {
                data.forEach((key, value) => {
                    boxesTitle.forEach((box, index) => {
                        if (value === index) {
                            box.innerHTML = key.title;
                            if (e.innerHTML === "Daily") {
                                box.parentNode.nextElementSibling.innerHTML =
                                    key.timeframes.daily.current + "hrs";
                                box.parentNode.nextElementSibling.nextElementSibling.innerHTML =
                                    "Last day " + key.timeframes.daily.previous;
                            } else if (e.innerHTML === "Weekly") {
                                box.parentNode.nextElementSibling.innerHTML =
                                    key.timeframes.weekly.current + "hrs";
                                box.parentNode.nextElementSibling.nextElementSibling.innerHTML =
                                    "Last week " + key.timeframes.weekly.previous;
                            } else {
                                box.parentNode.nextElementSibling.innerHTML =
                                    key.timeframes.monthly.current + "hrs";
                                box.parentNode.nextElementSibling.nextElementSibling.innerHTML =
                                    "Last month " + key.timeframes.monthly.previous;
                            }
                        }
                    });
                });
            });
    });
});
//monthly active class
let fetchData = () => {
    fetch("js/data.json")
        .then((result) => result.json())
        .then((data) => {
            data.forEach((key, value) => {
                boxesTitle.forEach((box, index) => {
                    if (value === index) {
                        box.innerHTML = key.title;

                        box.parentNode.nextElementSibling.innerHTML =
                            key.timeframes.monthly.current + "hrs";

                        box.parentNode.nextElementSibling.nextElementSibling.innerHTML =
                            "Last month " + key.timeframes.monthly.previous;
                    }
                });
            });
        });
};
window.addEventListener("DOMContentLoaded", fetchData);