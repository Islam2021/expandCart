$(document).ready(function() {
    // Handel Dropdown Links
    $(".dropdownToggle").on("click", function() {
        $(this).parent().find(".dropdownList").toggleClass("dropdownListOpen");
    });

    // Handel toggle Add New Adress

    $(".addNew").on("click", function() {
        $(".addNew-address").toggleClass("active");
    });

    const informationStepOne = document.getElementById("informationStepOne");
    const firstScreen = document.querySelector(".first-screen");
    const lastScreen = document.querySelector(".last-screen");
    informationStepOne.addEventListener("click", function(e) {
        e.preventDefault();
        const informationData = document.getElementById("informationData");
        const formData = new FormData(informationData);
        const nameError = document.getElementById("name_error");
        const phoneError = document.getElementById("phone_error");
        const cityError = document.getElementById("city_error");
        const countryError = document.getElementById("country_error");

        let form = {
            phone: formData.get("phone"),
            name: formData.get("name"),
            country: formData.get("country"),
            city: formData.get("city"),
        };
        if (form.name == "") {
            nameError.innerText = "Please provide a valid name.";
        } else {
            nameError.innerText = "";
        }
        if (form.phone == "" || form.phone.length >= 11) {
            phoneError.innerText = "Please provide a valid phone.";
        } else {
            phoneError.innerText = "";
        }

        if (form.city == "") {
            cityError.innerText = "Please provide a valid city.";
        } else {
            cityError.innerText = "";
        }

        if (form.country == "") {
            countryError.innerText = "Please provide a valid country.";
        } else {
            countryError.innerText = "";
        }
        if (
            form.name != "" &&
            form.phone != "" &&
            form.city != "" &&
            form.country != ""
        ) {
            firstScreen.classList.remove("show");
            lastScreen.classList.add("show");
            const infoBlock = document.getElementById("infoBlock");
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="info-block">
                <h3> Contact info </h3>
                <p>Name: ${form.name} | Phone: ${form.phone}</p>
                <p>Ship to: ${form.country}, state, ${form.city}, address details</p>
            </div>
            `;

            infoBlock.prepend(div);
        }
    });
});

function saveLocation() {
    const informationData = document.getElementById("informationData");
    const nameError = document.getElementById("name_error");
    const phoneError = document.getElementById("phone_error");
    const cityError = document.getElementById("city_error");
    const countryError = document.getElementById("country_error");

    informationData.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(informationData);
        let form = {
            phone: formData.get("phone"),
            name: formData.get("name"),
            country: formData.get("country"),
            city: formData.get("city"),
        };

        if (form.name == "") {
            nameError.innerText = "Please provide a valid name.";
        } else {
            nameError.innerText = "";
        }
        if (form.phone == "" || form.phone.length >= 11) {
            phoneError.innerText = "Please provide a valid phone.";
        } else {
            phoneError.innerText = "";
        }

        if (form.city == "") {
            cityError.innerText = "Please provide a valid city.";
        } else {
            cityError.innerText = "";
        }

        if (form.country == "") {
            countryError.innerText = "Please provide a valid country.";
        } else {
            countryError.innerText = "";
        }

        if (
            form.name != "" &&
            form.phone != "" &&
            form.city != "" &&
            form.country != ""
        ) {
            const mapCardElm = document.getElementById("map-card");
            const createElm = document.createElement("div");

            createElm.innerHTML = `
                    <div class="box-info">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="info">
                                    <div class="radioBtn">
                                        <input type="radio" id="radio" name="radio-group">
                                        <label class="information-lable" for="radio">
                                            <p> ${form.name} </p>
                                            <p> ${form.country} </p>
                                            <p> ${form.city} </p>
                                            <p> HXT SQN </p>
                                            <p> Tel: ${form.phone} </p>
                                        </label>
                                    </div>
                                    <a href="#" class="edit-address"> Edit Address </a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="map">
                                    <iframe class="view-map" src="https://www.google.com/maps/d/u/0/embed?mid=1rKQM7H6jPZBAE2fXQ70S0HI9P2UmWsMH&ehbc=2E312F" style="position:relative; top:-60px; border:none;" frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
    
                `;
            mapCardElm.prepend(createElm);
            document.getElementById("phone").value = "";
            document.getElementById("name").value = "";
            document.getElementById("country").value = "";
            document.getElementById("city").value = "";
        }
    });
}