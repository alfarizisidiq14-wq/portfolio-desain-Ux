document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const usernameValidation = document.getElementById('username-validation');
    const passwordValidation = document.getElementById('password-validation');

    // 1. Simulasikan list username yang sudah terpakai
    const usedUsernames = ['alfarizi', 'admin', 'user123']; 

    // Fungsi untuk mengecek semua kriteria terpenuhi
    function checkFormValidity() {
        const isUsernameValid = usernameInput.value.length > 0 && !isUsernameDuplicate(usernameInput.value);
        const isPasswordValid = passwordInput.value.length >= 6; // 6. cek minimal 6 karakter

        // 8. Tombol submit menyala jika 6 karakter terpenuhi
        if (isUsernameValid && isPasswordValid) {
            loginButton.classList.add('enabled');
            loginButton.disabled = false;
        } else {
            loginButton.classList.remove('enabled');
            loginButton.disabled = true;
        }
    }

    // 2. User mengetik username & 3. sistem cek duplikat (termasuk validasi tampilan)
    function isUsernameDuplicate(username) {
        return usedUsernames.includes(username.toLowerCase());
    }

    usernameInput.addEventListener('input', function() {
        const username = usernameInput.value.trim();
        usernameValidation.style.display = 'block';

        if (username.length === 0) {
            usernameValidation.textContent = '';
            usernameValidation.className = 'validation-message';
        } else if (isUsernameDuplicate(username)) {
            // 4. Sistem menghapus input username jika duplikat
            usernameInput.value = ''; 
            usernameValidation.textContent = 'Username sudah dipakai, coba yang lain.';
            usernameValidation.className = 'validation-message invalid';
        } else {
            // 5. Sistem menampilkan username yang diambil
            usernameValidation.textContent = 'Username tersedia! (@' + username + ')'; 
            usernameValidation.className = 'validation-message valid';
        }

        checkFormValidity(); // Panggil fungsi cek validitas total
    });

    // 6. User memasukkan password & 7. sistem cek jumlah karakter
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        passwordValidation.style.display = 'block';

        if (password.length < 6) {
            // 7. Jika kurang dari 6 karakter, tombol submit disable dan pesan muncul
            const remaining = 6 - password.length;
            passwordValidation.textContent = `Anda baru mengetik ${password.length} karakter. Wajib minimal 6.`;
            passwordValidation.className = 'validation-message invalid';
        } else {
            // 8. Jika 6 karakter, pesan hilang dan tombol submit menyala.
            passwordValidation.textContent = ''; // Pesan hilang
            passwordValidation.className = 'validation-message';
        }
        
        checkFormValidity(); // Panggil fungsi cek validitas total
    });

    // 1. User klik tombol login (hanya simulasi)
    loginButton.addEventListener('click', function() {
        if (loginButton.classList.contains('enabled')) {
            alert('Login Berhasil! (Simulasi Level 5 Berjalan)');
        }
    });

    // Inisialisasi awal
    checkFormValidity();
});
