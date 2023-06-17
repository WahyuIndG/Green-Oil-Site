const Services = {
  render() {
    return `
    <section class="heading py-5">
    <div class="row justify-content-between align-items-center">
       <div class="col-lg-7 col-12 text-wrap">
          <h1 class="fw-bold mb-3">Serving Oil Management in Your Environment.</h1>
          <p class="mb-5" >We provide several services for you, such as waste exchange and waste pick-up through digital transactions</p>
       </div>   
       <div class="col-lg-5 col-12 d-flex">
          <img src="assets/heading-layanan.png" alt="heading image" style="margin: auto; width: 80%;">
       </div>
    </div>
 </section>

 <section class="why py-5 mb-5">
    <div class="header-section d-flex flex-column align-items-center mb-4">
       <h2 class="fs-1">Our Feature</h2>
       <p class="col-lg-6 col-10 text-center" >We provide several services for you, such as waste exchange and waste collection through digital transactions</p>
    </div>
    <div class="row"> 
       <div class="col-lg-3 col-sm-6 p-3">
          <div class="why-box px-4 pt-4 pb-2 p-2 text-center" style="border: 4px solid var(--accent); background-color: #fff; border-radius: 60px;">
             <p class="fw-bold" style="font-size: 18px;">Oil Bank</p>
          </div>
       </div>
       <div class="col-lg-3 col-sm-6 p-3">
          <div class="why-box px-4 pt-4 pb-2 p-2 text-center" style="border: 4px solid var(--accent); background-color: #fff; border-radius: 60px;">
             <p class="fw-bold" style="font-size: 18px;">Picking-Up Oil</p>
          </div>
       </div>
       <div class="col-lg-3 col-sm-6 p-3">
          <div class="why-box px-4 pt-4 pb-2 p-2 text-center" style="border: 4px solid var(--accent); background-color: #fff; border-radius: 60px;">
             <p class="fw-bold" style="font-size: 18px;">Concultation</p>
          </div>
       </div>
       <div class="col-lg-3 col-sm-6 p-3">
          <div class="why-box px-4 pt-4 pb-2 p-2 text-center" style="border: 4px solid var(--accent); background-color: #fff; border-radius: 60px;">
             <p class="fw-bold" style="font-size: 18px;">Recycling Oil</p>
          </div>
       </div>
    </div>
 </section>

 <section class="services p-5 mb-5 rounded-2">
    <div class="header-section d-flex flex-column align-items-center mb-4">
       <h2 class="fs-1">Our Services</h2>
       <p class="col-lg-6 col-10 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro aliquam delectus perferendis eum neque.</p>
    </div>
    <div class="row gy-5">
       <div class="col-lg-4 col-sm-6 d-flex flex-column align-items-center">
          <div class="service-box rounded-2">
             <div class="service-box-img text-center pt-4">
                <img src="assets/layanan-1.png" alt="service image" width="50%">
             </div>
             <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                <h3 class="fs-4 mb-4 mt-2">Oil Bank</h3>
                <p class="">Is a feature used in the management of your oil. Oil bank is the concept of collecting oil, segregated and having management like a bank, but what is saved is not money but used cooking oil</p>
             </div>
          </div>
       </div>
       <div class="col-lg-4 col-sm-6 d-flex flex-column align-items-center">
          <div class="service-box rounded-2 h-100">
             <div class="service-box-img pt-4 text-center">
                <img src="assets/layanan-2.png" alt="service image" width="50%">
             </div>
             <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                <h3 class="fs-4 mb-4 mt-2">Digital Transaction</h3>
                <p class="">Transactions are made via the transfer method, making it easier for you to receive benefits from used cooking oil exchange transactions</p>
             </div>
          </div>
       </div>
       <div class="col-lg-4 col-sm-6 d-flex flex-column align-items-center">
          <div class="service-box rounded-2 h-100">
             <div class="service-box-img text-center pt-4">
                <img src="assets/layanan-3.png" alt="service image" width="50%">
             </div>
             <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                <h3 class="fs-4 mb-4 mt-2">Used Oil Recycling</h3>
                <p class="">We also provide information to you on how to recycle waste into useful products.</p>
             </div>
          </div>
       </div>
    </div>
 </section>
    `;
  }
}

export default Services;