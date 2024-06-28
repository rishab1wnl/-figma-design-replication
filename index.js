document
.querySelector(".play-button")
.addEventListener("click", function () {
    document.querySelector(".thumbnail").style.display = "none";
    document.querySelector("#youtube-video").style.display = "block";
});

function showVideo() {
const thumbnail = document.querySelector(".video-thumbnail");
const iframe = document.querySelector(".video-iframe");

thumbnail.style.display = "none";
iframe.style.display = "block";
}

document.getElementById('open-popup').addEventListener('click', function () {
document.getElementById('popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function () {
document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function (event) {
if (event.target == document.getElementById('popup')) {
    document.getElementById('popup').style.display = 'none';
}
});


document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('countryCode').value;
    const mobile = document.getElementById('mobile').value;
    const babyStage = document.getElementById('babyStage').value;

    const formData = {
        name: name,
        email: email,
        phone: `${countryCode} ${mobile}`,
        babyStage: babyStage
    };

    localStorage.setItem('applicationData', JSON.stringify(formData));

    alert('Application data saved successfully!');
});
