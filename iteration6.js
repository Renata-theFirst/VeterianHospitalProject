document.addEventListener('DOMContentLoaded', () =>{
    const href = location.href;
    alert("ссылка на этот сайт: " + href);

    const feedback = document.getElementById("feedback");

    feedback.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("guestName").value;
        const tel = document.getElementById("guestTel").value;
        if (localStorage.length > 0){
            localStorage.clear();
        }
        localStorage.setItem(name, tel);
    });

    function LoadingFeedback() {
        if(localStorage.length > 0) {
            const key = localStorage.key(0);
            document.getElementById("guestName").value = key;
            document.getElementById("guestTel").value = localStorage.getItem(key);
        }
    }

    LoadingFeedback();

    if (!document.cookie) {
        document.cookie = "userID = John";
    }
    
})


