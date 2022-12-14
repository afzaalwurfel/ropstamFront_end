<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ropstam | Dashboard</title>
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <script src="http://cdn.ckeditor.com/4.6.1/standard/ckeditor.js"></script>
  </head>
  <body><!-- the following Event ID for your records://CRO-7546-WHHQ -->

    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Ropstam dashboard</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">

        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center"> Ropstam <small>Dashboard</small></h1>
            <a class="navbar-brand " style="float:right;" onclick="logoutuseingbackEndApi(event);" href="http://localhost:7000/api/logout">logout</a>
          </div>
        </div>
      </div>
    </header>

    <section id="main">
      <div class="container">
        <div class="row">
        {{-- Table --}}
                <div class="table-responsive">
                    <table id="simpletable dataTable" class="table table-striped table-bordered nowrap dataTable"
                        role="grid" aria-describedby="simpletable_info">
                        <thead>
                            <tr role="row">
                                <th>car Name</th>
                                <th>vehical class</th>
                                <th>vehical brand</th>
                                <th>car color</th>
                                <th>car engine capicity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <tr>
                                <td class="col-md-12" id="pipeline-content">
                                    <b>Innayah Services Referral</b>
                                </td>
                                <td class="col-md-12" id="pipeline-content">
                                    <b>01/01/2023</b>
                                </td>
                                <td class="col-md-12" id="pipeline-content">
                                    <a href="https://constroot.com/manualplan" class="btn btn-primary btn-sm">GO!</a>
                                </td>

                            </tr> -->

                        </tbody>
                    </table>
                    <br><br><br><br><br><br>
                </div>
                {{-- Table Ends --}}
          <div class="col-md-4 col-md-offset-4">
            <h1>this is Dashboard for car's   .</h1>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer">
      <p>Copyright Dev Afzaal Iqbal, &copy; 2022</p>
    </footer>

  <script>
     CKEDITOR.replace( 'editor1' );
 </script>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.8/js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/Dashboard.js"></script>
  </body>
</html>
