import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../scss.css";
import "../profile/assets/css/animate.min.css";
import "../profile/assets/css/demo.css";
import "../profile/assets/css/pe-icon-7-stroke.css";


const Profile = (props) => {
    if(!props.user.email){ 
        props.history.push('/log-in') 
    }   
    
    return (
      <div>
        {/* {props.match.url === "/profile" ? (
          <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
            Welcome to your eML - {props.user.email}
          </h2>
        ) : (
          " "
        )} */}
        {/* <Admin /> */}
        {/* <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={props => <AdminLayout {...props}  />}
            />
            <Redirect
              from="/profile"
              to="/profile/admin/dashboard"
              render={props}
            />
          </Switch>
        </BrowserRouter> */}

        {/* Profile
            Welcome {props.user.email} !!! 

        <div className="main-panel ps ps--active-y" id="main-panel">
  
   
        <div className="content container">


        <div className="row">
      <div className="col-md-6">
        <div className="card  card-tasks">
          <div className="card-header ">
            <h5 className="card-category">Your Data</h5>
            <h4 className="card-title">Recommendations</h4>
          </div>
          <div className="card-body ">
            <div className="table-full-width table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" defaultChecked />
                          <span className="form-check-sign" />
                        </label>
                      </div>
                    </td>
                    <td className="text-left">Get more followers because you are the absolute shit at organic follower growth</td>
                    <td className="td-actions text-right">
                      <button type="button" rel="tooltip" title className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                        <i className="now-ui-icons ui-2_settings-90" />
                      </button>
                      <button type="button" rel="tooltip" title className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                        <i className="now-ui-icons ui-1_simple-remove" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" />
                          <span className="form-check-sign" />
                        </label>
                      </div>
                    </td>
                    <td className="text-left">Get more followers because you are the absolute shit at organic follower growth</td>
                    <td className="td-actions text-right">
                      <button type="button" rel="tooltip" title className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                        <i className="now-ui-icons ui-2_settings-90" />
                      </button>
                      <button type="button" rel="tooltip" title className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                        <i className="now-ui-icons ui-1_simple-remove" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" defaultChecked />
                          <span className="form-check-sign" />
                        </label>
                      </div>
                    </td>
                    <td className="text-left">Get more followers because you are the absolute shit at organic follower growth</td>
                    <td className="td-actions text-right">
                      <button type="button" rel="tooltip" title className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                        <i className="now-ui-icons ui-2_settings-90" />
                      </button>
                      <button type="button" rel="tooltip" title className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                        <i className="now-ui-icons ui-1_simple-remove" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" defaultChecked />
                          <span className="form-check-sign" />
                        </label>
                      </div>
                    </td>
                    <td className="text-left">Get more followers because you are the absolute shit at organic follower growth</td>
                    <td className="td-actions text-right">
                      <button type="button" rel="tooltip" title className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                        <i className="now-ui-icons ui-2_settings-90" />
                      </button>
                      <button type="button" rel="tooltip" title className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                        <i className="now-ui-icons ui-1_simple-remove" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" defaultChecked />
                          <span className="form-check-sign" />
                        </label>
                      </div>
                    </td>
                    <td className="text-left">Get more followers because you are the absolute shit at organic follower growth</td>
                    <td className="td-actions text-right">
                      <button type="button" rel="tooltip" title className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                        <i className="now-ui-icons ui-2_settings-90" />
                      </button>
                      <button type="button" rel="tooltip" title className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                        <i className="now-ui-icons ui-1_simple-remove" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer ">
            <hr />
            <div className="stats">
              <i className="now-ui-icons loader_refresh spin" /> Updated 3 minutes ago
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-category">Top 5</h5>
            <h4 className="card-title"> Your Top 5 Influencers</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <tr><th>
                      Name
                    </th>
                    <th>
                      Category
                    </th>
                    <th>
                      City
                    </th>
                    <th className="text-right">
                      Followers
                    </th>
                  </tr></thead>
                <tbody>
                  <tr>
                    <td>
                      Role Model 1
                    </td>
                    <td>
                      Vlogs
                    </td>
                    <td>
                      Oud-Turnhout
                    </td>
                    <td className="text-right">
                      100,000
                    </td>
                  </tr>
                  <tr>
                    <td>
                        Role Model 2
                    </td>
                    <td>
                      Vlogs
                    </td>
                    <td>
                      Sinaai-Waas
                    </td>
                    <td className="text-right">
                    100,000
                    </td>
                  </tr>
                  <tr>
                    <td>
                        Role Model 3
                    </td>
                    <td>
                        Vlogs
                    </td>
                    <td>
                      Baileux
                    </td>
                    <td className="text-right">
                    100,000
                    </td>
                  </tr>
                  <tr>
                    <td>
                        Role Model 4
                    </td>
                    <td>
                        Vlogs
                    </td>
                    <td>
                      Feldkirchen in Kärnten
                    </td>
                    <td className="text-right">
                    100,000
                    </td>
                  </tr>
                  <tr>
                    <td>
                        Role Model 5
                    </td>
                    <td>
                        Vlogs
                    </td>
                    <td>
                      Gloucester
                    </td>
                    <td className="text-right">
                    100,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
        </div> */}
      </div>
    );
}

export default Profile;
