import React from "react";
import "../css/notfound.css";
function Notfound() {
  return (
    <div className="not">
      <div class="page-wrap d-flex flex-row align-items-center found">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">404</span>
              <div class="mb-4 lead">
                The page you are looking for was not found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
