var dares = {
    easy: [
        "Hát một bài hát bằng giọng nói hài hước.",
        "Làm 10 động tác vỗ tay.",
        "Kể một câu chuyện hài hước.",
        "Chụp một bức ảnh tự sướng với khuôn mặt hài hước."
    ],
    medium: [
        "Bắt chước giọng nói của một người nổi tiếng.",
        "Nhảy một điệu nhảy bạn chưa từng thử.",
        "Gọi điện cho một người bạn và hát chúc mừng sinh nhật.",
        "Vẽ một bức tranh bằng tay không thuận của bạn."
    ],
    hard: [

        "Mô phỏng hành động ăn kẹo mút bằng ngón tay đối phương trong 10s. ",
        "Buộc tay đối phương và hôn khấp cơ thể.",
        "Hôn ngực và nhũ hoa của đối phương, sử dụng môi và lưỡi của bạn.",
        "Hôn và liếm quanh vùng kín của đối phương , nhưng không trực tiếp chạm vào.",
        "Hôn và liếm lưng đối phương dưới mông lên đến cổ, gáy , sau tai một cách thật khiêu gợi.",
        "Massage cho đối phương một cách gợi cảm âu yếm.",
        "Dùng vùng kín áp sát vào mặt đối phương.",
        "Trở thành 1 người hư hỏng cúi xuống cho đối phương đánh vào mông.",
        "Ngậm viên đá trên môi , đẩy lưỡi khấp lưng đối phương.",
        "Rót 1 chút nước lên bụng đối phương và liếm nó!",
        "Dùng 2 tay lướt nhẹ mát xa lòng bàn chân của đối phương",
        "Nếm vị cơ thể đối phương." ,
        "Thử 1 tư thế mới trong lúc QH" ,
        "Để 1 viên nước đá vào chỗ đó" ,
        "Sử dụng tay vuốt ve bên ngoài quần lót của đối phương" ,
        "Dùng ngực cạ vào đối phương" ,
        "Liếm vùng kín của đối phương " ,
        " Cạ sát 2 vùng kín lại với nhau khi mặc quần lót" ,
        " Cạ sát vào vùng kín của đối phương nhưng ko cho vào " ,
        " Cho cậu nhỏ đưa vào cô bé phần đầu trong 20s" ,
        " Vén tóc đối phương và hôn v1" ,
        "làm tình với đối phương trong vòng 5 phút" ,
        "thể hiện trình độ mút kẹo của bản thân bằng cậu nhỏ của đối phương đối với nữ - nam bỏ qua ",
        " “ Húp hàu” " ,
        "Dùng ngón tay làm cô bé chảy nước." ,
        "Dùng tay xoa lên ngực đối phương " ,
        "Hôn vào hông đối phương " ,
        "cỡi áo ngực đối phương bằng 1 tay" ,
        "Dùng môi chạm vào một bộ phận bất kì trên người đối Phương " ,
        "Dùng môi chạm vào ngực đối phương" ,
        "Hôn vào ngực đối phương, có thể liếm ngực" ,
        "dùng miệng quan hệ trong 2 phút" ,
        "cùng đối phương nút lưỡi trong 1 phút" ,
        "hôn và thổi vào cổ đối phương" ,
        "Mặc áo ngực của đối phương đến hết 5 lượt" ,
        "dùng tay sờ hoặc đưa tay vào trong vùng kín của đối phương trong 1 phút" ,
        "ngón tay đối phương trong 10s. ",
        "hôn vào vùng môi trên của đối phương" ,
        "hôn vào vùng môi dưới của đối phương" ,
        " không được mặc bất kì chiếc áo nào trong 5 phút" ,
        " rủ đối phương chơi cầu tuột😈" ,
    " lướt tiktok trong khi đang ngậm cậu nhỏ trong miệng mút lưu ý “ mút nha”"
        
        
    ]
};

var truths = {
    easy: [
        "Bạn đã từng nói dối về điều gì gần đây?",
        "Điều gì làm bạn cảm thấy hạnh phúc nhất?",
        "Bạn thích món ăn nào nhất?"
    ],
    medium: [
        "Bạn đã bao giờ lừa dối ai đó để đạt được điều gì chưa?",
        "Bạn đã từng yêu thầm ai mà không dám nói?",
        "Bạn đã từng làm điều gì ngớ ngẩn mà không ai biết?"
    ],
    hard: [
        "Kể về một bí mật mà bạn chưa bao giờ kể cho ai.",
        "Bạn có bao giờ ghen tị với một người bạn thân không?",
        "Bạn đã bao giờ làm điều gì trái với đạo đức của mình?"
    ]
};

var selectedLevel = 'easy';
var loggedInUser = null;
var skipCount = 3; // Số lần bỏ qua tối đa

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function showNotification(message, success = false) {
    var notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.backgroundColor = success ? '#4CAF50' : '#f44336';
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000);
}

function startGame() {
    var player1 = document.getElementById("player1").value;
    var gender1 = document.getElementById("gender1").value;
    var player2 = document.getElementById("player2").value;
    var gender2 = document.getElementById("gender2").value;
    selectedLevel = document.getElementById("level").value;

    if (player1.trim() === "" || player2.trim() === "") {
        showNotification("Vui lòng nhập tên của cả hai người chơi!");
        return;
    }

    document.querySelector(".players").style.display = "none";
    document.querySelector(".challenges").style.display = "block";

    document.querySelector("h1").textContent = `Truth or Dare Challenges - ${player1} (${gender1}) vs ${player2} (${gender2})`;
}

function getRandomTruth() {
    var levelTruths = truths[selectedLevel];
    var randomIndex = Math.floor(Math.random() * levelTruths.length);
    var truth = levelTruths[randomIndex];
    document.getElementById("challenge-text").textContent = truth;
    saveGameHistory("truth", truth);
}

function getRandomDare() {
    var levelDares = dares[selectedLevel];
    var randomIndex = Math.floor(Math.random() * levelDares.length);
    var dare = levelDares[randomIndex];
    document.getElementById("challenge-text").textContent = dare;
    saveGameHistory("dare", dare);
}

function skipChallenge() {
    if (skipCount > 0) {
        skipCount--;
        document.getElementById("skip-count").textContent = `Số lượt bỏ qua còn lại: ${skipCount}`;
    } else {
        var loserSound = document.getElementById("loser-sound");
        loserSound.play();
        showNotification("Bạn đã dùng hết số lần bỏ qua!");
        return;
    }

    getRandomChallenge();
}

function getRandomChallenge() {
    var randomType = Math.random() < 0.5 ? "truth" : "dare";
    if (randomType === "truth") {
        getRandomTruth();
    } else {
        getRandomDare();
    }
}

function saveGameHistory(type, challenge) {
    if (loggedInUser) {
        var users = getFromLocalStorage('users');
        users[loggedInUser].history.push({ type: type, challenge: challenge });
        saveToLocalStorage('users', users);
    }
}
document.addEventListener("keydown", function(event) {
    if (event.key === "F12") {
        event.preventDefault();
        window.location.href = "error.html"; // Chuyển hướng người dùng đến trang lỗi
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "F12") {
        event.preventDefault();
        alert("Không được phép sử dụng F12 trên trang này.");
    }
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
    }
    if (e.key === 'F12') {
        e.preventDefault();
    }
});
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
