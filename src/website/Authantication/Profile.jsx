import React from 'react';

const Profile = () => {
  const bannerStyle = {
    background: 'url(images/single-banner.jpg) no-repeat center',
  };

  const imageStyle = {
    width: 80,
    height: 80,
  };

  return (
    <div>
  
      
      
      <section className="inner-section profile-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Your Profile</h4><button data-bs-toggle="modal" data-bs-target="#profile-edit">edit
                    profile</button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="profile-image">
                        <a>
                          <img style={{ width: 80, height: 80 }} src="https://vsmart.ajspire.com/images/ee.png" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group"><label className="form-label">name</label><input className="form-control" type="text" defaultValue="Akanksha" readOnly /></div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group"><label className="form-label">Email</label><input className="form-control" type="email" defaultValue="akankshaghadge29@gmail.com" readOnly /></div>
                    </div>
                    <div className="col-lg-2">
                      <div className="profile-btn"><a href="/change_pass/5698">change pass.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>contact number</h4><button data-bs-toggle="modal" data-bs-target="#contact-add">Edit
                    Contact</button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact active">
                        <h6>primary</h6>
                        <p>9552473748</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Delivery Address</h4><button data-bs-toggle="modal" data-bs-target="#address-add">Edit
                    Address</button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address active">
                        <h6>Home</h6>
                        <p>beed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
};

export default Profile;
