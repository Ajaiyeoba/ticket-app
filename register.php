<?php
// Include config file
require_once "config.php";
 
// Define variables and initialize with empty values
$fullname = $email = $phone = $password = $confirm_password = "";
$fullname_err = $email_err = $phone_err = $password_err = $confirm_password_err = "";
 
// Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    // Validate fullname
    if (empty(trim($_POST["fullname"]))) {
        $fullname_err = "Please enter a fullname.";
    } elseif (!preg_match('/^[a-zA-Z ]+$/', trim($_POST["fullname"]))) {
        $fullname_err = "Enter your full name";
    } else {
        $fullname = trim($_POST["fullname"]);
    }
    
    // Validate email address
    if (empty($_POST["email"])) {
        $email_err = "Please enter your email address.";
    } else {
        $email = trim($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email_err = "Please enter a valid email address.";
        }
    }

    // Validate password
    if (empty(trim($_POST["password"]))) {
        $password_err = "Please enter a password.";
    } elseif (strlen(trim($_POST["password"])) < 6) {
        $password_err = "Password must have at least 6 characters.";
    } else {
        $password = trim($_POST["password"]);
    }
    
    // Validate phone number
    if (empty(trim($_POST["phone"]))) {
        $phone_err = "Please enter your phone number.";
    } elseif (!preg_match('/^\d+$/', trim($_POST["phone"]))) {
        $phone_err = "Please enter a valid phone number.";
    } else {
        $phone = trim($_POST["phone"]);
    }
    
    // Validate confirm password
    if (empty(trim($_POST["confirm_password"]))) {
        $confirm_password_err = "Please confirm password.";
    } else {
        $confirm_password = trim($_POST["confirm_password"]);
        if (empty($password_err) && ($password != $confirm_password)) {
            $confirm_password_err = "Password did not match.";
        }
    }
    
    // Check input errors before inserting in database
    if (empty($fullname_err) && empty($email_err) && empty($phone_err) && empty($password_err) && empty($confirm_password_err)) {
        
        // Prepare an insert statement
        $sql = "INSERT INTO users (fullname, email, phone, password) VALUES (?, ?, ?, ?)";
         
        if ($stmt = mysqli_prepare($link, $sql)) {
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ssss", $param_fullname, $param_email, $param_phone, $param_password);
            
            // Set parameters
            $param_fullname = $fullname;
            $param_email = $email;
            $param_phone = $phone;
            $param_password = $password; // Creates a password hash
            
            // Attempt to execute the prepared statement
            if (mysqli_stmt_execute($stmt)) {
                // Redirect to login page
                header("location: login.php");
                exit();
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }

            // Close statement
            mysqli_stmt_close($stmt);
        }
    }
    
    // Close connection
    mysqli_close($link);
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign Up to create an Account</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Poppins&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/bf172a1461.js" crossorigin="anonymous"></script>
<style>
     .formbold-main-wrapper{
    display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
}
.formbold-form-wrapper {
          margin: 0 auto;
          max-width: 570px;
          width: 100%;
          background: white;
          padding: 40px;
        }
        .formbold-form-title {
          margin-bottom: 30px;
        }
        .formbold-form-title h2 {
          font-weight: 600;
          font-size: 28px;
          line-height: 34px;
          text-align: center;
        }
        .formbold-input-flex {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
        }
        .formbold-input-flex > div {
          width: 50%;
        }
        .formbold-form-input {
          text-align: left;
          width: 100%;
          padding: 13px 22px;
          border-radius: 5px;
          border: 1px solid #dde3ec;
          background: #ffffff;
          font-weight: 500;
          font-size: 16px;
          color: #551a8b;
          outline: none;
          resize: none;
        }
        .formbold-form-input:focus {
          border-color: #6a64f1;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
        }
        .formbold-form-label {
          color: #551a8b;
          font-size: 14px;
          line-height: 24px;
          display: block;
          margin-bottom: 10px;
        }
        .formbold-btn {
          font-size: 16px;
          border-radius: 5px;
          padding: 14px 25px;
          border: none;
          font-weight: 500;
          background-color: #04b01d;
          color: white;
          cursor: pointer;
          margin-top: 25px;
        }
        .formbold-btn:hover {
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
        }
        .formbold-mb-3 {
          margin-bottom: 15px;
        }
    </style>
</head>
<body>

<header>
        <a href="" class="logo">
            <h2>TicketBritte</h2>
        </a>

        <ul class="navmenu">
            <li><a href="index.html">Home</a></li>            
            <li><a href="eve">Concerts</a></li>
            <li><a href="">About</a></li>            
            <li><a href="">Contact</a></li>

        </ul>

        <div class="nav-icon">
            <a href=""><i class="fa-solid fa-user"></i></a>
           <div  class="fa-solid fa-bars" id="menu-icon"></div>
        </div>
    </header>


    <section class="">
     

<div class="formbold-main-wrappper">
        <div class="formbold-form-wrapper">
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                <div class="formbold-form-title">
                    <h2 style="color: #551a8b">Register</h2>

    </div>
    <div class="formbold-input-flex">
    <label for="staff_id" class="formbold-form-label">
                  FullName
                </label>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Enter your Fullname"
                    class="formbold-form-input <?php echo (!empty($fullname_err)) ? 'is-invalid' : ''; ?>"  value="<?php echo $fullname; ?>"
                />
                <span class="invalid-feedback" style="display: none;" ><?php echo $fullname_err; ?></span>
    </div>

    <div class="formbold-input-flex">
    <label for="password" class="formbold-form-label">
                  Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email Address"
                    class="formbold-form-input <?php echo (!empty($email_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $email; ?>"
                />
                <span class="invalid-feedback" style="display: none;" ><?php echo $email_err; ?></span>
              </div>

    <div class="formbold-input-flex">
    <label for="staff_id" class="formbold-form-label">
                  Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone Number"
                    class="formbold-form-input <?php echo (!empty($phone)) ? 'is-invalid' : ''; ?>"  value="<?php echo $phone; ?>"
                />
                <span class="invalid-feedback" style="display: none;" ><?php echo $phone_err; ?></span>
    </div>
    <div class="formbold-input-flex">
            <div>
                <label for="password" class="formbold-form-label">
                  Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    class="formbold-form-input  <?php echo (!empty($password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $password; ?>"
                />
                <span class="invalid-feedback" style="display: none;" ><?php echo $password_err; ?></span>
              </div>
              <div>
                <label for="password" class="formbold-form-label">
                  Confirm Paasword
                </label>
                <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Your Password"
                    class="formbold-form-input   <?php echo (!empty($confirm_password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $confirm_password; ?>"
                />
                <span class="invalid-feedback" style="display: none;" ><?php echo $confirm_password_err; ?></span>
              </div>
    </div>

    <input type="submit" name="submit" class="formbold-btn" value="Register">
        <p>Already Have an Account? <a href="login.php">Login</a></p>
</div>

    </div>
        </section>





<section class="contact" id="">
        <div class="contact-info">
            <div class="first-info">
            <a href="" class="logo">
            <h2>TicketBrite</h2></a>
                <p>Oyo State Nigeria</p>
                <p>08052148610</p>
                <p>ajaiyeobajibola@gmail.com</p>
            <div class="social-icon">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-tiktok"></i></a>
                    <a href=""></a>
                </div>
            </div>

            <div class="second-info">
                <h4>Support</h4>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
            </div>

            <div class="third-info">
                <h4>Cart</h4>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
            </div>
            <div class="fourth-info">
                <h4>Company</h4>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
            </div>

            <div class="five-info">
                <h4>Support</h4>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
                <p>Support</p>
            </div>
        </div>
    </section>
</body>
</html>