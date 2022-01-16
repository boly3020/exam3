// Document is ready
var emailError = false;
var c = 0;
// var usernameError = false;
// var passwordError = false;
// var confirmPasswordError = false;

$(document).ready(function() {

    // Validate Username
    $('#usercheck').hide();
    let usernameError = true;
    $('#usernames').keyup(function() {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $('#usernames').val();
        if (usernameValue.length == '') {
            $('#usercheck').show();
            usernameError = false;
            return false;
        } else if ((usernameValue.length < 3) ||
            (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $('#usercheck').hide();
            usernameError = true;

        }
    }

    // Validate Email
    const email = document.getElementById('email');
    var validateEmail = email.addEventListener('blur', () => {

        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s) == false) {
            email.classList.add(
                'is-invalid');
            emailError = flase;

        } else {
            email.classList.remove('is-invalid');
            emailError = true;
        }
    })


    // Validate Password
    $('#passcheck').hide();
    let passwordError = true;
    $('#password').keyup(function() {
        validatePassword();
    });

    function validatePassword() {
        let passwrdValue =
            $('#password').val();
        if (passwrdValue.length == '') {
            $('#passcheck').show();
            passwordError = false;
            return false;
        }
        if ((passwrdValue.length < 3) ||
            (passwrdValue.length > 10)) {
            $('#passcheck').show();
            $('#passcheck').html("**length of your password must be between 3 and 10");
            $('#passcheck').css("color", "red");
            passwordError = false;
            return false;
        } else {
            passwordError = true;
            $('#passcheck').hide();
        }
    }

    // Validate Confirm Password
    $('#conpasscheck').hide();
    let confirmPasswordError = true;
    $('#conpassword').keyup(function() {
        validateConfirmPasswrd();
    });

    function validateConfirmPasswrd() {
        let confirmPasswordValue =
            $('#conpassword').val();
        let passwrdValue =
            $('#password').val();
        if (passwrdValue != confirmPasswordValue) {
            $('#conpasscheck').show();
            $('#conpasscheck').html(
                "**Password didn't Match");
            $('#conpasscheck').css(
                "color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            confirmPasswordError = true;
            $('#conpasscheck').hide();
        }
    }



    // Submit button
    $('#submitbtn').click(function(event) {
        event.preventDefault();
        validateUsername();
        validatePassword();
        validateConfirmPasswrd();
        // validateEmail();
        console.log($('#usernames').val());
        console.log(emailError);
        console.log(passwordError);
        console.log(confirmPasswordError);

        if ((usernameError == true) &&
            (passwordError == true) &&
            (confirmPasswordError == true) &&
            (emailError == true)) {
            var uname = $('#usernames').val();
            let s = email.value;

            let passwrdValue = $('#password').val();
            localStorage.setItem("userName", uname);
            localStorage.setItem("email", s);
            localStorage.setItem("password", passwrdValue);
            localStorage.setItem("count", c);




            $('.form').css({ "display": "none" })
            $('h1').fadeOut(200);
            $('.x').addClass('form-success');

        } else {
            return false;
        }
    });
});

$("#login-button").click(function(event) {
    event.preventDefault();
    var log = $("#log").val();

    var pass = $("#passLog").val()
    var checkUname = localStorage.getItem("userName");
    var checkEmail = localStorage.getItem("email");
    var checkUpassword = localStorage.getItem("password");
    var count = localStorage.getItem("count");


    if (log === checkEmail && pass === checkUpassword && count < 1) {
        // window.open("http://127.0.0.1:5500/index.html", "_self").close();
        window.open('exam.html', '_blank');
        window.setTimeout(function() { this.close(); }, 1000)
        c++;
        localStorage.setItem("count", c);


        // window.location.replace("index.html");
    } else {
        alert("you have already took your exam");
    }


});