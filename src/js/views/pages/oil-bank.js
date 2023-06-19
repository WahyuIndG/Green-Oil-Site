const OilBank = {
   render() {
      return `
      <section class="heading py-5">
         <div class="row justify-content-between align-items-center">
            <div class="col-lg-7 col-12 text-wrap">
               <h1 class="fw-bold mb-3">A Clean and Healthy Environment is Everyone's Right.</h1>
               <p class="mb-5" >Therefore, we must keep the environment clean to avoid various diseases. A clean and healthy environment can also improve the quality of human life</p>
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
            <h2 class="fs-1">Form</h2>
            <p class="col-lg-6 col-10 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro aliquam delectus perferendis eum neque.</p>
         </div>
         <form id="form" action="" data-multi-step class="d-flex flex-column align-items-center">
            <div class="d-flex flex-column align-items-center">
               <div class="input-group mb-2">
                  <div class="input-group-text" style="color: inherit;">Name</div>
                  <input type="text" id="name" class="form-control">
               </div>
               <div class="input-group mb-2">
                  <div class="input-group-text" style="color: inherit;">HP Num.</div>
                  <input type="text" id="hp" class="form-control">
               </div>
               <div class="input-group mb-2">
                  <div class="input-group-text" style="color: inherit;">Address</div>
                  <input type="text" id="address" class="form-control">
               </div>
               <div class="input-group mb-2">
                  <div class="input-group-text" style="color: inherit;">Qty</div>
                  <input type="number" id="quantity" class="form-control">
               </div>
               <div class="input-group mb-2">
                  <div class="input-group-text" style="color: inherit;">Price</div>
                  <input type="text" id="price" class="form-control" placeholder="12000" disabled>
                  <div class="input-group-text" style="width: 90px; color: inherit;">/ litre</div>
               </div>
               <div class="input-group mb-2">
                  <div class="input-group-text" style="color: inherit;">Total</div>
                  <input type="text" id="total" class="form-control" disabled>
               </div>
            </div>
            <button id="submitButton" type="submit" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#myModal">Submit</button>
            <!-- modal -->
            <div class="modal" id="myModal">
               <div class="modal-dialog">
                  <div class="modal-content p-3">
                     <div class="modal-header">
                        <h2>Thank You !</h2>
                        <button class="btn btn-close" data-bs-toggle="modal"></button>
                     </div>
                     <div class="modal-body">
                        <p>Hopefullly you can share your journey to the othe for contribution to our future world 😁</p>
                     </div>
                     <div class="footer text-center">
                        <button class="btn btn-success" data-bs-toggle="modal" id="okButton">OK</button>
                     </div>
                  </div>
               </div>
            </div>
         </form>
      </section>
      `;
   }
}

export default OilBank;