<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">

    <title>Department</title>
  </head>
  <body>
    <div class="container my-5">
	<form method="POST" action="">
  <div class="form-group">
    <label for="dept_id">dept_id</label>
    <input type="text" name="dept_id" class="form-control" placeholder="Enter dept_id">
  </div>
  <div class="form-group">
    <label for="dept_name">dept_name</label>
    <input type="text" name="dept_name" class="form-control" placeholder="Enter dept_name">
  </div>
  <button type="submit" name="submit" class="btn btn-primary">Submit</button>
</form>
  </body>
  
</html>


<?php
include 'connect.php';
if(isset($_POST['submit']))
{
    $dept_id=$_POST['dept_id'];
    $dept_name=$_POST['dept_name'];
    $sql="insert into dept(dept_id,dept_name)values('$dept_id','$dept_name')";
    $result=mysqli_query($con,$sql);
    if($result)
    {
        //header('location:displaydept.php');
        echo'<script>alert("Record Inserted")</script>';
        echo'<script>window.location.href="displaydept.php";</script>';
    }
    else{
        die(mysqli_error($con));
    }
}
?>
    