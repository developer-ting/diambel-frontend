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
                        <p class="text_reg">With over four decades of experience, we have built a vertically integrated
                            pipeline to source rough diamonds from reputed miners, cut and polish in our
                            state-of-the-art facility, and strategically partner with jewellery manufacturers and retail
                            stores to offer 360-degree solutions in every step of a natural diamond's journey.</p>
                        <p class="text_reg font22 pt_30">While we work hard to forge a website for you,<br>
                            you can register here to stay updated on all things Diambel.</p>
                    </div>
                    <div class="coming_soon_right">
                        <img class="shape_two" src="img/coming-soon/shape_two.png" alt="shape" />
                        <img class="star_shape_one" src="img/coming-soon/star_shape_one.png" alt="shape" />
                        <img class="star_shape_two" src="img/coming-soon/star_shape_two.png" alt="shape" />
                        <form class="form f_w_a" id="contact_form" name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact">
                            <h5 class="text_reg pb_30">Register your interest</h5>
                            <div class="form_field">
                                <input class="text_sm" type="text" id="name" name="name" placeholder="Name" required>
                            </div>
                            <div class="form_field">
                                <input class="text_sm" type="email" id="email" name="email" placeholder="Email ID"
                                    required>
                            </div>
                            <div class="form_field">
                                <input class="text_sm" type="text" id="company" name="company" placeholder="Company"
                                    required>
                            </div>
                            <div class="btn_box pt_20">
                                <button type="submit" class="btn_project_default black_btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- <div id="thankyou" class="">
            <div class="pop">
                <div class="inner_box">
                    <img src="img/coming-soon/cancel.png" class="img-responsive close" alt="close">
                    <p>Thank you for writing to us.</p>
                    <p>We will get back to you shortly.</p>
                </div>
            </div>
        </div> -->
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
    });
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(formData).toString(),
            })
            .then(() => $('#contact_form')[0].reset())
            .catch((error) => alert(error));
    };

    document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
    </script>
</body>

</html>