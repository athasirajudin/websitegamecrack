document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('.login-btn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const inputGroup = document.querySelector('.input-group'); // Grup input email

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah pengiriman form default
    
        const email = emailInput.value;
        const password = passwordInput.value;

        const validEmail = "admin28613@gmail.com";
        const validPassword = "Admincrack#";
    
        if (email === "" || password === "") {

            errorMessage.innerHTML = "Email atau password tidak boleh kosong, silakan coba lagi.";
            inputGroup.classList.add('error-active');
        } else if (email !== validEmail || password !== validPassword) {

            errorMessage.innerHTML = "Email atau password salah, silakan coba lagi.";
            inputGroup.classList.add('error-active');
        } else {

            inputGroup.classList.remove('error-active');
            alert("Login berhasil");
            
            window.location.href = 'dashboard.html'; // Redirect ke dashboard
        }
    });    
});





document.addEventListener('DOMContentLoaded', function () {
    const loginNavBtn = document.querySelector('.login-btn-nav');
    const loginBox = document.querySelector('.login-box');
    const closeButton = document.querySelector('.close-btn');

    // Fungsi untuk menampilkan login box
    loginNavBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah default link behavior
        loginBox.classList.remove('hide'); // Hapus kelas hide
        loginBox.classList.add('show'); // Tambahkan kelas show
    });

    // Fungsi untuk menyembunyikan login box dengan tombol 'X'
    closeButton.addEventListener('click', function () {
        loginBox.classList.remove('show'); // Hapus kelas show
        loginBox.classList.add('hide'); // Tambahkan kelas hide
    });
});
