const Home = {
   render() {
      return `
      <section class="heading py-5">
         <div class="row justify-content-between align-items-center">
            <div class="col-lg-7 col-12 text-wrap">
               <h1 class="fw-bold mb-3">Awesome Ideas For The Enviroment</h1>
               <p class="mb-5" >We are team that provide great future of the earth Lorem ipsum dolor sit amet consectetur adipisicing elit global expert.</p>
               <button type="button" class="mybtn mybtn-primary">Get Started</button>
               <button type="button" class="mybtn mybtn-secondary">
                  <img src="assets/icons/secondary.svg" alt="recycle" width="28px">
                  <img src="assets/icons/secondary-hover.svg" alt="recycle" width="28px">
                  Recycle Now
               </button>
            </div>   
            <div class="col-lg-5 col-12 d-flex">
               <img src="assets/img3.png" alt="heading image" style="margin: auto; width: 80%;">
            </div>
         </div>
      </section>

      <section class="why py-5 mb-5">
         <div class="header-section d-flex flex-column align-items-center mb-4">
            <h2 class="fs-1">Eminence</h2>
            <p class="col-lg-6 col-10 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro aliquam delectus perferendis eum neque.</p>
         </div>
         <div class="row"> 
            <div class="col-lg-4 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2 p-2">
                  <img src="assets/icons/easy.png" alt="" width="30px" class="mb-2">
                  <h3>Easy Peasy</h3>
                  <p>Lorem ipsum dolor sit amet cons ec tetur adipi sicing elit. Exercitat ionem.</p>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2">
                  <img src="assets/icons/fast.png" alt="" width="30px" class="mb-2">
                  <h3>Fast Process</h3>
                  <p>Lorem ipsum dolor sit amet cons ec tetur adipi sicing elit. Exercitat ionem.</p>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2">
                  <img src="assets/icons/premium.png" alt="" width="30px" class="mb-2">
                  <h3>High Quality</h3>  
                  <p>Lorem ipsum dolor sit amet cons ec tetur adipi sicing elit. Exercitat ionem.</p>
               </div>
            </div>
         </div>
      </section>

      <section class="services p-5 mb-5 rounded-2">
         <div class="header-section d-flex flex-column align-items-center mb-4">
            <h2 class="fs-1">Services</h2>
            <p class="col-lg-6 col-10 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro aliquam delectus perferendis eum neque.</p>
         </div>
         <div class="row gy-5">
            <div class="col-lg-4 col-sm-6 col-12 d-flex flex-column align-items-center">
               <div class="service-box rounded-2">
                  <div class="service-box-img">
                     <img src="assets/service-storage.png" alt="service image">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4 mb-4 mt-2">Oil Storage</h3>
                     <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at qui nihil cum fuga facilis?</p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 d-flex flex-column align-items-center">
               <div class="service-box rounded-2">
                  <div class="service-box-img">
                     <img src="assets/service-delivery.jpg" alt="service image">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4 mb-4 mt-2">Deliver to You</h3>
                     <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at qui nihil cum fuga facilis?</p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 d-flex flex-column align-items-center">
               <div class="service-box rounded-2">
                  <div class="service-box-img">
                     <img src="assets/service-payment.jpg" alt="service image">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4 mb-4 mt-2">Fast Payment</h3>
                     <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at qui nihil cum fuga facilis?</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section class="heading py-5">
         <div class="row justify-content-between align-items-center">
            <div class="col-lg-7 col-12 text-wrap">
               <h2 class="fw-bold mb-3">From Great Contribution Come Great Existence</h2>
               <p class="mb-5" >A clean and healthy environment can also improve the quality of human life. Clean air and clear water will make us feel healthier and more comfortable.</p>
               <button type="button" class="mybtn mybtn-primary">Start Now</button>
            </div>   
            <div class="col-lg-5 col-12 d-flex">
               <img src="assets/img5.png" alt="heading image" style="margin: auto; width: 80%;">
            </div>
         </div>
      </section>
      `;
   }
}

export default Home;