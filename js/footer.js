let footerSection = document.querySelector('footer')

let createFooterContent = `
 <div class="container">
         <div class="top">
            <div class="footer_bx b1">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="./index.html"><i class='bx bx-chevron-right' ></i> Home</a></li>
                        <li><a href="./about.html"><i class='bx bx-chevron-right' ></i> About Us</a></li>
                        <li><a href="./contact.html"><i class='bx bx-chevron-right' ></i> Contact Us</a></li>
                        <li><a href="#"><i class='bx bx-chevron-right' ></i> Reservation</a></li>
                        <li><a href="#"><i class='bx bx-chevron-right' ></i> Privacy Policy</a></li>
                        <li><a href="#"><i class='bx bx-chevron-right' ></i> Team & Condition</a></li>
                    </ul>
            </div>
            <div class="footer_bx b2">
                      <h3>Contact</h3>
                      <div class="addressBx">
                        <i class='bx bxs-map' ></i>
                        <p>569 Teyvat,Liyue ,Liyue habor</p>
                      </div>
                      <div class="addressBx">
                        <i class='bx bxs-phone' ></i>
                        <p>0123456789</p>
                      </div>
                      <div class="addressBx">
                        <i class='bx bxs-envelope' ></i>
                        <p>teyvathit@gmail.com</p>
                      </div>
                      <div class="social_mediaBx">
                        <i class='bx bxl-twitter' ></i>
                        <i class='bx bxl-youtube' ></i>
                        <i class='bx bxl-facebook' ></i>
                        <i class='bx bxl-linkedin'></i>
                      </div>
            </div>
            <div class="footer_bx b3">
                   <h3>Opening</h3>
                   <div class="timeOpen">
                    <p class="week">Monday - Saturday</p>
                    <p>08AM - 10PM</p>
                   </div>
                   <div class="timeOpen">
                    <p class="week">Sunday</p>
                    <p>10AM - 08PM</p>
                   </div>
            </div>

         <div class="down">
            <div class="left">
                <p>© CCW Kitchen, All Rights Reserved.</p>
                <p>Inspiration Design By : <a href="https://www.free-css.com/free-css-templates/page290/restoran">HTML Codex</a></p>
            </div>
            
            </div>
         </div>
    </div>
`


footerSection.innerHTML = createFooterContent