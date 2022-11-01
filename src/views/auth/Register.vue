<template>
     <div>
    <div class="row vh-100 d-flex justify-content-center">
      <div class="col-12 align-self-center">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4 mx-auto">
              <div class="card">
                <div class="card-body p-0 auth-header-box">
                    <div class="text-center p-3">
                                        <a href="index.html" class="logo logo-admin">
                                            <img src="../../assets/logo1.png" height="50" alt="logo" class="auth-logo">
                                        </a>
                                        <h4 class="mt-3 mb-1 fw-semibold text-black font-18">Let's Get Started</h4>   
                                        <p class="text-muted  mb-0">Sign up.</p>  
                                    </div>
                </div>
                <div class="card-body pt-0">
                  <form class="my-4" action="index.html">
                    <div class="form-group mb-2">
                      <label class="form-label" for="username">Fullname</label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        
                      />
                    </div>
                    
                    <!--end form-group-->

                    <div class="form-group mb-2">
                      <label class="form-label" for="useremail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="useremail"
                       
                      />
                    </div>
                    <!--end form-group-->

                    <div class="form-group mb-2">
                      <label class="form-label" for="userpassword"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        
                      />
                    </div>
                    <!--end form-group-->

                    <div class="form-group mb-2">
                      <label class="form-label" for="Confirmpassword"
                        >ConfirmPassword</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="Confirmpassword"
                        placeholder="Enter Confirm password"
                      />
                    </div>
                    <!--end form-group-->

                   
                    <!--end form-group-->

                    <div class="form-group row mt-3">
                      <div class="col-12">
                        <div class="form-check form-switch form-switch-success">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="customSwitchSuccess"
                          />
                          <label
                            class="form-check-label"
                            for="customSwitchSuccess"
                            >By registering you agree to the Unikit
                            <a href="#" class="text-primary"
                              >Terms of Use</a
                            ></label
                          >
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end form-group-->

                    <div class="form-group mb-0 row">
                      <div class="col-12">
                        <div class="d-grid mt-3">
                          <button
                           
                            class="btn btn-primary"
                            type="button"
                          >
                            Register <i class="fas fa-sign-in-alt ms-1"></i>
                          </button>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end form-group-->
                  </form>
                  <!--end form-->
                  <div class="m-3 text-center text-muted">
                    <p class="mb-0">
                      Already have an account ?
                      <router-link to="/" class="text-primary ms-2">Login </router-link>
                      
                    </p>
                  </div>
                </div>
                <!--end card-body-->
              </div>
              <!--end card-->
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end card-body-->
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </div>
</template>
