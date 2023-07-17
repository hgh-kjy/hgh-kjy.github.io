import Image from 'next/image'

export default function Home() {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>	
      </head>

      <body>
        <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="slick/slick.min.js"></script>
        <div class="flex justify-center items-center ">
          <h1>Awesome Tailwind!!</h1>
        </div>
        <div class="slider-for">
          <div>your content</div>
          <div>your content</div>
          <div>your content</div>
        </div>
        <div class="slider-nav">
          <div>your content</div>
          <div>your content</div>
          <div>your content</div>
        </div>
        $(document).ready(function(){
          $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
          })
        });
        $(document).ready(function(){
          $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true,
            adaptiveHeight: true,
            centerPadding: '40px',
            autoplay: true,
          })
        });
      </body>
    </html>
  )
}
