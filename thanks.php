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

    <main id="thank_you_page" class="smooth_scroll_pages">
        <img class="shape_one" src="img/thank_you/shape_one.png" alt="shape" />
        <img class="shape_three" src="img/thank_you/shape_three.png" alt="shape" />
        <img class="shape_four" src="img/thank_you/shape_four.png" alt="shape" />
        <!--  insert body content  -->
        <section class="coming_soon_header">
            <div class="container">
                <div class="logo">
                    <img src="img/coming-soon/logo.png" alt="logo" />
                </div>
            </div>
        </section>

        <div class="thank_you_content">
            <div class="content_desc">
                <img class="object_one" src="img/thank_you/object_one.png" alt="shape" />
                <img class="object_two" src="img/thank_you/object_two.png" alt="shape" />
                <img class="object_three" src="img/thank_you/object_three.png" alt="shape" />
                <img class="object_four" src="img/thank_you/object_four.png" alt="shape" />
                <p class="text_lg">Thank you for writing to us.</p>
                <p class="text_lg">We will get back to you shortly.</p>
            </div>
        </div>

    </main>
    <?php include("includes/include_js.html") ?>
    <script defer>
    setTimeout(() => {
        window.location.href = 'https://diambelgroup.com/'
    }, 5000);
    </script>
</body>

</html>