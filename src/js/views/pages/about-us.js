const AboutUs = {
   render() {
      return `
      <section class="heading py-5">
         <div class="row justify-content-between align-items-center">
            <div class="col-lg-7 col-12 text-wrap">
               <h1 class="fw-bold mb-3">Relating To Us</h1>
               <p class="mb-5" >GreenOil is a website that exists to introduce the best alternative for the community in reducing the negative impact of used cooking oil on the environment. In the last decade, used cooking oil has become a big problem in the world, because a lot of used cooking oil is dumped in rivers or sewers, which threatens the environment and human health.</p>
            </div>   
            <div class="col-lg-5 col-12 d-flex">
               <img src="assets/logo.png" alt="heading image" style="margin: auto; width: 80%;">
            </div>
         </div>
      </section>

      <section class="why py-5 mb-5">
         <div class="header-section d-flex flex-column align-items-center mb-4">
            <h2 class="fs-1">Vision & Mision</h2>
         </div>
         <div class="row"> 
            <div class="col-lg-6 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2 p-2 text-center">
                  <h3 class="fs-4">Vision</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iste laboriosam quibusdam, voluptates sint, dolores, in optio dolore eaque quidem ad illum reiciendis minus tempore! Nesciunt deleniti dolor rem eius..</p>
               </div>
            </div>
            <div class="col-lg-6 col-sm-6 p-3 d-flex flex-column align-items-center">
               <div class="why-box px-4 pt-4 pb-2 text-center">
                  <h3 class="fs-4">Mission</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iste laboriosam quibusdam, voluptates sint, dolores, in optio dolore eaque quidem ad illum reiciendis minus tempore! Nesciunt deleniti dolor rem eius.</p>
               </div>
            </div>
         </div>
      </section>

      <section class="pb-5 mb-5">
         <div class="header-section d-flex flex-column align-items-center mb-4">
            <h2 class="fs-1">About App</h2>
            <p class="ol-lg-6 col-10 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam rem provident harum perspiciatis incidunt reprehenderit quas perferendis quod fuga! Harum possimus repudiandae nobis asperiores atque unde dolores nisi consectetur autem cum laboriosam, suscipit nesciunt necessitatibus voluptatum ipsa alias reiciendis saepe assumenda eius dolorem non, quam quisquam! Nisi dolorem dolorum vel in rem consequatur suscipit vitae ipsam maiores accusantium consectetur sint beatae animi, incidunt delectus nobis, soluta omnis quia recusandae consequuntur quaerat sed. Odit animi dolores nihil repellat obcaecati corporis cumque libero ratione at incidunt sapiente id est, qui inventore, numquam exercitationem perferendis tempore! Quam ullam voluptas asperiores nesciunt accusantium recusandae!</p>
         </div>
      </section>

      <section class="services p-5 rounded-2">
         <div class="header-section d-flex flex-column align-items-center mb-4">
            <h2 class="fs-1">Our Team</h2>
         </div>
         <div class="row gy-5 members">
            <div class="col-lg-3 col-sm-6 col-12 d-flex flex-column align-items-center">
               <div class="service-box rounded-2 p-2 h-100">
                  <div class="service-box-img d-flex justify-content-center" style="max-height: 300px;">
                     <img src="assets/member/Albar.jpeg" alt="service image" height="300px">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4">Albar</h3>
                     <p style="font-size: 14px;">Universitas Jabal Ghafur | Teknik Informatika</p>
                  </div>
               </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 d-flex flex-column align-items-center">
               <div class="service-box rounded-2 p-2 h-100">
                  <div class="service-box-img d-flex justify-content-center" style="max-height: 300px;">
                     <img src="assets/member/Azril.jpeg" alt="service image" height="300px">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4">Azriel</h3>
                     <p style="font-size: 14px;">Universitas Ghunadarma | Sistem Informasi</p>
                  </div>
               </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 d-flex flex-column align-items-center">
               <div class="service-box rounded-2 p-2 h-100">
                  <div class="service-box-img d-flex justify-content-center" style="max-height: 300px;">
                     <img src="assets/member/Rasyid.jpeg" alt="service image" height="300px">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4">Rasyid</h3>
                     <p style="font-size: 14px;">Universitas Ghunadarma | Sistem Informasi</p>
                  </div>
               </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 d-flex flex-column align-items-center">
               <div class="service-box rounded-2 p-2 h-100">
                  <div class="service-box-img d-flex justify-content-center" style="max-height: 300px;">
                     <img src="assets/member/Wahyu.jpeg" alt="service image" height="300px">
                  </div>
                  <div class="service-box-desc p-4 d-flex flex-column align-items-center text-center">
                     <h3 class="fs-4">Wahyu</h3>
                     <p style="font-size: 14px;">Universitas Negeri Surabaya | Teknik Informatika</p>
                  </div>
               </div>
            </div>
         </div>
      </section>  
      `;
   }
}

export default AboutUs;