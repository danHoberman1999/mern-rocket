import React, { useState } from "react";
import NavigationBar from "./navigationBar";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import Message from "./message";
import Progress from "./progress";
import { Redirect } from "react-router-dom";

const Styles = styled.div`
  .container {
    margin-top: 50px;
    border-radius: 15px;
  }
  .form-info {
    margin: 50px 200px 150px 200px;
    border-radius: 8px;
    background-color: white;
    padding: 60px;
  }
  .title {
    border-radius: 15px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    margin-bottom: 15px;
  }

  .btn {
    background-color: purple;
  }
`;

function ProfileUpload(props) {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File");
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [redirectTo, setRedirectTo] = useState(null);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
          setTimeout(() => setRedirectTo("/"), 2000);
        },
      });
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <Styles>
        <React.Fragment>
          <NavigationBar loggedIn={props.loggedIn} />

          <Form className="form-info" onSubmit={onSubmit}>
            {message ? <Message msg={message} /> : null}
            <h1 className="title">React Profile Pic Upload</h1>
            <div className="custom-file mb-4">
              <input
                type="file"
                accept=".png"
                name="photo"
                className="custom-file-input"
                id="customFile"
                onChange={onChange}
              />
              <label className="custom-file-label" htmlFor="customFile">
                {filename}
              </label>
              <div className="mt-4">
                <Progress percentage={uploadPercentage} />
              </div>
            </div>

            <input
              type="submit"
              value="Upload"
              className="btn btn-primary btn-block mt-4"
            />
          </Form>
        </React.Fragment>
      </Styles>
    );
  }
}

export default ProfileUpload;
