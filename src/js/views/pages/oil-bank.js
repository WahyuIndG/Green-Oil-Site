const OilBank = {
   render() {
      return `
      <section class="heading py-5">
         <div class="row justify-content-between align-items-center">
            <div class="col-lg-7 col-12 text-wrap">
               <h1 class="fw-bold mb-3">A Clean and Healthy Environment is Everyone's Right.</h1>
               <p class="mb-5" >Therefore, we must keep the environment clean to avoid various diseases. A clean and healthy environment can also improve the quality of human life</p>
               <button type="button" class="mybtn mybtn-primary">Dive Into It</button>
            </div>   
            <div class="col-lg-5 col-12 d-flex">
               <img src="assets/img4.png" alt="heading image" style="margin: auto; width: 80%;">
            </div>
         </div>
      </section>

      <section class="why py-5 mb-5">
         <div class="header-section d-flex flex-column align-items-center mb-4">
            <h2 class="fs-1">How to Use</h2>
            <p class="col-lg-6 col-10 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro aliquam delectus perferendis eum neque.</p>
         </div>
         <div class="row"> 
            <div class="col-lg-4 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2 p-2">
                  <img src="assets/icons/one.png" alt="" width="30px" class="mb-2">
                  <h3>Prepare Oil</h3>
                  <p>Lorem ipsum dolor sit amet cons ec tetur adipi sicing elit. Exercitat ionem.</p>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2">
                  <img src="assets/icons/two.png" alt="" width="30px" class="mb-2">
                  <h3>Fill Out Form</h3>
                  <p>Lorem ipsum dolor sit amet cons ec tetur adipi sicing elit. Exercitat ionem.</p>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2">
                  <img src="assets/icons/three.png" alt="" width="30px" class="mb-2">
                  <h3>Earn Money</h3>  
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
            <div class="col-lg-4 col-sm-6 d-flex flex-column align-items-center">
               <div class="service-box rounded-2">
                  <div class="service-box-img">
                     <img src="assets/service-storage.png" alt="service image">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4 mb-4 mt-2">How</h3>
                     <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at qui nihil cum fuga facilis?</p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6 d-flex flex-column align-items-center">
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
            <div class="col-lg-4 col-sm-6 d-flex flex-column align-items-center">
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
      `;
   }
}

export default OilBank;