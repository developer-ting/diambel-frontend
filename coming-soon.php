<!doctype html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
  <?php include("includes/include_css.html") ?>
</head>

<body class="">
  <?php include("includes/browser_upgrade.html") ?>
  <?php include("includes/loader.html") ?>

  <main id="coming_soon_page" class="smooth_scroll_pages">
    <img class="shape_one" src="img/coming-soon/shape_one.png" alt="shape" />
    <img class="shape_three" src="img/coming-soon/shape_three.png" alt="shape" />
    <img class="shape_four" src="img/coming-soon/shape_four.png" alt="shape" />
    <!--  insert body content  -->
    <section class="coming_soon_header">
      <div class="container">
        <div class="logo">
          <img src="img/coming-soon/logo.png" alt="logo" />
        </div>
      </div>
    </section>
    <section class="coming_soon_main pt_60">
      <div class="container">
        <div class="coming_soon_flex">
          <div class="coming_soon_left">
            <h2 class="text_xxxxl pb_30">Coming Soon</h2>
            <p class="text_reg">We are a vertically-integrated natural diamond supplier. With over three decades of
              experience and an enviable ecosystem of manufacturing facilities, miners and more, we offer 360-degree
              solutions through every step of a natural diamond’s journey.</p>
            <p class="text_reg font22 pt_30">While we work hard to forge a website for you,<br>
              you can register here to stay updated on all things Diambel.</p>
          </div>
          <div class="coming_soon_right">
            <img class="shape_two" src="img/coming-soon/shape_two.png" alt="shape" />
            <img class="star_shape_one" src="img/coming-soon/star_shape_one.png" alt="shape" />
            <img class="star_shape_two" src="img/coming-soon/star_shape_two.png" alt="shape" />
            <form class="form f_w_a" id="contact_form">
              <h5 class="text_reg pb_30">Register your interest</h5>
              <div class="form_field">
                <input class="text_sm" type="text" id="name" name="name" placeholder="Name">
              </div>
              <div class="form_field">
                <input class="text_sm" type="email" id="email" name="email" placeholder="Email ID">
              </div>
              <div class="form_field">
                <input class="text_sm" type="text" id="company" name="company" placeholder="Company">
              </div>
              <div class="btn_box pt_20">
                <button type="submit" class="btn_project_default black_btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div id="thankyou" class="">
      <div class="pop">
        <div class="inner_box">
          <img src="img/coming-soon/cancel.png" class="img-responsive close" alt="close">
          <p>Thank you for writing to us.</p>
          <p>We will get back to you shortly.</p>
        </div>
      </div>
    </div>
    <!--  end body content -->
  </main>
  <?php include("includes/include_js.html") ?>
  <script defer>
  //for letters only
  $.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z][a-zA-Z ]+$/i.test(value);
  });

  //for email only
  $.validator.addMethod("emailtest", function(value, element) {
    return this.optional(element) || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
  });

  $("#thankyou").hide();
  $("#contact_form").validate({
    rules: {
      name: {
        required: true,
        lettersonly: true,
        minlength: 2
      },
      email: {
        emailtest: true,
        required: true,
        email: true
      },
      company: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "This field is required",
        lettersonly: "Please enter a text only"
      },
      email: {
        required: "This field is required",
        emailtest: "Please enter a valid email address"
      },
      company: {
        required: "This field is required",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        // url: 'https://script.google.com/macros/s/AKfycbyggLh1cwVWEzS5XXqykjQjlrGIXKcH9i0inrJj6wJ_7kc_bWpqJ8bWxJgAttnJThKaWQ/exec',
        type: 'post',
        data: $("#contact_form").serializeArray(),
        success: function($response) {
          $('#thankyou').show();
          $('body').css({
            "overflow": "hidden",
            "position": "relative"
          });
          $('#contact_form')[0].reset();
          setTimeout(function() {
            $('#thankyou').hide();
            $('body').css({
              "overflow": "unset",
              "position": "unset"
            });
          }, 5000);
        },
        error: function() {
          alert("There was an error. PLease try again.")
        }
      });
    }
  });
  $("img.close").click(function() {
    $("#thankyou").hide();
  });
  </script>
</body>

</html>