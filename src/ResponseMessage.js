import React from "react";

export default function ResponseMessage(props) {
  if (!props.resp) return null;
  const resp = props.resp;

  function redirect() {
    if (props.onSuccess) {
      props.onSuccess();
    }
  }

  return (
    <>
      {resp?.result === "error" && (
        <>
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div class="alert alert-danger">
              <span class="icon-warning"></span>
              {resp.message}
              <a
                class="close"
                data-dismiss="alert"
                href="#"
                aria-hidden="true"
                onClick={() => props.handleClose()}
              ></a>
            </div>
          </div>
          <div className="col-sm-4"></div>
          <p></p> <br />
          <br />
          <br />
        </>
      )}
      {resp?.result === "success" && redirect()}
      <br />
    </>
  );
}
