<?php
$con=mysqli_connect("localhost","root","","farhan");


if (isset($_POST['sinUp'])) {
    $username=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    $check="SELECT * FROM club where email='$email'";
    $result= $con->query($check);
    
    if ($result->num_rows>0) {
       echo "Email Already Exists";
    }
    else {
      $insert="INSERT INTO club VALUES(?,?,?)";
      $sql=$con->prepare($insert);
      $sql->bind_param("sss",$username,$email,$password);
      $sql->execute();
      session_start();
        $_SESSION['email']=$email;
        $_SESSION['password']=$password;
        header("location:study.html");
    }
}

if (isset($_POST['sinIn'])) {

    $email=$_POST['email'];
    $password=$_POST['password'];

    

    $check="SELECT * FROM club where email='$email' and password='$password'";
    $result= $con->query($check);
    if ($result->num_rows>0) {
        echo "Welcome";
        session_start();
        $_SESSION['email']=$email;
        $_SESSION['password']=$password;
        header("location:study.html");
     }
     else {
        echo "Email dose not exists";
     }


}
?>